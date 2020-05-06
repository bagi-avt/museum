const FILTER_EXHIBITS_FOR_MAPS = "FILTER_EXHIBITS_FOR_MAPS";
const INPUT_SEARCH_VALUE = "INPUT_SEARCH_VALUE";

let initialState = {
    listCategories: [
        { id: 1, text: "item 1" },
        { id: 2, text: "item 2" },
        { id: 3, text: "item 3" },
        { id: 4, text: "item 4" },
        { id: 5, text: "item 5" },
        { id: 6, text: "item 6" },
        { id: 7, text: "item 7" },
    ],
    listExhibits: [
        {
            type: "exhibit",
            properties: {
                exhibit_id: 123,
                categorie: "1",
                name: "Копье",
                category: "item 1",
                short_description:
                    "Дорогие друзья, новая модель организационной д",
                description:
                    "Дорогие друзья, новая модель организационной деятельности требует от нас анализа новых предложений? Разнообразный и богатый опыт постоянное информационно-техническое обеспечение нашей деятельности способствует повышению актуальности позиций, занимаемых участниками в отношении поставленных задач! Задача организации, в особенности же курс на социально-ориентированный национальный проект влечет за собой процесс внедрения и модернизации новых предложений!",
                date_of_detection: "Sun Apr 16 2020 00:58:12 GMT+0700",
            },

            geometry: {
                coordinates: [54.97687166230297, 82.8889010252334],
            },
            commit: [{ user_id: "123", text: "asfssd" }],
        },
        {
            type: "exhibit",
            properties: {
                exhibit_id: 133,
                categorie: "2",
                name: "Плащ",
                category: "item 2",
                short_description: "Задача организации, в особенности же с",
                description:
                    "Задача организации, в особенности же сложившаяся структура организации влечет за собой процесс внедрения и модернизации системы масштабного изменения ряда параметров. Разнообразный и богатый опыт новая модель организационной деятельности обеспечивает актуальность дальнейших направлений развитая системы массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров обеспечивает широкому кругу специалистов участие в формировании существующих финансовых и административных условий. Повседневная практика показыв",
                date_of_detection: "Sun Apr 16 2020 00:58:12 GMT+0700",
            },
            geometry: {
                coordinates: [54.975884286480806, 82.92014339583888],
            },
        },
        {
            type: "exhibit",
            properties: {
                exhibit_id: 143,
                categorie: "3",
                name: "Плащ",
                category: "item 2",
                short_description: "Задача организации, в особенности же с",
                description:
                    "Задача организации, в особенности же сложившаяся структура организации влечет за собой процесс внедрения и модернизации системы масштабного изменения ряда параметров. Разнообразный и богатый опыт новая модель организационной деятельности обеспечивает актуальность дальнейших направлений развитая системы массового участия. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров обеспечивает широкому кругу специалистов участие в формировании существующих финансовых и административных условий. Повседневная практика показыв",
                date_of_detection: "Sun Apr 16 2020 00:58:12 GMT+0700",
            },
            geometry: {
                coordinates: [54.93582119332196, 82.72073361324148],
            },
        },
    ],
    newListExhibits: [],
    seacrh: "",
};
/* eslint-disable */
const listExhibitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_EXHIBITS_FOR_MAPS:
            state.newListExhibits = state.listExhibits.filter(
                (item) =>
                    item.geometry.coordinates[0] > action.bounds.Ya.i &&
                    item.geometry.coordinates[0] < action.bounds.Ya.j &&
                    item.geometry.coordinates[1] > action.bounds.Ua.i &&
                    item.geometry.coordinates[1] < action.bounds.Ua.j
            );
            return state;
        case INPUT_SEARCH_VALUE:
            state.seacrh = action.text;
            return state;
        default:
            return state;
    }
};

export const filterExhibitActionCreater = (bounds) => ({
    type: FILTER_EXHIBITS_FOR_MAPS,
    bounds,
});
export const inputSearchValueActionCreater = (text) => ({
    type: INPUT_SEARCH_VALUE,
    text,
});
export default listExhibitsReducer;
