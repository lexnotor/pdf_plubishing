"use client";
import { useTranslation } from "@/app/i18n/client";
import { RouteParam } from "@/types";
import React from "react";
import { FiSearch } from "react-icons/fi";

const Search: (props: Pick<RouteParam["params"], "lang">) => JSX.Element = ({
    lang,
}) => {
    const { t } = useTranslation(lang, "header");
    return (
        <div className="border rounded-l-full rounded-r-full border-white px-5 py-1 flex gap-2">
            <input
                type="search"
                placeholder={t("header:search.placeholder")}
                className="placeholder:text-white py-2 bg-transparent"
            />
            <span className="text-lg self-center">
                <FiSearch />
            </span>
        </div>
    );
};

export default Search;
