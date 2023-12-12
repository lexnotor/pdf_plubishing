import React, { ComponentProps } from "react";
import { Document } from "react-pdf";

export type RouteParam = {
    params: { mag_title: string; lang: string };
};

export type LoadedPdfHandler = ComponentProps<typeof Document>["onLoadSuccess"];

export type ViewerContextType = {
    vp?: number;
    flipRef?: React.MutableRefObject<{ pageFlip: () => PageFlip }>;
    containerRef?: React.MutableRefObject<HTMLDivElement>;

    numPage?: number;
    setNumPage?: React.Dispatch<React.SetStateAction<number>>;

    pageNum?: number[];
    setPageNum?: React.Dispatch<React.SetStateAction<number[]>>;

    ratio?: number;
    setRation?: React.Dispatch<React.SetStateAction<number>>;

    loading?: boolean;
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>;

    screenS?: { x: number; y: number };
    setScreenS?: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;

    isFullS?: boolean;

    pdfUrl?: string;
};

export type PageFlip = {
    /**Get number of all pages */
    getPageCount: () => number;
    /**Get the current page number (starts at 0) */
    getCurrentPageIndex: () => number;
    /**Turn to the specified page number (without animation) */
    turnToPage: (pageNum: number) => void;
    /**Turn to the next page (without animation) */
    turnToNextPage: () => void;
    /**Turn to the previous page (without animation) */
    turnToPrevPage: () => void;
    /**Turn to the specified page (with animation) */
    flip: (pageNum: number, corner: "top" | "bottom") => void;
    /**Turn to the next page (with animation) */
    flipNext: (corner: "top" | "bottom") => void;
    /**Turn to the previous page (with animation) */
    flipPrev: (corner: "top" | "bottom") => void;
    /**Load page from images */
    loadFromImages: (imagesUrl: string[]) => void;
    //Load page from html elements
    loadFromHtml: (items: NodeListOf | HTMLElement[]) => void;
    /**Update page elements new on 0.4.0 */
    update: () => void;
    /**Update page from html elements new on 0.4.0 */
    updateFromHtml: (items: NodeListOf | HTMLElement[]) => void;
    /**Update page from images new on 0.4.0 */
    updateFromImages: (imagesUrl: string[]) => void;
    /**Destructor. Removes Parent HTML Element and all event handlers new on 0.4.0 */
    destroy: () => void;
};
