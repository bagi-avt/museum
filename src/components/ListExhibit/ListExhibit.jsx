import React from "react";
import PropTypes from "prop-types";
import ItemExhibit from "./ItemExhibit";
import "./ListExhibit.css";

const ListExhibit = ({ newListExhibits }) => {
    return (
        <div className="list-exhibits">
            {newListExhibits.map((item, i) => (
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
    newListExhibits: PropTypes.array,
};
export default ListExhibit;
