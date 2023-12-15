import { useTranslation } from "@/app/i18n";
import play_icon from "@/assets/images/custom_play.svg";
import gorilla_photo from "@/assets/images/gorilla_photo_low.jpg";
import { RouteParam } from "@/types";
import Image from "next/image";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Space from "./Space";

const JourneySection = async ({ lang }: Pick<RouteParam["params"], "lang">) => {
    const { t } = await useTranslation(lang, "journey");
    return (
        <div
            id="our-journey"
            className="px-[2rem] lg:px-[6rem] py-[4rem] text-white bg-cover bg-center aspect-[5/2] flex flex-col"
            style={{
                backgroundImage: ` linear-gradient(to top, #00000079, #00000079),url(${gorilla_photo.src})`,
            }}
        >
            <h2 className="text-center text-5xl font-bold">
                {t("journey:title-1")}
            </h2>
            <Space size="2rem" />

            <p className="max-w-[45rem] mx-auto text-center">
                {t("journey:p-1.text-1")}{" "}
                <a
                    href="https://gorillafund.org/what-we-do/daily-protection/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:bg-secondary/30 inline-flex gap-1"
                >
                    <span>{t("journey:p-1.link-1")}</span>
                    <span className="text-lg inline">
                        <HiArrowTopRightOnSquare />
                    </span>
                </a>{" "}
                {t("journey:p-1.text-2")}
            </p>

            <figure className="self-center my-auto">
                <Image alt="play icon" src={play_icon} width={150} />
            </figure>
        </div>
    );
};

export default JourneySection;
