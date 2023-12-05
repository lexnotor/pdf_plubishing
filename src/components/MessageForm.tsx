import React from "react";
import Space from "./Space";

const MessageForm = () => {
    return (
        <div>
            <h2 className="text-4xl font-semibold">Send us a message</h2>
            <Space size="0.4rem" />
            <p className="text-sm">
                Please fill out the form below or you can send a direct email to
                info@gorillafund.org. Be sure to check out our Frequently Asked
                Questions page first, by clicking here.
            </p>
            <Space size="0.4rem" />
            <p className="text-sm">
                If you are contacting us for information regarding a
                questionable charge on your account please visit here.
            </p>

            <Space size="0.8rem" />
            <form className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <div className="basis-1/2 relative border border-neutral-300 px-6 py-2 rounded">
                        <label
                            htmlFor="fname"
                            className="absolute top-1/2 -translate-y-1/2 text-neutral-500"
                        >
                            Firstname
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
                            Lastname
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
                        Email Address
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
                        Your comment or message
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
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MessageForm;
