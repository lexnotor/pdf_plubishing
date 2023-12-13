"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import ProgramType from "./ProgramType";
import Space from "./Space";
import ProgramList from "./ProgramList";
import ProgramPagination from "./ProgramPagination";
import { EntryCollection } from "contentful";
import { CategoryEntry, MagazineEntry } from "@/types/contentful";
import { magazineService } from "@/apis/services/magazine.service";
import { useSearchParams } from "next/navigation";
import { categoryService } from "@/apis/services/category.service";

const ProgramSection = () => {
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

    const currentPage = useMemo(
        () => +(searchParam.get("page") ?? 1),
        [searchParam],
    );

    useEffect(() => {
        if (!categories) return;

        const typeChanged =
            currentType.current.main != searchParam.get("main_type") ||
            currentType.current.sub != searchParam.get("sub_type");

        currentType.current.main = searchParam.get("main_type");
        currentType.current.sub = searchParam.get("sub_type");

        if (programs[currentPage - 1] && !typeChanged) return;

        magazineService
            .getMagazines({
                skip: 4 * (currentPage - 1),
                limit: 4,
                "fields.category.sys.contentType.sys.id": "categories",
                "fields.category.fields.parent.sys.id":
                    currentType.current.main ?? undefined,
                "fields.category.sys.id": currentType.current.sub ?? undefined,
            })
            .then((data) =>
                setPrograms((old) => {
                    const val = [...old];
                    val[currentPage - 1] = data;
                    return val;
                }),
            );
    }, [currentPage, programs, searchParam, categories]);

    useEffect(() => {
        categoryService.getCategories().then((data) => {
            setCategories(data);
        });
    }, []);

    return (
        <section
            id="our-programs"
            className="px-[6rem] py-[4rem] text bg-gradient-radial from-primary/20 from-5% to-50% to-white container"
        >
            <h2 className="text-2xl font-bold" title="Nos Programmes">
                Nos Programmes
            </h2>

            <Space />

            <ProgramType data={categories} />

            <Space />

            <ProgramList data={programs[currentPage - 1] ?? null} />

            <Space />

            <ProgramPagination pageSize={4} total={programs[0]?.total ?? 0} />
        </section>
    );
};

export default ProgramSection;
