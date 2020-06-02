import { connect } from "react-redux";
import Home from "../components/Home/Home";
import React, { Component } from "react";
import { setExhibits } from "../redux/exhibits-reducer";
import { getExhibits } from "../api/api";
class HomeContainer extends Component {
    componentDidMount() {
        getExhibits().then((data) => {
            this.props.setExhibits(data);
        });
    }
    render() {
        return <Home {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    listCategories: state.exhibitsPage.listCategories,
});
let mapDispatchToProps = { setExhibits };
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
