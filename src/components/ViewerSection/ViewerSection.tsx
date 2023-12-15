import bg_mountain from "@/assets/images/bg_mountain.jpg";
import { ViewerContextProvider } from "@/contexts/VeiwerContext";
import { ViewerSectionProps } from "@/types";
import Navbar from "../Navbar";
import ProgramList from "../ProgramList";
import Space from "../Space";
import Viewer from "../Viewer";
import ButtonCommande from "./ButtonCommande";
import { useTranslation } from "@/app/i18n";

const ViewerSection = async ({ lang, data, related }: ViewerSectionProps) => {
    const { t } = await useTranslation(lang, "contact");

    return (
        <section className="relative bg-gradient-radial from-primary/20 from-5% to-50% to-white">
            <header
                className="px-4 xl:px-10 pt-6 pb-8 sm:pb-14 min-h-screen sm:min-h-[55rem] max-h-[65rem] bg-cover text-white"
                style={{ backgroundImage: `url(${bg_mountain.src})` }}
                id="viewer-header"
            >
                <div className="container">
                    <Navbar lang={lang} />
                </div>
            </header>

            <ViewerContextProvider data={data}>
                <div id="viewer" className="container">
                    <div className="-mt-[40rem] mx-auto bg-white w-fit border p-1 relative">
                        <Viewer />
                    </div>

                    <Space />

                    <div className="w-fit rounded-r-full rounded-l-full mx-auto">
                        <ButtonCommande />
                    </div>
                </div>
            </ViewerContextProvider>

            <Space />

            <div className="max-w-6xl mx-auto" id="our-programs">
                <h3 className="text-lg font-bold">In the same Program</h3>
                <Space />
                <ProgramList data={related} lang={lang} i18nT={t} />
            </div>
        </section>
    );
};

export default ViewerSection;
