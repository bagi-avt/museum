import * as axios from "axios";

export const getExhibits = () => {
    return axios({
        url: "/api/exhibits",
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        return response.data;
    });
};
export const getCategories = () => {
    return axios({
        url: "/api/categories",
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        return response.data;
    });
};
export const getProfileInfo = () => {
    return axios({
        url: "/api/profile",
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        return response.data;
    });
};

export const getCityName = (coordinates) => {
    return axios
        .get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lon}
            &key=AIzaSyDhjVz1DiOqPw4bkdi68v4_WZWl6vOt45o`
        )
        .then((response) => {
            return response.data;
        });
};
//export const testPost=