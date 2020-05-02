import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
//import Exhibit from "./components/Home/Exhibit/Exhibit";

const data = {
    listCategories: [
        { id: 1, text: "item 1" },
        { id: 2, text: "item 2" },
        { id: 3, text: "item 3" },
        { id: 4, text: "item 4" },
        { id: 5, text: "item 5" },
        { id: 6, text: "item 6" },
        { id: 7, text: "item 7" },
        { id: 8, text: "item 8" },
        { id: 9, text: "item 9" },
        { id: 10, text: "item 10" },
        { id: 11, text: "item 11" },
        { id: 12, text: "item 12" },
    ],
    userInfo: {
        username: "Bagi",
        city: "Новосибирск",
    },
};

function App() {
    return (
        <BrowserRouter className="App">
            <Route exact path={["/", "/login", "/register"]} component={Auth} />
            <Route
                path={["/home", "/profile"]}
                render={() => <Home data={data} />}
            />
            {/* <Route path="/exhibit" component={Exhibit} /> */}
        </BrowserRouter>
    );
}

export default App;
