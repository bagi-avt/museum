import React, { Component } from "react";
import { connect } from "react-redux";
import {
    filterExhibit,
    setDefaultPosition,
    getCityNameTC,
} from "../redux/exhibits-reducer";
import Maps from "../components/Home/Maps/Maps";

class MapsContainer extends Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.props.setDefaultPosition({
                lat: position.coords.latitude,
                lon: position.coords.longitude,
            });
        });
    }
    render() {
        return <Maps {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        filtredExhibits: state.exhibitsPage.filtredExhibits,
        defaultCenter: state.exhibitsPage.defaultCenter,
        coordinates: state.exhibitsPage.defaultCenter,
    };
};
let mapDispatchToProps = {
    filterExhibit,
    setDefaultPosition,
    getCityNameTC,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer);
