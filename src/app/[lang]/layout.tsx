import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import { RouteParam } from "@/types";
import { languages } from "../i18n/settings";
import StickyNavBar from "@/components/StickyNavBar";

export const metadata: Metadata = {
    title: "Dian Fossey Gorilla Fund",
    description: "Helping People | Saving Gorillas",
    verification: {
        google: "hDu4cCDxXZzVMcHtqb9iEiUzufoXI3MorVBPDQcEbm0",
    },
    publisher: "Gorilla Fund",
    referrer: "origin",
    robots: {
        follow: true,
        index: true,
        googleBot: {
            follow: true,
            index: true,
        },
    },
    authors: [
        {
            name: "Dian Fossey",
            url: "https://www.linkedin.com/company/savinggorillas",
        },
    ],
    keywords: ["Dian", "Fossey", "Gorilla Fund", "Magazines"],
};

export const generateStaticParams: () => Partial<
    RouteParam["params"]
>[] = () => {
    return languages.map((lang) => ({ lang }));
};

const RootLayout = ({
    children,
    params: { lang },
}: React.PropsWithChildren<RouteParam>) => {
    return (
        <html lang={lang}>
            <body id="root">
                <StickyNavBar lang={lang} />
                <main>{children}</main>
                <div>
                    <ContactSection lang={lang} />

                    <Footer lang={lang} />
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
