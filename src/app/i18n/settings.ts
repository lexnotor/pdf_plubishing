import { Namespace } from "i18next";
import { InitOptions } from "i18next";

export const fallbackLng = "en";
export const languages = [fallbackLng, "fr"] as const;
export const defaultNS = "translation";

export const getI18NextOptions: (
    lng?: string,
    ns?: Namespace | Namespace[],
) => InitOptions = (lng = fallbackLng, ns = defaultNS) => {
    return {
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns: ns as string | string[],
    };
};
