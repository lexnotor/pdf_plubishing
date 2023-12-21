"use client";
import { useTranslation } from "@/app/i18n/client";
import { RouteParam } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";

const Search: (props: Pick<RouteParam["params"], "lang">) => JSX.Element = ({
    lang,
}) => {
    const { t } = useTranslation(lang, "header");
    const textRef = useRef<HTMLInputElement>(null);
    const searchParams = useSearchParams(),
        router = useRouter();

    const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const query = new URLSearchParams(searchParams);
        textRef.current.value
            ? query.set("s", textRef.current.value)
            : query.delete("s");

        router.push(`/${lang}?${query.toString()}`, { scroll: false });
    };

    return (
        <form
            onSubmit={submit}
            className="border rounded-l-full rounded-r-full border-white px-3 sm:px-5 py-1 flex gap-2"
        >
            <input
                type="search"
                placeholder={t("header:search.placeholder")}
                className="placeholder:text-white py-2 bg-transparent"
                ref={textRef}
                defaultValue={searchParams.get("s")}
            />
            <button className="text-lg self-center">
                <FiSearch />
            </button>
        </form>
    );
};

export default Search;
