import { Namespace, createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getI18NextOptions } from "./settings";

const initI18Next = async (lng: string, ns: Namespace | Namespace[]) => {
    const i18Instance = createInstance();
    await i18Instance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                (language: string, namespace: string) =>
                    import(`./locales/${language}/${namespace}.json`),
            ),
        )
        .init(getI18NextOptions(lng, ns));

    return i18Instance;
};

export const useTranslation = async (
    lng: string,
    ns: Namespace | Namespace[],
) => {
    const i18Instance = await initI18Next(lng, ns);
    return {
        t: i18Instance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns),
        i18n: i18Instance,
    };
};
