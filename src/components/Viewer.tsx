"use client";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { LoadedPdfHandler } from "@/types";
import { useEffect, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import {
    IoArrowBackCircleOutline,
    IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { useViewerContext } from "@/contexts/VeiwerContext";

// for more details, visit
// https://www.npmjs.com/package/react-pdf?activeTab=readme
// setup source path of react-pdf worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Viewer = () => {
    const {
        loading,
        setLoading,
        numPage,
        setNumPage,
        pageNum,
        setPageNum,
        ratio,
        setRation,
        vp,
    } = useViewerContext();
    const [screenS, setScreenS] = useState({ x: 0, y: 0 });
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
    // flip page ref
    const flipRef = useRef<typeof HTMLFlipBook>(null);

    const loadHandler: LoadedPdfHandler = async (doc) => {
        setNumPage(doc.numPages);

        const first_page = await doc.getPage(1);
        const [, , pageWidth, pageHeight] = first_page.view;

        setRation(pageWidth / (pageHeight || 1));
    };

    useEffect(() => {
        const handleResize = () => {
            setLoading(true);
            setScreenS({ x: window.innerWidth, y: window.innerHeight });
            setTimeout(() => setLoading(false), 2000);
        };
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [setLoading]);

    return (
        <>
            <div style={{ width: vp, minHeight: "200px", minWidth: "200px" }}>
                <Document
                    file={"/pdf/journal_march_2020.pdf"}
                    onLoadSuccess={loadHandler}
                >
                    {numPage == 0 && !loading ? (
                        <></>
                    ) : (
                        <HTMLFlipBook
                            width={vp / 2}
                            height={vp / 2 / (ratio || 1)}
                            ref={flipRef}
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
                        >
                            {listPage}
                        </HTMLFlipBook>
                    )}
                </Document>

                <div
                    style={{
                        margin: "auto",
                        width: "fit-content",
                        padding: "0.5rem",
                        backgroundColor: "white",
                    }}
                ></div>
            </div>

            <button className="absolute top-1/2 -left-12">
                <span className="text-3xl text-gray-400">
                    <IoArrowBackCircleOutline />
                </span>
            </button>
            <button className="absolute top-1/2 -right-12">
                <span className="text-3xl text-gray-400">
                    <IoArrowForwardCircleOutline />
                </span>
            </button>
        </>
    );
};

export default Viewer;
