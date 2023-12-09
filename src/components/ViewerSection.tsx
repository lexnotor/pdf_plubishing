import bg_mountain from "@/assets/images/bg_mountain.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import {
    IoArrowBackCircleOutline,
    IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import Navbar from "./Navbar";
import ProgramList from "./ProgramList";
import Space from "./Space";
import Viewer from "./Viewer";
import { ViewerContextProvider } from "@/contexts/VeiwerContext";

const ViewerSection: (props: { mag_title: string }) => JSX.Element = () => {
    return (
        <section className="relative bg-gradient-radial from-primary/20 from-5% to-50% to-white">
            <header
                className="px-10 pt-6 pb-14 min-h-[55rem] max-h-[65rem] bg-cover text-white"
                style={{ backgroundImage: `url(${bg_mountain.src})` }}
            >
                <Navbar />
            </header>

            <ViewerContextProvider>
                <div>
                    <div className="-mt-[40rem] mx-auto bg-white/80 w-fit border p-1 relative">
                        <Viewer />
                    </div>

                    <Space />

                    <div className="flex gap-8 items-center w-fit rounded-r-full rounded-l-full border mx-auto p-1 bg-white">
                        <div className="flex gap-4 justify-center items-center ">
                            <Space size="0" sizeX="0.5rem" />
                            <button className="flex gap-4">
                                <span className="text-3xl text-neutral-400">
                                    <IoArrowBackCircleOutline />
                                </span>
                            </button>

                            <ul className="flex items-center gap-0 text-black text-[85%]">
                                <li className="rounded-full flex justify-center items-center h-8 w-8">
                                    1
                                </li>
                                <li className="rounded-full flex justify-center items-center h-8 w-8">
                                    ...
                                </li>
                                <li className="rounded-full flex justify-center items-center h-8 w-8">
                                    15
                                </li>
                            </ul>

                            <button className="flex gap-4">
                                <span className="text-3xl">
                                    <IoArrowForwardCircleOutline />
                                </span>
                            </button>
                        </div>

                        <button className="flex gap-2 items-center font-semibold">
                            <span className="text-[85%]">Fullscreen</span>
                            <span className="text-xl rotate-90">
                                <MdOutlineCloseFullscreen />
                            </span>
                        </button>

                        <button className="flex gap-4 items-center justify-center py-3 px-6 text-white bg-primary rounded-r-full rounded-l-full">
                            <span>Download</span>
                            <span className="text-xl">
                                <AiOutlineDownload />
                            </span>
                        </button>
                    </div>
                </div>
            </ViewerContextProvider>

            <Space />

            <div className="max-w-6xl mx-auto">
                <h3 className="text-lg font-bold">In the same Program</h3>
                <Space />
                <ProgramList />
            </div>
        </section>
    );
};

export default ViewerSection;
