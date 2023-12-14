import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { shortcut, legal, social } from "./data";
import { RouteParam } from "@/types";
import { useTranslation } from "@/app/i18n";

const Footer = async ({ lang }: Pick<RouteParam["params"], "lang">) => {
    const { t } = await useTranslation(lang, "footer");

    return (
        <footer
            className="flex flex-col bg-primary text-white"
            style={{
                backgroundImage:
                    " linear-gradient(to top, #0000004f, #0000004f)",
            }}
        >
            <section className="max-w-[1300px] w-full mx-auto px-[2rem] lg:px-[6rem] pt-[4rem] gap-y-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                <article>
                    <h4 className="font-light text-lg mb-2">
                        {t("footer:article-1")}
                    </h4>
                    <ul className="flex gap-2 text-3xl text-secondary">
                        {social.map((item) => (
                            <li
                                key={item?.link}
                                className="hover:scale-125 duration-200 ease-out"
                            >
                                <a
                                    href={item?.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <item.Icon />
                                </a>
                            </li>
                        ))}
                    </ul>
                </article>

                {shortcut(t).map((article) => (
                    <article key={article?.title}>
                        <h4 className="font-light text-lg mb-2">
                            {article?.title}
                        </h4>
                        <ul className="font-medium flex flex-col gap-2">
                            {article?.links.map((item) => (
                                <li
                                    key={item?.link}
                                    className="hover:text-secondary duration-500"
                                >
                                    <a
                                        href={item?.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-1"
                                    >
                                        <span>{item?.text}</span>
                                        <span className="text-lg">
                                            <HiArrowTopRightOnSquare />
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>

            <section className="max-w-[1300px] w-full mx-auto px-[2rem] lg:px-[6rem] pb-[4rem] text-sm flex gap-y-4 flex-wrap justify-between items-center">
                <hr className="basis-full border-secondary/60 my-6" />
                <ul className="flex justify-between gap-5 font-semibold">
                    {legal(t).map((item) => (
                        <li
                            key={item.link}
                            className="hover:text-secondary duration-500"
                        >
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
                <p>EIN: 52-111 866</p>
                <p>{t("footer:copyright")}</p>
            </section>
        </footer>
    );
};

export default Footer;
