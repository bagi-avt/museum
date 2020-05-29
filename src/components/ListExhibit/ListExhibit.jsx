import React from "react";
import PropTypes from "prop-types";
import ItemExhibitContainer from "../../containers/ItemExhibitContainer";
import "./ListExhibit.css";
const ListExhibit = ({ filtredExhibits }) => {
    return (
        <div className="list-exhibits">
            {filtredExhibits.map((item, i) => (
                <ItemExhibitContainer key={i} item={item} />
            ))}
        </div>
    );
};
ListExhibit.propTypes = {
    filtredExhibits: PropTypes.array,
};
export default ListExhibit;
