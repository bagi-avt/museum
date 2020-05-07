import { createStore, combineReducers } from "redux";
import listExhibitsReducer from "./list-exhibits-reducer";
import profileReducer from "./profile-reducer";
 
let reducers = combineReducers({
    exhibitsPage: listExhibitsReducer,
    profilePage: profileReducer,
});
let store = createStore(reducers);
export default store;
