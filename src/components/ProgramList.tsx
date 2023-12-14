import open_book from "@/assets/images/book-open.svg";
import gorilla404 from "@/assets/images/gorilla_404.png";
import { ProgramListProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Space from "./Space";

const ProgramList: (props: ProgramListProps) => JSX.Element = ({
    data,
    lang,
    i18nT,
}) => {
    if (!data || !data.items.length)
        return (
            <div className="h-72 flex items-center justify-center opacity-40 animate-pulse">
                <Image
                    alt="Saving Earth Magazine - Preserve british collumbia’s, The impact Report"
                    src={gorilla404}
                    className="h-full object-contain"
                    width={400}
                    height={400}
                />
                <p className="text-xl text-center text-black">
                    {i18nT("program:none-found")}
                </p>
            </div>
        );

    return (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
            {data.items.map((program, index) => {
                const cover = program.fields?.cover?.fields?.file?.url;
                return (
                    <li key={index} className="bg-white p-2">
                        <figure className="relative">
                            <Image
                                alt="Saving Earth Magazine - Preserve british collumbia’s, The impact Report"
                                src={cover ? `https:${cover}` : gorilla404}
                                className="w-full object-cover"
                                width={300}
                                height={300}
                            />
                            <span className="p-3 bg-white/40 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Image alt="open_book" src={open_book} />
                            </span>
                        </figure>
                        <Space size="0.2rem" />
                        <div>
                            <p className="text-[75%] text-primary">
                                {program?.fields?.category?.fields?.title}
                            </p>
                            <p className="text-[85%] font-medium">
                                <Link href={`${lang}/${program.sys?.id}`}>
                                    {program?.fields?.title?.slice(0, 70)}
                                    {program?.fields?.title?.length > 70
                                        ? "..."
                                        : null}
                                </Link>
                            </p>
                            <p className="text-[75%] text-right text-neutral-400">
                                Jan 2022
                            </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default ProgramList;
