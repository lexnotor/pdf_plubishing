import React from "react";
import ProgramType from "./ProgramType";
import Space from "./Space";
import ProgramList from "./ProgramList";
import ProgramPagination from "./ProgramPagination";

const ProgramSection = () => {
    return (
        <section
            id="our-programs"
            className="px-[6rem] py-[4rem] text bg-gradient-radial from-primary/20 from-5% to-50% to-white"
        >
            <h2 className="text-2xl font-bold" title="Nos Programmes">
                Nos Programmes
            </h2>

            <Space />

            <ProgramType />

            <Space />

            <ProgramList />

            <Space />

            <ProgramPagination />
        </section>
    );
};

export default ProgramSection;
