import React from "react";
import PropTypes from "prop-types";
import Maps from "./Maps/Maps";
import ItemCategories from "./ItemCategories/ItemCategories";
import "./FilterExhibit.css";
import ListExhibit from "../ListExhibit/ListExhibit";

const FilterExhibit = ({ listCategories, newListExhibits, dispatch }) => {
    //console.log(window.location.toString().slice(21)); //url страницы

    return (
        <div className="filter-exhibit">
            <div className="list-categories">
                {listCategories.map((item, i) => (
                    <ItemCategories key={i} id={item.id} text={item.text} />
                ))}
            </div>

            <Maps newListExhibits={newListExhibits} dispatch={dispatch} />
            <ListExhibit newListExhibits={newListExhibits} />
        </div>
    );
};
FilterExhibit.propTypes = {
    listCategories: PropTypes.array,
    newListExhibits: PropTypes.array,
    dispatch: PropTypes.func,
};
export default FilterExhibit;
