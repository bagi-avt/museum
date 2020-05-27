import React from "react";
import { Route, BrowserRouter, Router } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Exhibit from "./components/Exhibit/Exhibit";
import Search from "./components/Search/Search";
import HeaderContainer from "./containers/HeaderContainer";
import Profile from "./components/Profile/Profile";
import HomeContainer from "./containers/HomeContainer";
import history from "./history";
import { Container } from "@material-ui/core";

function App() {
    return (
        <BrowserRouter>
            <Router history={history}>
                <Route
                    exact
                    path={["/", "/login", "/register"]}
                    component={Auth}
                />
                <HeaderContainer />
                <Container>
                    <Route path="/home" render={() => <HomeContainer />} />
                    <Route path="/profile" render={() => <Profile />} />
                    <Route path="/search" render={() => <Search />} />
                    <Route path="/exhibit" component={() => <Exhibit />} />
                </Container>
            </Router>
        </BrowserRouter>
    );
}

export default App;
