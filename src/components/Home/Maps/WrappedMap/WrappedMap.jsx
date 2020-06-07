import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    withScriptjs,
    withGoogleMap,
    Marker,
    GoogleMap,
    InfoWindow,
} from "react-google-maps";

import mapStyles from "./mapStyles";

const WrappedMap = withScriptjs(
    withGoogleMap(({ filtredExhibits, filterExhibit, defaultCenter }) => {
        const [selectedMarker, setSelectedMarker] = useState(null);
        const [ref, setRef] = useState(null);

        const getBounds = () => {
            filterExhibit(ref.getBounds());
        };
        return (
            <GoogleMap
                ref={(mapRef) => setRef(mapRef)}
                defaultZoom={10}
                defaultCenter={{
                    lat: defaultCenter.lat,
                    lng: defaultCenter.lon,
                }}
                onBoundsChanged={getBounds}
                defaultOptions={{ styles: mapStyles, disableDefaultUI: true }}
            >
                {filtredExhibits.map((item, i) => (
                    <Marker
                        key={i}
                        position={{
                            lat: +item.geometry.coordinates[0],
                            lng: +item.geometry.coordinates[1],
                        }}
                        onClick={() => {
                            setSelectedMarker(item);
                        }}
                    />
                ))}
                {selectedMarker && (
                    <InfoWindow
                        onCloseClick={() => {
                            setSelectedMarker(null);
                        }}
                        position={{
                            lat: +selectedMarker.geometry.coordinates[0],
                            lng: +selectedMarker.geometry.coordinates[1],
                        }}
                    >
                        <div>
                            <h2>{selectedMarker.properties.name}</h2>
                            <p>{selectedMarker.properties.short_description}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        );
    })
);

WrappedMap.propTypes = {
    filtredExhibits: PropTypes.array,
    filterExhibit: PropTypes.func,
};
export default WrappedMap;
