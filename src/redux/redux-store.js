import { createStore, combineReducers, applyMiddleware } from "redux";
import listExhibitsReducer from "./exhibits-reducer";
import profileReducer from "./profile-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    exhibitsPage: listExhibitsReducer,
    profilePage: profileReducer,
});
let store = createStore(reducers, applyMiddleware(thunk));
export default store;
