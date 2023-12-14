import { ContenfulLocal, MagazineEntry } from "@/types/contentful";
import { EntriesQueries } from "contentful";
import clientCF from "../contentful.config";

const getMagazines = async (
    query: EntriesQueries<MagazineEntry, "WITHOUT_UNRESOLVABLE_LINKS"> = {},
    locale: ContenfulLocal = "en",
) => {
    return clientCF.withoutUnresolvableLinks.getEntries<MagazineEntry>({
        locale,
        ...query,
        content_type: "magazines",
    });
};

const getOneMagazine = async (
    mag_id: string,
    locale: ContenfulLocal = "en",
) => {
    return clientCF.withoutUnresolvableLinks.getEntry<MagazineEntry>(mag_id, {
        locale,
    });
};

export const magazineService = { getMagazines, getOneMagazine };
