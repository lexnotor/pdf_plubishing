import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { shortcut, legal, social } from "./data";

const Footer = () => {
    return (
        <footer
            className="flex flex-col bg-primary text-white"
            style={{
                backgroundImage:
                    " linear-gradient(to top, #0000004f, #0000004f)",
            }}
        >
            <section className="max-w-[1300px] w-full mx-auto px-[6rem] pt-[4rem] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                <article>
                    <h4 className="font-light text-lg mb-2">Connect with us</h4>
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

                {shortcut.map((article) => (
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

            <section className="max-w-[1300px] w-full mx-auto px-[6rem] pb-[4rem] text-sm flex flex-wrap justify-between items-center">
                <hr className="basis-full border-secondary/60 my-6" />
                <ul className="flex justify-between gap-5 font-semibold">
                    {legal.map((item) => (
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
                <p>
                    © 2023 Dian Fossey Gorilla Fund Inc. All Rights Reserved.
                </p>
            </section>
        </footer>
    );
};

export default Footer;
