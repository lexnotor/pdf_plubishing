import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dian Fossey Gorilla Fund",
    description: "Helping People | Saving Gorillas",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={inter.className} id="root">
                <div className="blurred">
                    <main>{children}</main>
                    <div>
                        <ContactSection />

                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
