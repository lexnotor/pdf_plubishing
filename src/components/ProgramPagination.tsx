import React from "react";
import {
    IoArrowBackCircleOutline,
    IoArrowForwardCircleOutline,
} from "react-icons/io5";

const ProgramPagination = () => {
    return (
        <div className="flex gap-4 justify-center items-center">
            <button className="flex gap-4">
                <span className="text-2xl text-neutral-400">
                    <IoArrowBackCircleOutline />
                </span>
                <span className="text-neutral-400">Previous</span>
            </button>

            <ul className="flex gap-0 text-black text-[85%] font-bold">
                <li className="rounded-full flex justify-center items-center text-white bg-primary h-8 w-8">
                    1
                </li>
                <li className="rounded-full flex justify-center items-center h-8 w-8">
                    2
                </li>
                <li className="rounded-full flex justify-center items-center h-8 w-8">
                    3
                </li>
            </ul>

            <button className="flex gap-4">
                <span className="text-black font-bold">Next</span>
                <span className="text-2xl">
                    <IoArrowForwardCircleOutline />
                </span>
            </button>
        </div>
    );
};

export default ProgramPagination;
