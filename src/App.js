import React from "react";
import { Route, BrowserRouter, Router } from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import history from "./history";

function App({ state, dispatch }) {
    return (
        <BrowserRouter>
            <Router history={history}>
                <Route
                    exact
                    path={["/", "/login", "/register"]}
                    component={Auth}
                />
                <Route
                    path={["/home", "/profile", "/exhibit", "/search"]}
                    render={() => <Home state={state} dispatch={dispatch} />}
                />
            </Router>
        </BrowserRouter>
    );
}
App.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
};
export default App;
