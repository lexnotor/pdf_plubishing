"use client";

import { ViewerContextType } from "@/types";
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

const ViewerContext = createContext<ViewerContextType>({});

const ViewerContextProvider = ({ children }: { children: ReactNode }) => {
    const [screenS, setScreenS] = useState({ x: 0, y: 0 });
    const vp = useMemo(() => screenS.x * 0.7, [screenS]);
    // total number of page
    const [numPage, setNumPage] = useState<number>(0);
    // current pages
    const [pageNum, setPageNum] = useState<number[]>([]);
    // page ratio
    const [ratio, setRation] = useState<number>(1);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setLoading(true);
            setScreenS({ x: window.innerWidth, y: window.innerHeight });
            setTimeout(() => setLoading(false), 2000);
        };
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <ViewerContext.Provider
            value={{
                vp,
                numPage,
                setNumPage,
                pageNum,
                setPageNum,
                ratio,
                setRation,
                loading,
                screenS,
                setScreenS,
            }}
        >
            {children}
        </ViewerContext.Provider>
    );
};

const useViewerContext = () => useContext(ViewerContext);

export { useViewerContext, ViewerContextProvider };
