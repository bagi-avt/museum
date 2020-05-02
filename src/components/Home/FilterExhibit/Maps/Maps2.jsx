import React, { Component } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    // InfoWindow,
} from "react-google-maps";
import mapStyles from "./mapStyles";
import "./Maps.css";
import data from "./data1.json";
const tempApi = "AIzaSyDhjVz1DiOqPw4bkdi68v4_WZWl6vOt45o";
let xhr = new XMLHttpRequest();
xhr.open("POST", "http://api.sypexgeo.net/json/");
xhr.send();

class Map extends Component {
    state = {
        isOpen: false,
        exhibits: data.exhibit,
        exhibit: {},
    };

    handleBoundsChanged() {
        console.log(this.getBounds());
    }

    showMarker(item) {
        // this.setState({
        //     isOpen: !this.state.isOpen,
        // });
        console.log(item);
    }
    closeMarker = () => {
        this.setState({
            isOpen: false,
            exhibit: {},
        });
    };

    render() {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{
                    lat: JSON.parse(xhr.response).city.lat,
                    lng: JSON.parse(xhr.response).city.lon,
                }}
                onBoundsChanged={this.handleBoundsChanged}
                defaultOptions={{ styles: mapStyles, disableDefaultUI: true }}
            >
                {this.state.exhibits.map((item) => (
                    <Marker
                        key={item.properties.PARK_ID}
                        position={{
                            lat: item.geometry.coordinates[0],
                            lng: item.geometry.coordinates[1],
                        }}
                        //onClick={this.showMarker}
                        onClick={() => {
                            this.showMarker(item);
                        }}
                    />
                ))}
                {/* {this.state.isOpen && (
                    <InfoWindow
                        onCloseClick={this.showMarker}
                        position={{
                            lat: this.state.exhibit.geometry.coordinates[0],
                            lng: this.state.exhibit.geometry.coordinates[1],
                        }}
                    >
                        <div>
                            <h2>{this.state.exhibit.properties.name}</h2>
                            <p>
                                {
                                    this.state.exhibit.properties
                                        .short_description
                                }
                            </p>
                        </div>
                    </InfoWindow>
                )} */}
            </GoogleMap>
        );
    }
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maps() {
    return (
        <div className="maps-block">
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${tempApi}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}
