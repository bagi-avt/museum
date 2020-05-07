import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ItemExhibit = ({ id, name }) => {
    const urlLink = "/exhibit/" + id;
    return (
        <div className='item-exhibit'>
            <Link to={urlLink}>{name}</Link>
        </div>
    );
};
ItemExhibit.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
};
export default ItemExhibit;
