"use client";
import logo from "@/assets/images/logo_text.png";
import { RouteParam } from "@/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import LanguageSwitch from "./LanguageSwitch";
import Search from "./Search";
import { useTranslation } from "@/app/i18n/client";

const Navbar = ({ lang }: Pick<RouteParam["params"], "lang">) => {
    const pathname = usePathname();
    const [hash, setHash] = useState("");
    const { t } = useTranslation(lang, "header");

    useEffect(() => {
        const handleHash = () => {
            setHash(window.location.hash);
        };
        handleHash();
        window.addEventListener("hashchange", handleHash);
        return () => window.removeEventListener("hashchange", handleHash);
    }, []);

    return (
        <div className="flex justify-between items-center">
            <figure>
                <a href="/">
                    <Image
                        alt="dian fossey gorilla fund"
                        src={logo}
                        width={200}
                        height={100}
                        className="w-auto max-h-24"
                        title="Dian Fossey Gorilla Fund Logo"
                    />
                </a>
            </figure>

            <nav>
                <ul className="flex justify-between gap-8 [&>li:hover]:text-primary [&>li]:duration-500 [&>li]:cursor-pointer">
                    <li
                        className={
                            hash == "" && pathname == `/${lang}`
                                ? "text-primary"
                                : ""
                        }
                    >
                        <a href="/">{t("header:navbar.home")}</a>
                    </li>
                    <li
                        className={
                            hash == "#our-programs" || pathname != `/${lang}`
                                ? "text-primary"
                                : ""
                        }
                    >
                        <a href="#our-programs">
                            {t("header:navbar.programs")}
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://gorillafund.org/who-we-are/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-1"
                        >
                            <span>{t("header:navbar.about")}</span>
                            <span className="text-lg">
                                <HiArrowTopRightOnSquare />
                            </span>
                        </a>
                    </li>

                    <li className={hash == "#contact-us" ? "text-primary" : ""}>
                        <a href="#contact-us">{t("header:navbar.contact")}</a>
                    </li>
                </ul>
            </nav>

            <div>
                <Search lang={lang} />
            </div>

            <div>
                <LanguageSwitch lang={lang} />
            </div>
        </div>
    );
};

export default Navbar;
