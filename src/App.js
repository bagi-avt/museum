import React from "react";
import { Route, BrowserRouter, Router } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Search from "./components/Search/Search";
import HeaderContainer from "./containers/HeaderContainer";
import Profile from "./components/Profile/Profile";
import HomeContainer from "./containers/HomeContainer";
import history from "./history";
import { Container } from "@material-ui/core";
import ExhibitContainer from "./containers/ExhibitContainer";

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
                    <Route
                        path="/exhibit"
                        component={() => <ExhibitContainer />}
                    />
                </Container>
            </Router>
        </BrowserRouter>
    );
}

export default App;
