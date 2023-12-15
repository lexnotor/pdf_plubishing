"use client";
import logo from "@/assets/images/logo_text.png";
import logo_s from "@/assets/images/logo.png";
import { RouteParam } from "@/types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import LanguageSwitch from "./LanguageSwitch";
import Search from "./Search";
import { useTranslation } from "@/app/i18n/client";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = ({ lang }: Pick<RouteParam["params"], "lang">) => {
    const pathname = usePathname();
    const [hash, setHash] = useState("");
    const { t } = useTranslation(lang, "header");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    useEffect(() => {
        const handleHash = () => {
            setHash(window.location.hash);
        };
        handleHash();
        window.addEventListener("hashchange", handleHash);
        return () => window.removeEventListener("hashchange", handleHash);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", closeDrawer);
        return () => window.removeEventListener("scroll", closeDrawer);
    }, []);

    return (
        <div className="flex justify-between items-center max-sm:gap-4">
            <figure className="max-lg:order-1">
                <a href={`/${lang}/`}>
                    <Image
                        alt="dian fossey gorilla fund"
                        src={logo}
                        width={200}
                        height={100}
                        className="w-auto max-h-24 max-sm:hidden"
                        title="Dian Fossey Gorilla Fund Logo"
                    />
                    <Image
                        alt="dian fossey gorilla fund"
                        src={logo_s}
                        width={200}
                        height={100}
                        className="w-auto sm:hidden max-h-24 scale-[1.9] translate-x-2"
                        title="Dian Fossey Gorilla Fund Logo"
                    />
                </a>
            </figure>

            <nav className="max-lg:order-3">
                <span
                    className="lg:hidden text-3xl"
                    onClick={() => setDrawerOpen(true)}
                >
                    <FiMenu />
                </span>

                <ul
                    style={{ right: drawerOpen ? "0px" : "200vw" }}
                    className="duration-500 max-lg:fixed z-[60] top-0 bg-no-repeat max-lg:bg-primary/20 max-lg:h-screen max-lg:p-8 max-lg:w-screen max-lg:backdrop-blur-md flex max-lg:flex-col lg:justify-between gap-8 [&>li:hover]:text-primary [&>li]:duration-500 [&>li]:cursor-pointer"
                >
                    <figure
                        onClick={closeDrawer}
                        className="lg:hidden self-start"
                    >
                        <a href={`/${lang}/`}>
                            <Image
                                alt="dian fossey gorilla fund"
                                src={logo}
                                width={300}
                                height={150}
                                className="w-auto max-h-36"
                                title="Dian Fossey Gorilla Fund Logo"
                            />
                        </a>
                    </figure>
                    <span
                        className="lg:hidden text-3xl absolute right-12"
                        onClick={closeDrawer}
                    >
                        <IoClose />
                    </span>
                    <li
                        onClick={closeDrawer}
                        className={
                            hash == "" && pathname == `/${lang}`
                                ? "text-primary"
                                : ""
                        }
                    >
                        <a href={`/${lang}/`}>{t("header:navbar.home")}</a>
                    </li>

                    <li
                        onClick={closeDrawer}
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

                    <li onClick={closeDrawer}>
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

                    <li
                        onClick={closeDrawer}
                        className={hash == "#contact-us" ? "text-primary" : ""}
                    >
                        <a href="#contact-us">{t("header:navbar.contact")}</a>
                    </li>

                    <li className="lg:hidden absolute bottom-24 right-10">
                        <Suspense
                            fallback={
                                <div className="border-t-2 border-t-secondary rounded-full animate-spin w-4 h-4" />
                            }
                        >
                            <LanguageSwitch lang={lang} />
                        </Suspense>
                    </li>
                </ul>
            </nav>

            <div className="max-lg:order-2 max-sm:scale-90">
                <Search lang={lang} />
            </div>

            <div className="max-lg:order-4 max-lg:hidden">
                <Suspense
                    fallback={
                        <div className="border-t-2 border-t-secondary rounded-full animate-spin w-4 h-4" />
                    }
                >
                    <LanguageSwitch lang={lang} />
                </Suspense>
            </div>
        </div>
    );
};

export default Navbar;
