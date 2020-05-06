import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo.png";
import ExitToApp from "@material-ui/icons/ExitToApp";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Room from "@material-ui/icons/Room";
import "./Header.css";
import history from "./../../../history";
import { inputSearchValueActionCreater } from "./../../../redux/list-exhibits-reducer";

const Header = ({ city, username, search }) => {
    const onChange = (e) => {
        //window.location.assign("http://localhost:3000/search");
        console.log(e.target.value);
        history.push("/search?q=" + e.target.value);
        inputSearchValueActionCreater(e.target.value);
    };

    return (
        <div className="header-content">
            <Link to="/home">
                <img src={Logo} alt="header-logo" />
            </Link>
            <Link to="/search" />
            <Input
                className="header_search"
                placeholder="Поиск"
                value={search}
                onChange={onChange}
            />

            <div className="header-action">
                <div className="header-action-change-city">
                    <Room color="primary" />
                    <p>{city}</p>
                </div>
                <div className="header-action-login">
                    <AccountCircle color="primary" />
                    <Link to="/profile">{username}</Link>
                    <div></div>
                    <Link to="/login">
                        <ExitToApp color="primary" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    city: PropTypes.string,
    username: PropTypes.string,
    search: PropTypes.string,
};
export default Header;
