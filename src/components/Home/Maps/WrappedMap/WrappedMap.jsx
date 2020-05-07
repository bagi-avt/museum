import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    withScriptjs,
    withGoogleMap,
    Marker,
    GoogleMap,
    InfoWindow,
} from "react-google-maps";
//import { filterExhibitActionCreater } from "./../../../../../redux/list-exhibits-reducer";

import mapStyles from "./mapStyles";

const xhr = new XMLHttpRequest();
xhr.open("POST", "http://api.sypexgeo.net/json/");
xhr.send();
let ref;

const WrappedMap = withScriptjs(
    withGoogleMap(({ newListExhibits, filterExhibit }) => {
        const [selectedMarker, setSelectedMarker] = useState(null);
        const getBounds = () => {
            filterExhibit(ref.getBounds());
            console.log(newListExhibits);
        };
        return (
            <GoogleMap
                ref={(mapRef) => (ref = mapRef)}
                defaultZoom={10}
                defaultCenter={{
                    lat: JSON.parse(xhr.response).city.lat,
                    lng: JSON.parse(xhr.response).city.lon,
                }}
                onBoundsChanged={getBounds}
                defaultOptions={{ styles: mapStyles, disableDefaultUI: true }}
            >
                {newListExhibits.map((item, i) => (
                    <Marker
                        key={i}
                        position={{
                            lat: item.geometry.coordinates[0],
                            lng: item.geometry.coordinates[1],
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
                            lat: selectedMarker.geometry.coordinates[0],
                            lng: selectedMarker.geometry.coordinates[1],
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
    newListExhibits: PropTypes.array,
    filterExhibit: PropTypes.func,
};
export default WrappedMap;
