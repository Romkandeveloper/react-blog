import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";

let reducers = combineReducers({
    profilePage: profileReducer
});

const store = createStore(reducers);

export default store;