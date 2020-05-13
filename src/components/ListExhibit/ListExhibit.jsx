import React from "react";
import PropTypes from "prop-types";
import ItemExhibit from "./ItemExhibit";
import "./ListExhibit.css";

const ListExhibit = ({ filtredExhibits }) => {
    return (
        <div className="list-exhibits">
            {filtredExhibits.map((item, i) => (
                <ItemExhibit
                    key={i}
                    id={item.properties.exhibit_id}
                    name={item.properties.name}
                />
            ))}
        </div>
    );
};
ListExhibit.propTypes = {
    filtredExhibits: PropTypes.array,
};
export default ListExhibit;
