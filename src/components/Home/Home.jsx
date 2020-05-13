import React from "react";
import PropTypes from "prop-types";
import MapsContainer from "../../containers/MapsContainer";
//import ItemCategories from "./ItemCategories/ItemCategories";
import "./Home.css";
import ListExhibitContainer from "../../containers/ListExhibitContainer";
import ItemCategoriesContainer from "../../containers/ItemCategoriesContainer";

const Home = ({ listCategories }) => {
    return (
        <div>
            <div className="list-categories">
                {listCategories.map((item, i) => (
                    <ItemCategoriesContainer key={i} item={item} />
                ))}
            </div>
            <MapsContainer />
            <ListExhibitContainer />
        </div>
    );
};
Home.propTypes = {
    listCategories: PropTypes.array,
};
export default Home;
