"use client";

import { ProgramPaginationProps } from "@/types";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
    IoArrowBackCircleOutline,
    IoArrowForwardCircleOutline,
} from "react-icons/io5";

const ProgramPagination: (props: ProgramPaginationProps) => JSX.Element = ({
    pageSize,
    total,
}) => {
    const searchParam = useSearchParams();
    const pathname = usePathname();

    const currentPage = +(searchParam.get("page") ?? 1);
    const numPage = Math.ceil(total / pageSize);

    // TABLE OF PAGE NUMBER TO BE MAPPED
    const pages = [
        ...(function* () {
            for (let i = 1; i <= numPage; i++) {
                yield i;
            }
        })(),
    ];

    return numPage >= 1 ? (
        <div className="flex gap-4 justify-center items-center">
            <button
                className="flex gap-4 disabled:text-neutral-400"
                disabled={currentPage == 1}
            >
                <span className="text-2xl">
                    <IoArrowBackCircleOutline />
                </span>
                <span>Previous</span>
            </button>

            <ul className="flex gap-0 text-black text-[85%] font-bold">
                {/* FIRST FOUR PAGE */}
                {pages.slice(0, 4).map((page) => {
                    const query = new URLSearchParams(searchParam);
                    query.set("page", `${page}`);

                    return (
                        <li
                            key={page}
                            className={`rounded-full flex justify-center items-center h-8 w-8 ${
                                page == currentPage
                                    ? "text-white bg-primary"
                                    : null
                            }`}
                        >
                            <Link
                                scroll={false}
                                href={{ pathname, query: query.toString() }}
                            >
                                {page}
                            </Link>
                        </li>
                    );
                })}

                {/* CURRENT_PAGE */}
                {numPage > 4 && currentPage > 4 && currentPage != numPage ? (
                    <li
                        className={
                            "rounded-full flex justify-center items-center h-8 w-8 text-white bg-primary"
                        }
                    >
                        <Link
                            scroll={false}
                            href={(() => {
                                const query = new URLSearchParams(searchParam);
                                query.set("page", `${currentPage}`);
                                return {
                                    pathname,
                                    query: query.toString(),
                                };
                            })()}
                        >
                            {currentPage}
                        </Link>
                    </li>
                ) : null}

                {/* LAST_PAGE */}
                {numPage > 4 ? (
                    <li
                        className={`rounded-full flex justify-center items-center h-8 w-8 ${
                            numPage == currentPage
                                ? "text-white bg-primary"
                                : null
                        }`}
                    >
                        <Link
                            scroll={false}
                            href={(() => {
                                const query = new URLSearchParams(searchParam);
                                query.set("page", `${numPage}`);
                                return {
                                    pathname,
                                    query: query.toString(),
                                };
                            })()}
                        >
                            {numPage}
                        </Link>
                    </li>
                ) : null}
            </ul>

            <button
                className="flex gap-4 disabled:text-neutral-400"
                disabled={Math.ceil(total / pageSize) <= currentPage}
            >
                <span className="font-bold">Next</span>
                <span className="text-2xl">
                    <IoArrowForwardCircleOutline />
                </span>
            </button>
        </div>
    ) : (
        <></>
    );
};

export default ProgramPagination;
