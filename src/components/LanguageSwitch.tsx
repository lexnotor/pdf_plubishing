"use client";
import { languages } from "@/app/i18n/settings";
import { RouteParam } from "@/types";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";

const LangDrawer = ({ cur, isOpen }: { cur: string; isOpen: boolean }) => {
    const path = usePathname().replace(`/${cur}`, "");
    const searchParam = useSearchParams();

    return (
        <ul
            style={{ height: isOpen ? "auto" : "0px" }}
            className="absolute left-0 right-0 top-10 text-text font-bold rounded-md overflow-hidden duration-500 transition-all"
        >
            {languages
                .filter((item) => item != cur)
                .map((item) => (
                    <li
                        key={item}
                        className="pl-9 py-1 cursor-pointer text-white bg-primary/50 hover:text-secondary duration-500  rounded-r-full rounded-l-full"
                    >
                        <Link
                            scroll={false}
                            href={`/${item}/${path}?${searchParam.toString()}`}
                        >
                            {item.toUpperCase()}
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

const LanguageSwitch = ({ lang }: Pick<RouteParam["params"], "lang">) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (typeof document == "undefined") return;
        const handleClose = () => {
            setIsOpen(false);
        };
        document.addEventListener("click", handleClose);
        return () => document.removeEventListener("click", handleClose);
    }, [isOpen]);

    return (
        <div
            className="relative cursor-pointer"
            onClick={() => setIsOpen((o) => !o)}
        >
            <div className="flex gap-2 items-center  bg-primary/25 rounded-r-full rounded-l-full py-1 px-3 duration-500">
                <span>
                    <TfiWorld />
                </span>
                <span>{(lang ?? languages[0]).toUpperCase()}</span>
                <span>
                    <FaChevronDown />
                </span>
            </div>

            <LangDrawer cur={lang} isOpen={isOpen} />
        </div>
    );
};

export default LanguageSwitch;
