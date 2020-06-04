import { connect } from "react-redux";
import Home from "../components/Home/Home";
import React, { Component } from "react";
import { getExhibitsTC } from "../redux/exhibits-reducer";

class HomeContainer extends Component {
    componentDidMount() {
        this.props.getExhibitsTC();
    }
    render() {
        return <Home {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    listCategories: state.exhibitsPage.listCategories,
});
let mapDispatchToProps = { getExhibitsTC };
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
