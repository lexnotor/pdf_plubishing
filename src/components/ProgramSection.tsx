"use client";

import { categoryService } from "@/apis/services/category.service";
import { magazineService } from "@/apis/services/magazine.service";
import { useTranslation } from "@/app/i18n/client";
import { RouteParam } from "@/types";
import { CategoryEntry, MagazineEntry } from "@/types/contentful";
import { EntryCollection } from "contentful";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import ProgramList from "./ProgramList";
import ProgramPagination from "./ProgramPagination";
import ProgramType from "./ProgramType";
import Space from "./Space";

const ProgramSection: (
    props: Pick<RouteParam["params"], "lang">,
) => JSX.Element = ({ lang }) => {
    const { t } = useTranslation(lang, "program");
    const [categories, setCategories] =
        useState<EntryCollection<CategoryEntry, "WITHOUT_UNRESOLVABLE_LINKS">>(
            null,
        );
    const [programs, setPrograms] = useState<
        EntryCollection<MagazineEntry, "WITHOUT_UNRESOLVABLE_LINKS">[]
    >([]);

    const searchParam = useSearchParams();

    const currentType = useRef({
        main: null,
        sub: null,
    });
    const currentSearch = useRef<string>(null);

    const currentPage = useMemo(
        () => +(searchParam.get("page") ?? 1),
        [searchParam],
    );

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!categories) return;

        const typeChanged =
            currentType.current.main != searchParam.get("main_type") ||
            currentType.current.sub != searchParam.get("sub_type");

        const searchChanged = currentSearch.current != searchParam.get("s");

        currentType.current.main = searchParam.get("main_type");
        currentType.current.sub = searchParam.get("sub_type");
        currentSearch.current = searchParam.get("s");

        if (programs[currentPage - 1] && !typeChanged && !searchChanged) return;

        if (currentSearch.current && document.querySelector("#our-programs")) {
            document.querySelector("#our-programs").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
            });
        }
        setLoading(true);
        magazineService
            .getMagazines(
                {
                    skip: 4 * (currentPage - 1),
                    limit: 4,
                    "fields.category.sys.contentType.sys.id": "categories",
                    "fields.category.fields.parent.sys.id":
                        currentType.current.main ?? undefined,
                    "fields.category.sys.id":
                        currentType.current.sub ?? undefined,
                    "fields.title[match]": currentSearch.current ?? undefined,
                },
                lang,
            )
            .then((data) =>
                setPrograms((old) => {
                    const val = typeChanged ? [] : [...old];
                    val[currentPage - 1] = data;
                    return val;
                }),
            )
            .finally(() => setLoading(false));
    }, [currentPage, programs, searchParam, categories, lang]);

    useEffect(() => {
        categoryService.getCategories({}, lang).then((data) => {
            setCategories(data);
        });
    }, [lang]);

    return (
        <section
            id="our-programs"
            className="px-[1rem] sm:px-[2rem] lg:px-[6rem] py-[1rem] sm:py-[4rem] text bg-gradient-radial from-primary/20 from-5% to-50% to-white container"
        >
            <h2 className="text-2xl font-bold" title="Nos Programmes">
                {t("program:our-programs")}
            </h2>

            <Space />

            <ProgramType data={categories} lang={lang} />

            <Space />

            {loading ? (
                <div className="py-8 flex justify-center items-center">
                    <span className="w-8 h-8 border-transparent border-2 border-t-primary rounded-full animate-spin" />
                </div>
            ) : (
                <ProgramList
                    data={programs[currentPage - 1] ?? null}
                    lang={lang}
                    i18nT={t}
                />
            )}

            <Space />

            <ProgramPagination
                pageSize={4}
                total={programs[0]?.total ?? 0}
                lang={lang}
            />
        </section>
    );
};

export default ProgramSection;
