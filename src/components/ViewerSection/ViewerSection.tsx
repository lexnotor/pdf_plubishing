import bg_mountain from "@/assets/images/bg_mountain.jpg";
import { ViewerContextProvider } from "@/contexts/VeiwerContext";
import Navbar from "../Navbar";
import ProgramList from "../ProgramList";
import Space from "../Space";
import Viewer from "../Viewer";
import ButtonCommande from "./ButtonCommande";
import { RouteParam } from "@/types";

const ViewerSection: (props: Partial<RouteParam["params"]>) => JSX.Element = ({
    lang,
}) => {
    return (
        <section className="relative bg-gradient-radial from-primary/20 from-5% to-50% to-white">
            <header
                className="px-10 pt-6 pb-14 min-h-[55rem] max-h-[65rem] bg-cover text-white"
                style={{ backgroundImage: `url(${bg_mountain.src})` }}
            >
                <div className="container">
                    <Navbar lang={lang} />
                </div>
            </header>

            <ViewerContextProvider>
                <div id="viewer" className="container">
                    <div className="-mt-[40rem] mx-auto bg-white w-fit border p-1 relative">
                        <Viewer />
                    </div>

                    <Space />

                    <div className="w-fit rounded-r-full rounded-l-full border mx-auto bg-white overflow-hidden">
                        <ButtonCommande />
                    </div>
                </div>
            </ViewerContextProvider>

            <Space />

            <div className="max-w-6xl mx-auto" id="our-programs">
                <h3 className="text-lg font-bold">In the same Program</h3>
                <Space />
                <ProgramList data={[]} />
            </div>
        </section>
    );
};

export default ViewerSection;
