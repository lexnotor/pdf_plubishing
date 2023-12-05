import React from "react";
import ProgramType from "./ProgramType";
import Space from "./Space";
import ProgramList from "./ProgramList";
import ProgramPagination from "./ProgramPagination";

const ProgramSection = () => {
    return (
        <section className="px-[6rem] py-[4rem] text h-screen min-h-fit max-h-[60rem] bg-gradient-radial from-primary/20 from-5% to-50% to-white">
            <h2 className="text-2xl font-bold" title="Nos Programmes">
                Nos Programmes
            </h2>

            <Space />

            <ProgramType />

            <Space />

            <ProgramList />

            <ProgramPagination />
        </section>
    );
};

export default ProgramSection;
