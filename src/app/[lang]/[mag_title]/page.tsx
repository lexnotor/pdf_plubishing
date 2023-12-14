import { magazineService } from "@/apis/services/magazine.service";
import ViewerSection from "@/components/ViewerSection";
import { RouteParam } from "@/types";
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

export const dynamicParams = true;

export default Page;
