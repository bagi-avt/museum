import React from "react";
import PropTypes from "prop-types";
import Maps from "./Maps/Maps2";
import ItemCategories from "./ItemCategories/ItemCategories";
import "./FilterExhibit.css";

const FilterExhibit = ({ listCategories }) => {
    console.log(window.location.toString().slice(21)); //url страницы

    return (
        <div className="filter-exhibit">
            <div className="list-categories">
                {listCategories.map((item) => (
                    <ItemCategories id={item.id} text={item.text} />
                ))}
            </div>

            <Maps />
        </div>
    );
};
FilterExhibit.propTypes = {
    listCategories: PropTypes.array,
};
export default FilterExhibit;
