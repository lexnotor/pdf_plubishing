import ViewerSection from "@/components/ViewerSection";
import { RouteParam } from "@/types";

const Page = ({ params }: RouteParam) => {
    return (
        <div>
            <ViewerSection mag_title={params.mag_title} />
        </div>
    );
};

export const generateStaticParams: () => RouteParam["params"][] = () => {
    return [{ mag_title: "saving_earth_magazine_preserve_british_collumbia" }];
};
export const dynamicParams = false;

export default Page;
