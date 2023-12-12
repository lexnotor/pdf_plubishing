import React from "react";
import Space from "./Space";
import { RouteParam } from "@/types";
import { useTranslation } from "@/app/i18n";

const MessageForm = async ({ lang }: Pick<RouteParam["params"], "lang">) => {
    const { t } = await useTranslation(lang, "contact");

    return (
        <div>
            <h2 className="text-4xl font-semibold">
                {t("contact:form-title")}
            </h2>
            <Space size="0.4rem" />
            <p className="text-sm">
                <span>{t("contact:form-p-1.text-1")}</span>{" "}
                <a
                    href="https://gorillafund.org/who-we-are/frequently-asked-questions-faqs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-bold"
                >
                    {t("contact:form-p-1.link-1")}
                </a>
            </p>
            <Space size="0.4rem" />
            <p className="text-sm">
                <span>{t("contact:form-p-2.text-1")}</span>{" "}
                <a
                    href="https://gorillafund.org/who-we-are/frequently-asked-questions-faqs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-bold"
                >
                    {t("contact:form-p-2.link-1")}
                </a>
            </p>

            <Space size="0.8rem" />
            <form className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <div className="basis-1/2 relative border border-neutral-300 px-6 py-2 rounded">
                        <label
                            htmlFor="fname"
                            className="absolute top-1/2 -translate-y-1/2 text-neutral-500"
                        >
                            {t("contact:fname-placeholder")}
                        </label>
                        <input
                            type="text"
                            name="fname"
                            id="fname"
                            className="w-full"
                        />
                    </div>
                    <div className="basis-1/2 relative border border-neutral-300 px-6 py-2 rounded">
                        <label
                            htmlFor="lname"
                            className="absolute top-1/2 -translate-y-1/2 text-neutral-500"
                        >
                            {t("contact:lname-placeholder")}
                        </label>
                        <input
                            type="text"
                            name="lname"
                            id="lname"
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="relative border border-neutral-300 px-6 py-2 rounded">
                    <label
                        htmlFor="fname"
                        className="absolute top-1/2 -translate-y-1/2 text-neutral-500"
                    >
                        {t("contact:email-placeholder")}
                    </label>
                    <input
                        type="text"
                        name="fname"
                        id="fname"
                        className="w-full"
                    />
                </div>

                <div className="relative border border-neutral-300 px-6 py-2 rounded">
                    <label
                        htmlFor="fname"
                        className="absolute top-2 text-neutral-500"
                    >
                        {t("contact:message-placeholder")}
                    </label>
                    <textarea
                        name="fname"
                        id="fname"
                        className="w-full resize-none"
                        rows={4}
                    />
                </div>

                <div>
                    <button className="bg-secondary text-white py-5 px-11 rounded-r-full rounded-l-full font-semibold">
                        {t("contact:form-btn")}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MessageForm;
