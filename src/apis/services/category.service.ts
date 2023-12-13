import { CategoryEntry } from "@/types/contentful";
import clientCF from "../contentful.config";
import { EntriesQueries } from "contentful";

const getCategories = async (
    query: EntriesQueries<CategoryEntry, "WITHOUT_UNRESOLVABLE_LINKS"> = {},
) => {
    return clientCF.withoutUnresolvableLinks.getEntries<CategoryEntry>({
        ...query,
        content_type: "categories",
    });
};

export const categoryService = { getCategories };
