"use client";
import Image from "next/image";
import logo from "@/assets/images/logo_text.png";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Search from "./Search";
import LanguageSwitch from "./LanguageSwitch";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RouteParam } from "@/types";

const Navbar = ({ lang }: Pick<RouteParam["params"], "lang">) => {
    const pathname = usePathname();
    const [hash, setHash] = useState("");

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
                        className="w-auto"
                        title="Dian Fossey Gorilla Fund Logo"
                    />
                </a>
            </figure>

            <nav>
                <ul className="flex justify-between gap-8 [&>li:hover]:text-primary [&>li]:duration-500 [&>li]:cursor-pointer">
                    <li
                        className={
                            hash == "" && pathname == "/" ? "text-primary" : ""
                        }
                    >
                        <a href="/">Home</a>
                    </li>
                    <li
                        className={
                            hash == "#our-programs" || pathname != "/"
                                ? "text-primary"
                                : ""
                        }
                    >
                        <a href="#our-programs">Our Programs</a>
                    </li>
                    <li>
                        <a
                            href="https://gorillafund.org/who-we-are/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-1"
                        >
                            <span>About Us</span>
                            <span className="text-lg">
                                <HiArrowTopRightOnSquare />
                            </span>
                        </a>
                    </li>

                    <li className={hash == "#contact-us" ? "text-primary" : ""}>
                        <a href="#contact-us">Contact</a>
                    </li>
                </ul>
            </nav>

            <div>
                <Search />
            </div>

            <div>
                <LanguageSwitch lang={lang} />
            </div>
        </div>
    );
};

export default Navbar;
