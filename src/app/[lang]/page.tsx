import Header from "@/components/Header";
import JourneySection from "@/components/JourneySection";
import ProgramSection from "@/components/ProgramSection";
import { RouteParam } from "@/types";
import { Suspense } from "react";

const Page = ({ params: { lang } }: RouteParam) => {
    return (
        <div>
            <Header lang={lang} />
            <Suspense
                fallback={
                    <div className="border-t-2 border-t-secondary rounded-full animate-spin w-4 h-4" />
                }
            >
                <ProgramSection lang={lang} />
            </Suspense>

            <JourneySection lang={lang} />
        </div>
    );
};

export default Page;
