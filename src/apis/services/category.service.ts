import { CategoryEntry, ContenfulLocal } from "@/types/contentful";
import { EntriesQueries } from "contentful";
import clientCF from "../contentful.config";

const getCategories = async (
    query: EntriesQueries<CategoryEntry, "WITHOUT_UNRESOLVABLE_LINKS"> = {},
    locale: ContenfulLocal = "en",
) => {
    return clientCF.withoutUnresolvableLinks.getEntries<CategoryEntry>({
        locale,
        ...query,
        content_type: "categories",
    });
};

export const categoryService = { getCategories };
