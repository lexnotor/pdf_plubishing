import celebrating from "@/assets/images/Fossey Gorilla/celebrating.jpg";
import good_job from "@/assets/images/Fossey Gorilla/good_job.jpg";
import gorilla_eating from "@/assets/images/Fossey Gorilla/gorilla_eating.jpg";
import gorilla_son from "@/assets/images/Fossey Gorilla/gorilla_son.jpg";
import human_forest from "@/assets/images/Fossey Gorilla/human_forest.jpg";
import mountain from "@/assets/images/Fossey Gorilla/mountain.jpg";
import newspaper from "@/assets/images/Fossey Gorilla/newspaper.jpg";
import people_walking from "@/assets/images/Fossey Gorilla/people_walking.jpg";
import open_book from "@/assets/images/book-open.svg";
import Image from "next/image";
import Space from "./Space";
import Link from "next/link";
import { ProgramListProps } from "@/types";

const programs = [
    gorilla_eating,
    good_job,
    human_forest,
    mountain,
    people_walking,
    gorilla_son,
    celebrating,
    newspaper,
];

const ProgramList: (props: ProgramListProps) => JSX.Element = () => {
    return (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
            {programs.map((program, index) => (
                <li key={index} className="bg-white p-2">
                    <figure className="relative">
                        <Image
                            alt="Saving Earth Magazine - Preserve british collumbia’s, The impact Report"
                            src={program}
                            className="w-full object-cover"
                        />
                        <span className="p-3 bg-white/40 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Image alt="open_book" src={open_book} />
                        </span>
                    </figure>
                    <Space size="0.2rem" />
                    <div>
                        <p className="text-[75%] text-primary">
                            Pistage de gorille
                        </p>
                        <p className="text-[85%] font-medium">
                            <Link
                                href={
                                    "saving_earth_magazine_preserve_british_collumbia"
                                }
                            >
                                Saving Earth Magazine - Preserve british
                                collumbia’s, The impact Report
                            </Link>
                        </p>
                        <p className="text-[75%] text-right text-neutral-400">
                            Jan 2022
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ProgramList;
