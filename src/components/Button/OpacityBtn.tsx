import React from "react";

const OpacityBtn = ({
    children,
    opacity = 0.25,
    type = "primary",
}: {
    children: React.ReactNode;
    opacity?: number;
    type?: "primary" | "secondary";
}) => {
    return (
        <button
            className={`relative overflow-hidden border-2 ${
                type == "primary" ? "border-primary" : "border-secondary"
            }   rounded-r-full rounded-l-full py-4 px-7 text-white`}
        >
            <span
                style={{ opacity }}
                className={`${
                    type == "primary" ? "bg-primary" : "bg-secondary"
                } absolute top-0 bottom-0 right-0 left-0 z-0`}
            ></span>
            <span className="relative z-10">{children}</span>
        </button>
    );
};

export default OpacityBtn;
