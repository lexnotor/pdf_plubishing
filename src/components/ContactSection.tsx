import React from "react";
import MessageForm from "./MessageForm";

const ContactSection = () => {
    return (
        <section
            id="contact-us"
            className="max-w-[1300px] mx-auto px-[6rem] py-[4rem] flex gap-8 text-black"
        >
            <ul className="w-2/5 bg-primary/5 border border-primary/30 px-8 py-6 rounded-md flex flex-col gap-6">
                <li>
                    <h4 className="text-[105%] font-semibold border-b-8 border-b-secondary/60 pb-1 mb-4 w-[60%]">
                        Mailing Address
                    </h4>
                    <p>
                        Dian Fossey Gorilla Fund 800 Cherokee Avenue, S.E.
                        Atlanta, GA 30315 United States
                    </p>
                </li>

                <li>
                    <h4 className="text-[105%] font-semibold border-b-8 border-b-secondary/60 pb-1 mb-4 w-[60%]">
                        Phone Number
                    </h4>
                    <ul>
                        <a href=""></a>
                        <li>
                            <a href="tel:+(404) 624-5881">(404) 624-5881</a>
                        </li>
                        <li>
                            <a href="tel:+1-800-851-0203">1-800-851-0203</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <h4 className="text-[105%] font-semibold border-b-8 border-b-secondary/60 pb-1 mb-4 w-[60%]">
                        Press Contact
                    </h4>
                    <ul>
                        <li>Erika Archibald </li>
                        <li>
                            <a
                                href="mailto:earchibald@gorillafund.org"
                                className="underline"
                            >
                                earchibald@gorillafund.org
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="w-3/5">
                <MessageForm />
            </div>
        </section>
    );
};

export default ContactSection;
