import { MetadataRoute } from "next";

const robots: () => MetadataRoute.Robots = () => {
    return {
        rules: [],
        host: "",
        sitemap: "",
    };
};

export default robots;
