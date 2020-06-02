import * as types from "./types";
let initialState = {
    username: "Bagi",
    id_user: "12142412",
    city: "Новосибирск",
    urlPhoto: "",
    bookmarks: [
        {
            id_exhibit: "123",
            date: "Sun May 03 2020 14:28:41 GMT+0700",
        },
        {
            id_exhibit: "122",
            date: "Sun May 03 2020 14:48:41 GMT+0700",
        },
        {
            id_exhibit: "125",
            date: "Sun May 03 2020 14:58:41 GMT+0700",
        },
    ],
    browsingHistory: [
        {
            id_exhibit: "123",
            date: "Sun May 03 2020 14:28:41 GMT+0700",
        },
        {
            id_exhibit: "122",
            date: "Sun May 03 2020 14:48:41 GMT+0700",
        },
        {
            id_exhibit: "125",
            date: "Sun May 03 2020 14:58:41 GMT+0700",
        },
    ],
    reviews: [
        { id_exhibit: "123", commit: "blablabla" },
        { id_exhibit: "124", commit: "blablabla" },
        { id_exhibit: "125", commit: "blablabla" },
        { id_exhibit: "126", commit: "blablabla" },
    ],
};
// function test() {
//     getProfileInfo.then((data) => {
//         debugger;
//         initialState.username = data.;
//         initialState.urlAvatar = data.urlPhoto;
//     });
// }
// test();
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PROFILE_INFO:
            return {
                ...state,
                username: action.data.username,
                urlPhoto: action.data.urlPhoto,
            };
        default:
            return state;
    }
};

export const setProfileInfo = (data) => ({
    type: types.SET_PROFILE_INFO,
    data,
});
export default profileReducer;
