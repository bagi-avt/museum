import React from "react";
import { Route } from "react-router-dom";

import Signin from "./Signin"
import Signup from "./Signup"

import "./Auth.css";

const Auth = () => {
    return (
        <section className="auth">
            <div className="auth__content">
                <Route exact path={["/", "/login"]} component={Signin} />
                <Route path="/register" component={Signup} />
            </div>
        </section>
    );
};

export default Auth;
