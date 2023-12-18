"use client";
import { useViewerContext } from "@/contexts/VeiwerContext";
import React, { useEffect, useMemo } from "react";

const CustomSpace = () => {
    const { isFullS, loading, pdfUrl } = useViewerContext();

    const marginBottom = useMemo(() => {
        if (isFullS || !pdfUrl) return "0vh";
        if (typeof document == "undefined") return "20vh";
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
        return "0vh";
    }, [loading, isFullS, pdfUrl]);

    useEffect(() => {});

    return <div style={{ paddingBottom: marginBottom }}></div>;
};

export default CustomSpace;
