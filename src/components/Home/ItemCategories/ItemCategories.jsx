import React from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import history from "../../../history";
const ItemCategories = ({
    id,
    nameCategory,
    urlPhotoCategory,
    onClickCategory,
}) => {
    const onClick = () => {
        history.push(
            history.location.pathname === "/home/" + id
                ? "/home"
                : "/home/" + id
        );
        onClickCategory(history.location.pathname.slice(6));
    };
    return (
        <div
            className="item-categories"
            onClick={onClick}
            style={{
                backgroundImage: "url(" + urlPhotoCategory + ")",
            }}
        >
            {nameCategory}
        </div>
    );
};
ItemCategories.propTypes = {
    id: PropTypes.number,
    nameCategory: PropTypes.string,
    urlPhotoCategory: PropTypes.string,
    onClickCategory: PropTypes.func,
};
export default ItemCategories;
