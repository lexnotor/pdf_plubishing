import { magazineService } from "@/apis/services/magazine.service";
import ViewerSection from "@/components/ViewerSection";
import { RouteParam } from "@/types";

const Page = ({ params }: RouteParam) => {
    return (
        <div>
            <ViewerSection mag_title={params.mag_title} lang={params.lang} />
        </div>
    );
};

export const generateStaticParams: () => Promise<
    Pick<RouteParam["params"], "mag_title">[]
> = async () => {
    const mags = await magazineService.getMagazines();

    return [
        { mag_title: "saving_earth_magazine_preserve_british_collumbia" },
        ...mags.items.map((mag) => ({ mag_title: mag.sys.id })),
    ];
};

export const dynamicParams = false;

export default Page;
