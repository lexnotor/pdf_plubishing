import { magazineService } from "@/apis/services/magazine.service";
import ViewerSection from "@/components/ViewerSection";
import { RouteParam } from "@/types";
import { Metadata, ResolvedMetadata } from "next";
import { notFound } from "next/navigation";

const Page = async ({ params }: RouteParam) => {
    const mag = await magazineService
        .getOneMagazine(params.mag_title, params.lang)
        .catch(() => notFound());

    const related = await magazineService.getMagazines(
        {
            limit: 4,
            "fields.category.sys.id": mag?.fields?.category?.sys?.id,
            "sys.id[ne]": mag?.sys?.id,
        },
        params.lang,
    );

    return (
        <div>
            <ViewerSection
                mag_title={params.mag_title}
                lang={params.lang}
                data={mag}
                related={related}
            />
        </div>
    );
};

export const generateStaticParams: (
    props: any,
) => Promise<Pick<RouteParam["params"], "mag_title">[]> = async ({ lang }) => {
    const mags = await magazineService.getMagazines({}, lang);

    return mags.items.map((mag) => ({ mag_title: mag.sys.id }));
};

export const generateMetadata: (
    props: {
        params: Partial<RouteParam["params"]>;
        searchParams: URLSearchParams;
    },
    parent: Promise<ResolvedMetadata>,
) => Promise<Metadata> = async ({ params }) => {
    const mag = await magazineService.getOneMagazine(params.mag_title);
    const title = mag?.fields?.title ?? "Magazine";
    const cover = mag.fields.cover.fields.file.url;

    return {
        title: `${title} - Dian Fossey Gorilla Fund`,
        authors: [
            {
                name: "Dian Fossey",
                url: "https://www.linkedin.com/company/savinggorillas",
            },
        ],
        category: mag.sys.type,
        classification: mag.fields.category.fields.title,
        description: `Magazine - ${title} - Dian Fossey Gorilla Fund`,
        keywords: [
            "Dian",
            "Fossey",
            "Gorilla Fund",
            "Magazines",
            ...title.split(" "),
        ],
        openGraph: {
            type: "article",
            locale: params?.lang,
            authors: "Dian Fossey",
            description: `${title} - Dian Fossey Gorilla Fund`,
            emails: ["earchibald@gorillafund.org"],
            images: `https:${cover}`,
            siteName: "Dian Fossey Gorilla Fund",
            modifiedTime: mag.sys.updatedAt,
            publishedTime: mag.sys.createdAt,
        },
        publisher: "Gorilla Fund",
        referrer: "origin",
        robots: {
            follow: true,
            index: true,
            googleBot: {
                follow: true,
                index: true,
            },
        },
        verification: {
            google: "hDu4cCDxXZzVMcHtqb9iEiUzufoXI3MorVBPDQcEbm0",
        },
        metadataBase: new URL("https://gorilla-fund.vercel.app"),
    };
};

export const dynamicParams = true;

export default Page;
