"use client";
import React, { useRef, useState } from "react";
import Space from "./Space";
import { RouteParam } from "@/types";
import { useTranslation } from "@/app/i18n/client";
import { message } from "antd";

const MessageForm = ({ lang }: Pick<RouteParam["params"], "lang">) => {
    const [toast, contextHolder] = message.useMessage({ duration: 2 });
    const { t } = useTranslation(lang, "contact");
    const fnameRef = useRef<HTMLInputElement>(null),
        lnameRef = useRef<HTMLInputElement>(null),
        emailRef = useRef<HTMLInputElement>(null),
        msgRef = useRef<HTMLTextAreaElement>(null);

    const [loading, setLoading] = useState(false);

    const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const payload = {
            fname: fnameRef.current.value,
            lname: lnameRef.current.value,
            email: emailRef.current.value,
            text: msgRef.current.value,
        };

        for (const [k, v] of Object.entries(payload))
            if (!v || !v.trim().length)
                return toast.error(`All fields are required (${k})`);

        setLoading(true);
        fetch("/api/mail", {
            body: JSON.stringify(payload),
            method: "POST",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                if (res.status >= 400) throw new Error();
                toast.success("Message sent");
                setLoading(false);
                return res.json();
            })
            .catch(() => {
                setLoading(false);
                toast.error("Please retry in 3s");
            });
    };

    return (
        <div>
            {contextHolder}
            <h2 className="text-3xl md:text-4xl font-semibold">
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
            <form className="flex flex-col gap-4" onSubmit={submit}>
                <div className="flex gap-4">
                    <div className="basis-1/2 relative border border-neutral-300 px-6 py-2 rounded">
                        <input
                            type="text"
                            name="fname"
                            id="fname"
                            className="w-full"
                            ref={fnameRef}
                            placeholder={t("contact:fname-placeholder")}
                        />
                    </div>
                    <div className="basis-1/2 relative border border-neutral-300 px-6 py-2 rounded">
                        <label
                            htmlFor="lname"
                            className="absolute top-1/2 -translate-y-1/2 text-neutral-500"
                        ></label>
                        <input
                            type="text"
                            name="lname"
                            id="lname"
                            className="w-full"
                            ref={lnameRef}
                            placeholder={t("contact:lname-placeholder")}
                        />
                    </div>
                </div>

                <div className="relative border border-neutral-300 px-6 py-2 rounded">
                    <input
                        type="text"
                        name="fname"
                        id="fname"
                        className="w-full"
                        ref={emailRef}
                        placeholder={t("contact:email-placeholder")}
                    />
                </div>

                <div className="relative border border-neutral-300 px-6 py-2 rounded">
                    <textarea
                        name="fname"
                        id="fname"
                        className="w-full resize-none"
                        rows={4}
                        ref={msgRef}
                        placeholder={t("contact:message-placeholder")}
                    />
                </div>

                <div>
                    <button
                        disabled={loading}
                        className="disabled:cursor-progress flex gap-2 bg-secondary text-white py-3 px-11 rounded-r-full rounded-l-full font-semibold"
                    >
                        {loading ? (
                            <div className="w-4 h-4 rounded-full border-transparent border-2 border-t-teal-50 animate-spin" />
                        ) : null}
                        {t("contact:form-btn")}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MessageForm;
