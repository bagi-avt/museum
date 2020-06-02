import Header from "../components/Header/Header";
import { connect } from "react-redux";
import { inputSearchValue } from "../redux/exhibits-reducer";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { getProfileInfo } from "../api/api";
import { setProfileInfo } from "../redux/profile-reducer";

class HeaderContainer extends Component {
    componentDidMount() {
        getProfileInfo().then((data) => {
            this.props.setProfileInfo(data);
        });
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
    setProfileInfo,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(HeaderContainer));
