import React from "react";
import PropTypes from "prop-types";
import ItemExhibit from "./ItemExhibit";

const ListExhibit = ({ newListExhibits }) => {
    
    return (
        <div>
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
