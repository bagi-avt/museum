import React from "react";
import PropTypes from "prop-types";

import WrappedMap from "./WrappedMap/WrappedMap";
import "./Maps.css";
const tempApi = "AIzaSyDhjVz1DiOqPw4bkdi68v4_WZWl6vOt45o";
const styleWrappedMap = <div style={{ height: "100%" }} />;
const Maps = ({ newListExhibits, dispatch }) => {
    return (
        <div className="maps-block">
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${tempApi}`}
                loadingElement={styleWrappedMap}
                containerElement={styleWrappedMap}
                mapElement={styleWrappedMap}
                newListExhibits={newListExhibits}
                dispatch={dispatch}
            />
        </div>
    );
};
Maps.propTypes = {
    newListExhibits: PropTypes.array,
    dispatch: PropTypes.func,
};
export default Maps;
