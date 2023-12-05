import React from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Space from "./Space";

const main_type = [
    "Programme Gorille",
    "Programme Biodiversité",
    "Programme bien être communautaire",
    "Programme Biodiversité",
    "Programme Gorille",
    "Programme Biodiversité",
    "Programme bien être communautaire",
    "Programme Biodiversité",
    "Programme Gorille",
    "Programme Biodiversité",
    "Programme bien être communautaire",
    "Programme Biodiversité",
];

const sub_type = [
    "Tout",
    "Pistage de Gorille",
    "Surveillance de site",
    "Inventaire de Gorille",
    "Tout",
    "Pistage de Gorille",
    "Surveillance de site",
    "Inventaire de Gorille",
    "Tout",
    "Pistage de Gorille",
    "Surveillance de site",
    "Inventaire de Gorille",
];

const ProgramType = () => {
    return (
        <div className="w-full">
            <ul className="flex overflow-auto gap-4 w-full">
                {main_type?.map((type, index) => (
                    <li
                        key={index}
                        className={`${
                            index == 0 ? "bg-primary" : "bg-primary/25"
                        } ${
                            index == 0 ? "text-white" : "text-black"
                        } shrink-0 px-7 py-2 border border-primary rounded-md font-semibold flex gap-2 items-center`}
                    >
                        <span>{type}</span>
                        <span className="text-2xl">
                            <IoArrowDownCircleOutline />
                        </span>
                    </li>
                ))}
            </ul>
            <Space />
            <div className="flex gap-3 items-center">
                <span className="shrink-0">{main_type[0]}</span>
                <ul className="flex overflow-auto gap-4 grow">
                    {sub_type.map((type, index) => (
                        <li
                            key={index}
                            className={`${
                                index == 0 ? "bg-secondary/10" : "bg-primary/5"
                            } shrink-0  text-text px-7 py-2 border border-primary/25 rounded-md flex gap-2 items-center`}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProgramType;
