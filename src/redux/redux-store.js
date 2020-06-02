import { createStore, combineReducers } from "redux";
import listExhibitsReducer from "./exhibits-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    exhibitsPage: listExhibitsReducer,
    profilePage: profileReducer,
});
let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
