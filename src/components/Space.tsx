import React from "react";

const Space = ({ size = "1rem", sizeX = "0rem" }) => {
    return <div style={{ padding: `${size} ${sizeX}` }} />;
};

export default Space;
