import { magazineService } from "@/apis/services/magazine.service";
import { MetadataRoute } from "next";
import { languages } from "./i18n/settings";

const sitemap: () => Promise<MetadataRoute.Sitemap> = async () => {
    const baseUrl = "https://gorilla-fund.vercel.app";

    let res: Awaited<ReturnType<(typeof magazineService)["getMagazines"]>>;
    const map: MetadataRoute.Sitemap = [];

    for (let i = 0; i < languages.length; i++) {
        let page = 0;
        const lang = languages[i];
        const mag: (typeof res)["items"][number][] = [];

        // eslint-disable-next-line no-constant-condition
        itm: while (true) {
            res = await magazineService.getMagazines(
                { skip: 100 * page++ },
                lang,
            );
            if (res.items.length == 0) break itm;

            mag.push(...res.items);
        }

        const cur: MetadataRoute.Sitemap = mag.map((item) => ({
            changeFrequency: "weekly",
            url: `${baseUrl}/${lang}/${item.sys.id}`,
            lastModified: new Date(),
            priority: 2,
        }));

        map.push(...cur);
    }

    return [
        {
            changeFrequency: "weekly",
            url: `${baseUrl}/en`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            changeFrequency: "weekly",
            url: `${baseUrl}/fr`,
            lastModified: new Date(),
            priority: 1,
        },
        ...map,
    ];
};

export default sitemap;
