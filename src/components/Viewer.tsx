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
import ButtonCommande from "./ViewerSection/ButtonCommande";
import Space from "./Space";

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
    } = useViewerContext();

    // list pages
    const listPage = useMemo(() => {
        if (numPage == 0) return [];
        const tab = [];
        for (let i = 1; i <= numPage; i++)
            tab.push(
                <div key={i}>
                    <Page width={Math.ceil(vp / 2)} pageNumber={i} />
                </div>,
            );
        return tab;
    }, [numPage, vp]);

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
                    width: vp,
                    minHeight: "200px",
                    minWidth: "200px",
                    position: "relative",
                }}
                ref={containerRef}
            >
                <Document
                    file={pdfUrl}
                    onLoadSuccess={loadHandler}
                    className="mx-auto"
                >
                    {numPage == 0 && !loading ? (
                        <></>
                    ) : (
                        <HTMLFlipBook
                            width={vp / 2}
                            height={vp / 2 / (ratio || 1)}
                            ref={(flip) => (flipRef.current = flip)}
                            autoSize
                            showPageCorners={false}
                            drawShadow
                            showCover
                            style={{}}
                            className=""
                            clickEventForward
                            disableFlipByClick={false}
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
                {isFullS ? (
                    <div>
                        <Space />
                        <ButtonCommande />
                    </div>
                ) : null}
            </div>

            <button
                className="absolute top-1/2 -left-12 hover:bg-white/50 text-gray-400 hover:text-black rounded-full p-2 duration-500"
                onClick={() => flipRef.current.pageFlip().flipPrev("top")}
            >
                <span className="text-3xl ">
                    <IoArrowBackCircleOutline />
                </span>
            </button>
            <button
                className="absolute top-1/2 -right-12 hover:bg-white/50 text-gray-400 hover:text-black rounded-full p-2 duration-500"
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
