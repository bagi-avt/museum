let initialState = {
    username: "Bagi",
    id_user: "12142412",
    city: "Новосибирск",
    urtlAvatar: "",
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

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default profileReducer;
