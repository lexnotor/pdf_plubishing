"use client";
import { useViewerContext } from "@/contexts/VeiwerContext";
import { AiOutlineDownload } from "react-icons/ai";
import {
    IoArrowBackCircleOutline,
    IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import Space from "../Space";
import { useMemo } from "react";

const ButtonCommande = () => {
    const {
        pageNum,
        numPage,
        flipRef,
        containerRef,
        isFullS,
        pdfUrl,
        loading,
    } = useViewerContext();

    const marginBottom = useMemo(() => {
        const viewerNode = document.querySelector("#viewer")
            ?.firstChild as HTMLDivElement;
        const viewerHeader = document.querySelector(
            "#viewer-header",
        ) as HTMLDivElement;
        loading;

        if (viewerNode && viewerHeader) {
            const val =
                viewerHeader.offsetHeight - viewerNode.offsetHeight - 300;
            return val < 0 ? "0px" : val + "px";
        }
        return "20vh";
    }, [loading]);

    return (
        <div
            style={{ marginBottom }}
            className="flex gap-8 items-center bg-white w-fit rounded-r-full rounded-l-full mx-auto p-1"
        >
            <div className="flex gap-4 justify-center items-center ">
                <Space size="0" sizeX="0.5rem" />
                <button
                    className="flex gap-4"
                    onClick={() => flipRef.current.pageFlip().flipPrev("top")}
                >
                    <span className="text-3xl">
                        <IoArrowBackCircleOutline />
                    </span>
                </button>

                <ul className="flex items-center gap-0 text-black text-[85%]">
                    <button
                        className="rounded-full flex justify-center items-center h-8 w-8 cursor-pointer hover:bg-primary hover:text-white duration-500"
                        onClick={() =>
                            flipRef.current.pageFlip().flip(0, "top")
                        }
                    >
                        1
                    </button>
                    <li
                        className="rounded-full flex justify-center items-center h-8 w-8 cursor-pointer"
                        onClick={() =>
                            flipRef.current.pageFlip().flip(numPage, "top")
                        }
                    >
                        ...
                    </li>
                    <li
                        className="rounded-full flex justify-center items-center h-8 w-8 cursor-pointer hover:bg-primary hover:text-white duration-500"
                        onClick={() =>
                            flipRef.current.pageFlip().flip(numPage - 1, "top")
                        }
                    >
                        {numPage}
                    </li>
                </ul>

                <button
                    className="flex gap-4"
                    onClick={() => flipRef.current.pageFlip().flipNext("top")}
                    disabled={pageNum[0] + 2 > numPage}
                >
                    <span className="text-3xl">
                        <IoArrowForwardCircleOutline />
                    </span>
                </button>
            </div>

            <button
                className="flex gap-2 items-center font-semibold"
                onClick={() => {
                    isFullS
                        ? document.exitFullscreen()
                        : containerRef.current.requestFullscreen();
                }}
            >
                <span className="text-[85%]">
                    {isFullS ? "Normal" : "FullScreen"}
                </span>
                <span className="text-xl rotate-90">
                    <MdOutlineCloseFullscreen />
                </span>
            </button>
            <a
                href={pdfUrl}
                download
                className="flex gap-4 items-center justify-center py-3 px-6 text-white bg-primary rounded-r-full rounded-l-full"
            >
                <span>Download</span>
                <span className="text-xl">
                    <AiOutlineDownload />
                </span>
            </a>
        </div>
    );
};

export default ButtonCommande;
