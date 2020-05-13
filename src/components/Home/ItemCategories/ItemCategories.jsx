import React from "react";
//import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import history from "../../../history";
const ItemCategories = ({ id, text, onClickCategory }) => {
    const onClick = () => {
        history.push(
            history.location.pathname === "/home/" + id
                ? "/home"
                : "/home/" + id
        );
        console.log(typeof history.location.pathname.slice(6));
        onClickCategory(history.location.pathname.slice(6));
    };
    return (
        <div className="item-categories" onClick={onClick}>
            <div>{text}</div>
        </div>
    );
};
ItemCategories.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    onClickCategory: PropTypes.func,
};
export default ItemCategories;
