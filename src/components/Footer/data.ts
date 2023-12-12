import { Namespace, TFunction } from "i18next";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";

export const social = [
    {
        Icon: RiFacebookCircleLine,
        link: "https://www.facebook.com/savinggorillas",
    },
    {
        Icon: TbBrandLinkedin,
        link: "https://www.linkedin.com/company/savinggorillas",
    },
    { Icon: FaXTwitter, link: "https://twitter.com/savinggorillas" },
    { Icon: FaInstagram, link: "https://www.instagram.com/savinggorillas" },
];

export const shortcut = (t: TFunction<Namespace>) => [
    {
        title: t("footer:article-2.head"),
        links: [
            {
                link: "https://gorillafund.org/who-we-are/",
                text: t("footer:article-2.link-1"),
            },
            {
                link: "https://gorillafund.org/what-we-do/",
                text: t("footer:article-2.link-2"),
            },
            {
                link: "https://gorillafund.org/news/",
                text: t("footer:article-2.link-3"),
            },
        ],
    },
    {
        title: t("footer:article-3.head"),
        links: [
            {
                link: "https://gorillafund.org/who-we-are/frequently-asked-questions-faqs/",
                text: t("footer:article-3.link-1"),
            },
            {
                link: "https://gorillafund.org/pressroom/",
                text: t("footer:article-3.link-2"),
            },
            {
                link: "https://gorillafund.org/ellencampus/",
                text: t("footer:article-3.link-3"),
            },
        ],
    },
    {
        title: t("footer:article-4.head"),
        links: [
            {
                link: "https://donate.gorillafund.org/page/29269/donate/1",
                text: t("footer:article-4.link-1"),
            },
            {
                link: "https://gorillafund.org/adopt/",
                text: t("footer:article-4.link-2"),
            },
            {
                link: "https://store.gorillafund.org/",
                text: t("footer:article-4.link-3"),
            },
        ],
    },
];

export const legal = (t: TFunction<Namespace>) => [
    {
        text: t("footer:terms"),
        link: "https://gorillafund.org/terms-and-conditions/",
    },
    {
        text: t("footer:policy"),
        link: "https://gorillafund.org/privacy-policy/",
    },
    {
        text: t("footer:donor-policy"),
        link: "https://gorillafund.org/donor-privacy-policy/",
    },
];
