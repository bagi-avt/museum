import * as axios from "axios";

let initialState = {
    username: "Bagi",
    id_user: "12142412",
    city: "Новосибирск",
    urlAvatar: "",
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
function test() {
    axios({
        url: "/api/profile",
        headers: { "Content-Type": "application/json" },
    }).then((response) => {
        initialState.username = response.data.username;
        initialState.urlAvatar = response.data.urlPhoto;

    });
    axios.get("http://api.sypexgeo.net/json/").then((response) => {
        initialState.city = response.data.city.name_ru;
    });
}
test();
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default profileReducer;
