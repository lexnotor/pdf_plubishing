import play_icon from "@/assets/images/custom_play.svg";
import Image from "next/image";
import gorilla_photo from "@/assets/images/gorilla_photo_low.jpg";
import Space from "./Space";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const JourneySection = () => {
    return (
        <div
            className="px-[6rem] py-[4rem] text-white bg-cover bg-center aspect-[5/2] flex flex-col"
            style={{
                backgroundImage: ` linear-gradient(to top, #00000079, #00000079),url(${gorilla_photo.src})`,
            }}
        >
            <h2 className="text-center text-5xl font-bold">
                Follow Our Journey
            </h2>
            <Space size="2rem" />

            <p className="max-w-[45rem] mx-auto text-center">
                Two of the gorilla families that the Dian Fossey Gorilla Fund{" "}
                <a
                    href="https://gorillafund.org/what-we-do/daily-protection/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:bg-secondary/30 inline-flex gap-1"
                >
                    <span>monitors and protects</span>
                    <span className="text-lg inline">
                        <HiArrowTopRightOnSquare />
                    </span>
                </a>{" "}
                every day are engaged in some interesting behaviors, as they
                have been interacting regularly – and peacefully – in the forest
            </p>

            <figure className="self-center my-auto">
                <Image alt="play icon" src={play_icon} width={150} />
            </figure>
        </div>
    );
};

export default JourneySection;
