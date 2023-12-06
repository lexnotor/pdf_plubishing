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

export const shortcut = [
    {
        title: "Get to know us",
        links: [
            {
                link: "https://gorillafund.org/who-we-are/",
                text: "Who we are",
            },
            { link: "https://gorillafund.org/what-we-do/", text: "What we do" },
            {
                link: "https://gorillafund.org/news/",
                text: "News",
            },
        ],
    },
    {
        title: "Connect",
        links: [
            {
                link: "https://gorillafund.org/who-we-are/frequently-asked-questions-faqs/",
                text: "FAQ",
            },
            { link: "https://gorillafund.org/pressroom/", text: "Pressroom" },
            {
                link: "https://gorillafund.org/ellencampus/",
                text: "Visit the Ellen Campus",
            },
        ],
    },
    {
        title: "Ways to give",
        links: [
            {
                link: "https://donate.gorillafund.org/page/29269/donate/1",
                text: "Donate",
            },
            { link: "https://gorillafund.org/adopt/", text: "Adopt a gorilla" },
            { link: "https://store.gorillafund.org/", text: "Shop" },
        ],
    },
];

export const legal = [
    {
        text: "TERMS & CONDITIONS",
        link: "https://gorillafund.org/terms-and-conditions/",
    },
    { text: "PRIVACY", link: "https://gorillafund.org/privacy-policy/" },
    {
        text: "DONOR POLICY",
        link: "https://gorillafund.org/donor-privacy-policy/",
    },
];
