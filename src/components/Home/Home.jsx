import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";
import FilterExhibit from "./FilterExhibit/FilterExhibit";
import Exhibit from "./Exhibit/Exhibit";
import Search from "./Search/Search";
import "./Home.css";

const Home = ({ state, dispatch }) => {
    
    return (
        <div>
            <Header
                city={state.profilePage.city}
                username={state.profilePage.username}
                search={state.exhibitsPage.search}
            />
            <Route
                path="/home"
                render={() => (
                    <FilterExhibit
                        listCategories={state.exhibitsPage.listCategories}
                        newListExhibits={state.exhibitsPage.newListExhibits}
                        dispatch={dispatch}
                    />
                )}
            />
            <Route
                path="/profile"
                render={() => <Profile userInfo={state.profilePage} />}
            />
            <Route path="/search" render={() => <Search state={state} />} />
            <Route path="/exhibit" component={Exhibit} />
        </div>
    );
};
Home.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
};
export default Home;
