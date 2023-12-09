"use client";

import { PageFlip, ViewerContextType } from "@/types";
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

const ViewerContext = createContext<ViewerContextType>({});

const ViewerContextProvider = ({ children }: { children: ReactNode }) => {
    const [screenS, setScreenS] = useState({ x: 0, y: 0 });
    const [isFullS, setIsFullS] = useState(false);
    const vp = useMemo(
        () => screenS.x * (isFullS ? 0.9 : 0.7),
        [screenS, isFullS],
    );
    // total number of page
    const [numPage, setNumPage] = useState<number>(0);
    // current pages
    const [pageNum, setPageNum] = useState<number[]>([]);
    // page ratio
    const [ratio, setRation] = useState<number>(1);

    const [loading, setLoading] = useState(false);

    const flipRef = useRef<{ pageFlip: () => PageFlip }>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setLoading(true);
            setScreenS({ x: window.innerWidth, y: window.innerHeight });
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleFullScrenn = () => {
            setIsFullS(!!document.fullscreenElement);
        };
        handleFullScrenn();

        document.addEventListener("fullscreenchange", handleFullScrenn);

        return () =>
            document.removeEventListener("fullscreenchange", handleFullScrenn);
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
                setLoading,
                screenS,
                setScreenS,
                flipRef,
                containerRef,
                isFullS,
            }}
        >
            {children}
        </ViewerContext.Provider>
    );
};

const useViewerContext = () => useContext(ViewerContext);

export { useViewerContext, ViewerContextProvider };
