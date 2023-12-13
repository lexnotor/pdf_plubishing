"use client";
import { ProgramTypeProps } from "@/types";
import { CategoryEntry } from "@/types/contentful";
import { Entry } from "contentful";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import Space from "./Space";

const ProgramType: (props: ProgramTypeProps) => JSX.Element = ({ data }) => {
    const searchParam = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const [main, setMain] = useState<
        Entry<CategoryEntry, "WITHOUT_UNRESOLVABLE_LINKS">[]
    >([]);
    const [sub, setSub] = useState<
        Entry<CategoryEntry, "WITHOUT_UNRESOLVABLE_LINKS">[]
    >([]);

    const currentType = useMemo(() => {
        return {
            main: searchParam.get("main_type"),
            sub: searchParam.get("sub_type") ?? null,
        };
    }, [searchParam]);

    if (!currentType.main && main[0]?.sys?.id) {
        const query = new URLSearchParams(searchParam);
        query.set("main_type", main[0]?.sys?.id);
        query.delete("sub_type");
        query.set("page", "1");
        router.push(`${pathname}?${query.toString()}`);
    }

    useEffect(() => {
        if (!data) return;

        const temp_sub: typeof sub = [],
            temp_main: typeof main = [];

        data?.items.forEach((cat) => {
            if (cat.fields.parent) temp_sub.push(cat);
            else temp_main.push(cat);
        });

        setMain(temp_main);
        setSub(temp_sub);
    }, [data]);
    return (
        <div className="w-full">
            <ul className="flex flex-wrap gap-4 w-full">
                {main?.map((type, index) => {
                    const query = new URLSearchParams(searchParam);
                    query.set("main_type", type?.sys?.id);
                    query.delete("sub_type");
                    query.set("page", "1");

                    return (
                        <li
                            key={index}
                            className={`${
                                type?.sys?.id == currentType.main
                                    ? "bg-primary"
                                    : "bg-primary/25"
                            } ${
                                type?.sys?.id == currentType.main
                                    ? "text-white"
                                    : "text-black"
                            } shrink-0 border border-primary rounded-md font-semibold duration-500`}
                        >
                            <Link
                                href={{
                                    pathname,
                                    query: query.toString(),
                                }}
                                className="flex gap-2 items-center px-7 py-2"
                                scroll={false}
                            >
                                <span>{type.fields.title}</span>
                                <span className="text-2xl">
                                    <IoArrowDownCircleOutline />
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <Space />
            <div className="flex gap-3">
                <ul className="flex flex-wrap items-center overflow-auto gap-4 grow">
                    <span className="shrink-0">
                        {
                            main?.find(
                                (item) => item?.sys?.id == currentType.main,
                            )?.fields?.title
                        }
                    </span>
                    <li
                        className={`${
                            !currentType.sub
                                ? "bg-secondary/10"
                                : "bg-primary/5"
                        } shrink-0  text-text border border-primary/25 rounded-md flex`}
                    >
                        <Link
                            href={(() => {
                                const query = new URLSearchParams(searchParam);
                                query.delete("sub_type");
                                query.set("page", "1");
                                return {
                                    pathname,
                                    query: query.toString(),
                                };
                            })()}
                            className="px-7 py-2"
                            scroll={false}
                        >
                            Tout
                        </Link>
                    </li>
                    {sub
                        .filter(
                            (type) =>
                                type?.fields?.parent?.sys?.id ==
                                currentType.main,
                        )
                        .map((type, index) => {
                            const query = new URLSearchParams(searchParam);
                            query.set("sub_type", type?.sys?.id);
                            query.set("page", "1");

                            return (
                                <li
                                    key={type?.sys?.id ?? index}
                                    className={`${
                                        type?.sys?.id == currentType.sub
                                            ? "bg-secondary/10"
                                            : "bg-primary/5"
                                    } shrink-0  text-text border border-primary/25 rounded-md flex`}
                                >
                                    <Link
                                        href={{
                                            pathname,
                                            query: query.toString(),
                                        }}
                                        className="px-7 py-2"
                                        scroll={false}
                                    >
                                        {type.fields.title}
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};

export default ProgramType;
