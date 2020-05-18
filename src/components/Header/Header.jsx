import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import ExitToApp from "@material-ui/icons/ExitToApp";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Room from "@material-ui/icons/Room";
import "./Header.css";
import history from "../../history";
import { Container } from "@material-ui/core";

const Header = ({ city, username, search, searchExhibit }) => {
    const onChange = (e) => {
        history.push("/search?q=" + e.target.value);
        searchExhibit(e.target.value);
    };

    return (
        <div className="header-content">
            <Container>
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
                        <a href="/api/auth/logout">
                            <ExitToApp color="primary" />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

Header.propTypes = {
    city: PropTypes.string,
    username: PropTypes.string,
    search: PropTypes.string,
    searchExhibit: PropTypes.func,
};
export default Header;
