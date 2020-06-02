import React from "react";
import Model from "../Model/Model";

import "./Exhibit.css";

const Exhibit = ({ exhibit }) => {
    return (
        <div>
            <Model width="800" height="500" url={exhibit.url} />
            <div className="block_right">
                <h2>{exhibit.properties.name}</h2>
                <p>{exhibit.properties.description}</p>
            </div>
        </div>
    );
};

export default Exhibit;
