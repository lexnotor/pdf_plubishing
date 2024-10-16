"use client";
import { useViewerContext } from "@/contexts/VeiwerContext";
import { LoadedPdfHandler } from "@/types";
import { useMemo } from "react";
import {
    IoArrowBackCircleOutline,
    IoArrowForwardCircleOutline,
} from "react-icons/io5";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Space from "./Space";
import ButtonCommande from "./ViewerSection/ButtonCommande";

// for more details, visit
// https://www.npmjs.com/package/react-pdf?activeTab=readme
// setup source path of react-pdf worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Viewer = () => {
    const {
        loading,
        numPage,
        setNumPage,
        ratio,
        setRation,
        vp,
        flipRef,
        containerRef,
        isFullS,
        pdfUrl,
        wSize,
    } = useViewerContext();

    const sm = 800;

    // list pages
    const listPage = useMemo(() => {
        if (numPage == 0) return [];
        const tab = [];
        for (let i = 1; i <= numPage; i++)
            tab.push(
                <div key={i}>
                    <Page
                        width={Math.ceil(wSize.x <= sm ? vp : vp / 2)}
                        pageNumber={i}
                    />
                </div>,
            );
        return tab;
    }, [numPage, vp, wSize.x]);

    const loadHandler: LoadedPdfHandler = async (doc) => {
        setNumPage(doc.numPages);

        const first_page = await doc.getPage(1);
        const [, , pageWidth, pageHeight] = first_page.view;

        setRation(pageWidth / (pageHeight || 1));
    };

    return (
        <>
            <div
                style={{
                    width: isFullS ? "auto" : vp,
                    minHeight: "200px",
                    minWidth: "200px",
                    padding: isFullS ? `0 calc(100vw-${vp}px)` : "",
                }}
                className={`relative  ${isFullS ? "mx-auto" : ""}`}
                ref={containerRef}
            >
                <div
                    style={{ width: vp, margin: "0 auto" }}
                    className="hover:overflow-hidden"
                >
                    {pdfUrl ? (
                        <Document
                            file={pdfUrl}
                            onLoadSuccess={loadHandler}
                            className="mx-auto"
                            loading={() => (
                                <div className="h-[80vh] flex items-center justify-center">
                                    <span className="w-12 h-12 border-2 border-transparent border-t-primary rounded-full animate-spin" />
                                </div>
                            )}
                            error={() => (
                                <div className="h-[80vh] flex items-center justify-center">
                                    <span className="w-12 h-12 border-2 border-transparent border-t-primary rounded-full animate-spin" />
                                </div>
                            )}
                        >
                            {numPage == 0 && !loading ? (
                                <></>
                            ) : (
                                <HTMLFlipBook
                                    width={wSize.x <= sm ? vp : vp / 2}
                                    height={
                                        (wSize.x <= sm ? vp : vp / 2) /
                                        (ratio || 1)
                                    }
                                    ref={(flip) => (flipRef.current = flip)}
                                    autoSize
                                    showPageCorners={false}
                                    drawShadow
                                    showCover
                                    style={{}}
                                    className=""
                                    clickEventForward
                                    disableFlipByClick={wSize.x <= sm}
                                    flippingTime={700}
                                    startPage={0}
                                    size={"fixed"}
                                    minWidth={0}
                                    maxWidth={0}
                                    minHeight={0}
                                    maxHeight={0}
                                    usePortrait
                                    startZIndex={0}
                                    maxShadowOpacity={0}
                                    mobileScrollSupport={true}
                                    useMouseEvents={true}
                                    swipeDistance={0}
                                    key={vp}
                                >
                                    {listPage}
                                </HTMLFlipBook>
                            )}
                        </Document>
                    ) : (
                        <div className="h-[80vh] flex items-center justify-center">
                            <span className="w-12 h-12 border-2 border-transparent border-t-primary rounded-full animate-spin" />
                        </div>
                    )}
                </div>
                {isFullS ? (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 temp-transparent sm:opacity-5 hover:opacity-100 duration-500 shadow-xl">
                        <Space />
                        <ButtonCommande />
                    </div>
                ) : null}
            </div>

            <button
                className="max-sm:hidden absolute top-1/2 -left-12 hover:bg-white/50 text-gray-400 hover:text-black rounded-full p-2 duration-500"
                onClick={() => flipRef.current.pageFlip().flipPrev("top")}
            >
                <span className="text-3xl ">
                    <IoArrowBackCircleOutline />
                </span>
            </button>
            <button
                className="max-sm:hidden absolute top-1/2 -right-12 hover:bg-white/50 text-gray-400 hover:text-black rounded-full p-2 duration-500"
                onClick={() => flipRef.current.pageFlip().flipNext("top")}
            >
                <span className="text-3xl ">
                    <IoArrowForwardCircleOutline />
                </span>
            </button>
        </>
    );
};

export default Viewer;
