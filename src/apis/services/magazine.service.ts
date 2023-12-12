import { MagazineEntry } from "@/types/contentful";
import clientCF from "../contentful.config";

const getMagazines = async () => {
    return clientCF.withoutUnresolvableLinks.getEntries<MagazineEntry>({
        content_type: "magazines",
    });
};

export const magazineService = { getMagazines };
