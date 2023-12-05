import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { FaChevronDown } from "react-icons/fa6";

const LanguageSwitch = () => {
    return (
        <div className="flex gap-2 items-center">
            <span>
                <TfiWorld />
            </span>
            <span>En</span>
            <span>
                <FaChevronDown />
            </span>
        </div>
    );
};

export default LanguageSwitch;
