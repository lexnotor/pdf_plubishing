"use client";

import i18next, { Namespace } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { useEffect } from "react";
import {
    initReactI18next,
    useTranslation as useTranslationOrg,
} from "react-i18next";
import { getI18NextOptions, languages } from "./settings";

const runsOnServer = typeof window === "undefined";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
        resourcesToBackend(
            (language: string, namespace: string) =>
                import(`./locales/${language}/${namespace}.json`),
        ),
    )
    .init({
        ...getI18NextOptions(),
        lng: undefined,
        detection: {
            order: ["path", "htmlTag", "cookie", "navigator"],
        },
        preload: runsOnServer ? languages : [],
    });

export const useTranslation = (lng: string, ns: Namespace) => {
    const i18Instance = useTranslationOrg(ns);

    const { i18n } = i18Instance;

    if (runsOnServer && lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng);
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (!lng || i18n.resolvedLanguage === lng) return;
            i18n.changeLanguage(lng);
        }, [lng, i18n]);
    }
    return i18Instance;
};
