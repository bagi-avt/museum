import React from "react";
import PropTypes from "prop-types";

import WrappedMap from "./WrappedMap/WrappedMap";

const tempApi = "AIzaSyDhjVz1DiOqPw4bkdi68v4_WZWl6vOt45o";
const styleWrappedMap = <div style={{ height: "100%" }} />;
const Maps = ({ filtredExhibits, filterExhibit, defaultCenter }) => {
    
    return (
        <div className="maps-block">
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${tempApi}`}
                loadingElement={styleWrappedMap}
                containerElement={styleWrappedMap}
                mapElement={styleWrappedMap}
                filtredExhibits={filtredExhibits}
                filterExhibit={filterExhibit}
                defaultCenter={defaultCenter}
            />
        </div>
    );
};
Maps.propTypes = {
    filtredExhibits: PropTypes.array,
    filterExhibit: PropTypes.func,
    defaultCenter: PropTypes.object,
};
export default Maps;
