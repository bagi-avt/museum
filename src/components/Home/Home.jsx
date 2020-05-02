import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";
import FilterExhibit from "./FilterExhibit/FilterExhibit";

import "./Home.css";

const Home = ({ data }) => {
    return (
        <div>
            <Header
                city={data.userInfo.city}
                username={data.userInfo.username}
            />
            <Route
                path="/home"
                render={() => (
                    <FilterExhibit listCategories={data.listCategories} />
                )}
            />
            <Route
                path="/profile"
                render={() => <Profile userInfo={data.userInfo} />}
            />
            <div className="home-block"></div>
        </div>
    );
};
Home.propTypes = {
    data: PropTypes.object,
};
export default Home;
