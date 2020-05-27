import * as types from "./types";
import * as axios from "axios";

let initialState = {
    listCategories: [],
    listExhibits: [],
    filtredExhibits: [],
    seacrh: "",
    postionCategory: "",
    bounds: {
        Ua: { i: 82.55007851562499, j: 83.39602578124999 },
        Ya: { i: 54.94001904149084, j: 55.075628500670526 },
    },
    defaultCenter: {},
    isFetching: false,
};

(function test() {
    axios({
        url: "/api/exhibits",
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        initialState.listCategories = response.data.listCategories;
        initialState.listExhibits = response.data.listExhibits;
    });
    axios.get("http://api.sypexgeo.net/json/").then((response) => {
        initialState.defaultCenter.lat = response.data.city.lat;
        initialState.defaultCenter.lon = response.data.city.lon;
    });
})();

const listExhibitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_EXHIBITS_FOR_MAPS:
            return {
                ...state,
                filtredExhibits: state.listExhibits.filter(
                    (item) =>
                        // (item !== null ? true : false) &&
                        item.geometry.coordinates[0] > action.bounds.Ya.i &&
                        item.geometry.coordinates[0] < action.bounds.Ya.j &&
                        item.geometry.coordinates[1] > action.bounds.Ua.i &&
                        item.geometry.coordinates[1] < action.bounds.Ua.j &&
                        (state.postionCategory !== ""
                            ? item.properties.categorie ===
                              state.postionCategory
                            : true)
                ),
                bounds: action.bounds,
            };
        case types.CHANGE_CATEGORY:
            return {
                ...state,
                postionCategory:
                    state.postionCategory === action.text ? "" : action.text,
                filtredExhibits: state.listExhibits.filter(
                    (item) =>
                        item.geometry.coordinates[0] > state.bounds.Ya.i &&
                        item.geometry.coordinates[0] < state.bounds.Ya.j &&
                        item.geometry.coordinates[1] > state.bounds.Ua.i &&
                        item.geometry.coordinates[1] < state.bounds.Ua.j &&
                        (action.text === ""
                            ? true
                            : item.properties.categorie === action.text)
                ),
            };
        case types.INPUT_SEARCH_VALUE:
            console.log(action.text);
            return {
                ...state,
                seacrh: action.text,
                filtredExhibits: state.listExhibits.filter(
                    (item) =>
                        item.properties.name
                            .toLocaleLowerCase()
                            .includes(action.text.toLocaleLowerCase()) ||
                        item.properties.description
                            .toLocaleLowerCase()
                            .includes(action.text.toLocaleLowerCase())
                ),
            };

        default:
            return state;
    }
};

export const filterExhibitActionCreater = (bounds) => ({
    type: types.FILTER_EXHIBITS_FOR_MAPS,
    bounds,
});
export const categoryChangeActionCreater = (text) => ({
    type: types.CHANGE_CATEGORY,
    text,
});
export const inputSearchValueActionCreater = (text) => ({
    type: types.INPUT_SEARCH_VALUE,
    text,
});

export default listExhibitsReducer;
