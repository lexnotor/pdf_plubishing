import React, { ComponentProps } from "react";
import { Document } from "react-pdf";

export type RouteParam = {
    params: { mag_title: string };
};

export type LoadedPdfHandler = ComponentProps<typeof Document>["onLoadSuccess"];

export type ViewerContextType = {
    vp?: number;

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
};
