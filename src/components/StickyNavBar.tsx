"use client";
import { RouteParam } from "@/types";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const StickyNavBar = ({ lang }: Pick<RouteParam["params"], "lang">) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) setShow(true);
            else setShow(false);
        };
        handleScroll();
        document.addEventListener("scroll", handleScroll, true);

        return () => document.removeEventListener("scroll", handleScroll, true);
    }, []);

    return (
        <div
            style={{ top: show ? "0px" : "-50vh" }}
            className="fixed z-30 left-0 right-0 bg-text/40 py-2 text-white backdrop-blur-3xl duration-500"
        >
            <div className=" container ">
                <Navbar lang={lang} />
            </div>
        </div>
    );
};

export default StickyNavBar;
