import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
    return (
        <div className="border rounded-l-full rounded-r-full border-white px-5 py-1 flex gap-2">
            <input
                type="search"
                placeholder="Search ..."
                className="placeholder:text-white py-2 bg-transparent"
            />
            <span className="text-lg self-center">
                <FiSearch />
            </span>
        </div>
    );
};

export default Search;
