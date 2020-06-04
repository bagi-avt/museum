import Header from "../components/Header/Header";
import { connect } from "react-redux";
import { inputSearchValue } from "../redux/exhibits-reducer";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getProfileInfoTC } from "../redux/profile-reducer";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getProfileInfoTC();
    }
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    city: state.profilePage.city,
    username: state.profilePage.username,
    search: state.exhibitsPage.search,
});
const mapDispatchToProps = {
    inputSearchValue,
    getProfileInfoTC,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(HeaderContainer));
