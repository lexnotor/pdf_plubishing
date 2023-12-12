import Header from "@/components/Header";
import JourneySection from "@/components/JourneySection";
import ProgramSection from "@/components/ProgramSection";
import { RouteParam } from "@/types";

const Page = ({ params: { lang } }: RouteParam) => {
    return (
        <div>
            <Header lang={lang} />

            <ProgramSection />

            <JourneySection />
        </div>
    );
};

export default Page;
