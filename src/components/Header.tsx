import bg_mountain from "@/assets/images/bg_mountain.jpg";
import play_icon from "@/assets/images/custom_play.svg";
import Image from "next/image";
import { OpacityBtn } from "./Button";
import Navbar from "./Navbar";
import Space from "./Space";
import { RouteParam } from "@/types";
import { useTranslation } from "@/app/i18n";

const Header = async ({ lang }: Pick<RouteParam["params"], "lang">) => {
    const { t } = await useTranslation(lang, "header");

    return (
        <header
            className="px-4 xl:px-10 pt-6 pb-14 text-white min-h-[55rem] max-h-[65rem] bg-cover"
            style={{ backgroundImage: `url(${bg_mountain.src})` }}
        >
            <div className="flex flex-col gap-8 justify-between container">
                <Navbar lang={lang} />

                <Space />

                <p className="self-center text-5xl font-bold flex flex-col items-center text-center">
                    <span>{t("header:p-1.text-1")}</span>
                    <span>{t("header:p-1.text-2")}</span>
                </p>

                <figure className="self-center">
                    <Image alt="play icon" src={play_icon} width={150} />
                </figure>

                <p className="self-center flex flex-col items-center text-center">
                    <span>{t("header:p-2.text-1")}</span>
                    <span>{t("header:p-2.text-2")}</span>
                </p>

                <div className="self-center flex gap-6 items-center">
                    <OpacityBtn>{t("header:btn-1")}</OpacityBtn>
                    <OpacityBtn type="secondary">
                        {t("header:btn-2")}
                    </OpacityBtn>
                </div>
            </div>
        </header>
    );
};

export default Header;
