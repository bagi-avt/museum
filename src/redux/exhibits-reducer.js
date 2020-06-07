import * as types from "./types";
import { getExhibits, getCityName, getCategories } from "../api/api";

let initialState = {
    listCategories: [],
    listExhibits: [],
    filtredExhibits: [],
    seacrh: "",
    postionCategory: "",
    bounds: null,
    defaultCenter: { lat: 55.7522, lon: 37.6156 },
    isFetching: false,
    selectedExhibit: null,
    nameCity: null,
};

const listExhibitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_EXHIBITS:
            return {
                ...state,
                listExhibits: action.listExhibits,
            };
        case types.SET_CATEGORIES:
            return {
                ...state,
                listCategories: action.data.listCategories,
            };
        case types.FILTER_EXHIBITS_FOR_MAPS:
            return {
                ...state,
                filtredExhibits: state.listExhibits.filter(
                    (item) =>
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
                postionCategory: "",
            };
        case types.SELECTED_EXHIBIT:
            return {
                ...state,
                selectedExhibit: state.listExhibits.filter(
                    (item) => item._id === action.exhibit_id
                ),
            };
        case types.SET_DEFAULT_POSITION:
            return {
                ...state,
                defaultCenter: action.coordinates,
            };
        case types.SET_CITY_NAME:
            return {
                ...state,
                nameCity: action.nameCity,
            };
        default:
            return state;
    }
};
export const setExhibits = (listExhibits) => ({
    type: types.SET_EXHIBITS,
    listExhibits,
});
export const setCategories = (data) => ({
    type: types.SET_CATEGORIES,
    data,
});
export const filterExhibit = (bounds) => ({
    type: types.FILTER_EXHIBITS_FOR_MAPS,
    bounds,
});
export const categoryChange = (text) => ({
    type: types.CHANGE_CATEGORY,
    text,
});
export const inputSearchValue = (text) => ({
    type: types.INPUT_SEARCH_VALUE,
    text,
});
export const selectedExhibit = (exhibit_id) => ({
    type: types.SELECTED_EXHIBIT,
    exhibit_id,
});
export const setDefaultPosition = (coordinates) => ({
    type: types.SET_DEFAULT_POSITION,
    coordinates,
});
export const setCityName = (nameCity) => ({
    type: types.SET_CITY_NAME,
    nameCity,
});
export const getExhibitsTC = () => (dispatch) => {
    getExhibits().then((listExhibits) => {
        dispatch(setExhibits(listExhibits));
    });
    getCategories().then((data) => {
        dispatch(setCategories(data));
    });
};

export const getCityNameTC = (coordinates) => (dispatch) => {
    getCityName(coordinates).then((data) => {
        dispatch(setCityName(data));
    });
};
export default listExhibitsReducer;
