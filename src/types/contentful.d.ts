import { EntryFieldTypes } from "contentful";

export type CategoryEntry = {
    contentTypeId: "categories";
    fields: {
        title: EntryFieldTypes.Text;
        createdAt: EntryFieldTypes.Text;
        parent?: EntryFieldTypes.EntryLink<CategoryEntry>;
        description: EntryFieldTypes.Text;
    };
};

export type MagazineEntry = {
    contentTypeId: "magazines";
    fields: {
        document: EntryFieldTypes.AssetLink;
        cover: EntryFieldTypes.AssetLink;
        createdAt: EntryFieldTypes.Text;
        title: EntryFieldTypes.Text;
        category: EntryFieldTypes.EntryLink<CategoryEntry>;
    };
};
