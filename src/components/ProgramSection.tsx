"use client";

import React, { useEffect, useState } from "react";
import ProgramType from "./ProgramType";
import Space from "./Space";
import ProgramList from "./ProgramList";
import ProgramPagination from "./ProgramPagination";
import { EntryCollection } from "contentful";
import { MagazineEntry } from "@/types/contentful";
import { magazineService } from "@/apis/services/magazine.service";

const ProgramSection = () => {
    const [programs, setPrograms] = useState<
        EntryCollection<MagazineEntry, "WITHOUT_UNRESOLVABLE_LINKS">[]
    >([]);

    useEffect(() => {
        magazineService
            .getMagazines()
            .then((data) => setPrograms((old) => [...old, data]));
    }, []);

    return (
        <section
            id="our-programs"
            className="px-[6rem] py-[4rem] text bg-gradient-radial from-primary/20 from-5% to-50% to-white container"
        >
            <h2 className="text-2xl font-bold" title="Nos Programmes">
                Nos Programmes
            </h2>

            <Space />

            <ProgramType />

            <Space />

            <ProgramList data={programs} />

            <Space />

            <ProgramPagination />
        </section>
    );
};

export default ProgramSection;
