import * as types from "./types";
import { getExhibits } from "../api/api";

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
    defaultCenter: { lat: 55.0415, lon: 82.9346 },
    isFetching: false,
    selectedExhibit: [
        {
            type: "exhibit",
            properties: {
                exhibit_id: 1,
                categorie: "1",
                name: "Каменная скульптура Молящий",
                short_description:
                    "Бронзовый спартанский щит, 510 г. до нашей эры. Его вес 45 килограмм. Дааа... Наши армейские марш-броски с полной выкладкой - это была просто шутка...",
                description:
                    "Гопло́н (др.-греч. ὅπλον), или аргивский щит — круглый выпуклый щит, являвшийся основной защитой греческих гоплитов, получивших своё наименование от слова — гоплон, что в переводе с греческого означает оружие. Это обозначение получило распространение в ряде стран. Исторически верное название щита, как в античной, так и в сегодняшней Греции — аспис (др.-греч. Άσπις) или аспида (Ασπίδα). Название гоплон ошибочно используется во многих языках, греки же различали гоплон и аспис.",
                date_of_detection: "Sun Apr 16 2020 00:58:12 GMT+0700",
            },
            url: "Каменная_скульптура_Молящий",
            geometry: {
                coordinates: [54.97687166230297, 82.8889010252334],
            },
        },
    ],
};

const listExhibitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_EXHIBITS:
            return {
                ...state,
                listCategories: action.data.listCategories,
                listExhibits: action.data.listExhibits,
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
                    (item) => item.properties.exhibit_id === action.exhibit_id
                ),
            };
        default:
            return state;
    }
};
export const setExhibits = (data) => ({
    type: types.SET_EXHIBITS,
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

export const getExhibitsTC = () => (dispatch) => {
    getExhibits().then((data) => {
        dispatch(setExhibits(data));
    });
};

export default listExhibitsReducer;
