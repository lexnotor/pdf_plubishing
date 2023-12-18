import { MetadataRoute } from "next";
import { languages } from "./i18n/settings";

const robots: () => MetadataRoute.Robots = () => {
    return {
        rules: [
            {
                userAgent: "*",
                disallow: ["/api"],
                allow: languages.map((lang) => `/${lang}`),
            },
        ],
        sitemap: "https://gorilla-fund.vercel.app/sitemap.xml",
    };
};

export default robots;
