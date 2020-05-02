import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ItemCategories = ({ id, text }) => {
    const urlLink = "/home/" + id;

    return (
        <div className="item-categories">
            <Link to={urlLink}>{text}</Link>
        </div>
    );
};
ItemCategories.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
};
export default ItemCategories;
