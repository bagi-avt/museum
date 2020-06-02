import * as axios from "axios";

export const getExhibits = () => {
    return axios({
        url: "/api/exhibits",
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
// axios.get("http://api.sypexgeo.net/json/").then((response) => {
//     //initialState.city = response.data.city.name_ru;
// });
