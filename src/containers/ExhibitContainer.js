import { connect } from "react-redux";
//import history from "../history";
import Exhibit from "../components/Exhibit/Exhibit";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";

class ExhibitContainer extends Component {
    componentDidMount() {
        console.log(this.props.match.params.exhibitId); //для запроса на сервер уникальное значение выбранного экспоната
    }
    render() {
        console.log(this.props);
        return <Exhibit {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    exhibit: state.exhibitsPage.selectedExhibit[0],
});
let mapDispatchToProps = {};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ExhibitContainer));
