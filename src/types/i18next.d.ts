// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import {
    contactSection,
    footerSection,
    headerSection,
    journeySection,
    programSection,
    translation,
} from "@/app/i18n/locales/en";

declare module "i18next" {
    // Extend CustomTypeOptions
    interface CustomTypeOptions {
        defaultNS: "translation";
        resources: {
            contact: typeof contactSection;
            footer: typeof footerSection;
            header: typeof headerSection;
            journey: typeof journeySection;
            program: typeof programSection;
            translation: typeof translation;
        };
    }
}
