// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import {
    contactSection,
    footerSection,
    translation,
} from "@/app/i18n/locales/en";

declare module "i18next" {
    // Extend CustomTypeOptions
    interface CustomTypeOptions {
        // custom namespace type, if you changed it
        defaultNS: "ns1";
        // custom resources type
        resources: {
            contact: typeof contactSection;
            footer: typeof footerSection;
            translation: typeof translation;
        };
    }
}
