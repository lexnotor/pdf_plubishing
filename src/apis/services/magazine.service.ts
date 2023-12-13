import { MagazineEntry } from "@/types/contentful";
import clientCF from "../contentful.config";
import { EntriesQueries } from "contentful";

const getMagazines = async (
    query: EntriesQueries<MagazineEntry, "WITHOUT_UNRESOLVABLE_LINKS"> = {},
) => {
    return clientCF.withoutUnresolvableLinks.getEntries<MagazineEntry>({
        ...query,
        content_type: "magazines",
    });
};

export const magazineService = { getMagazines };
