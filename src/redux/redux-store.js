import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer
});

const store = createStore(reducers);

export default store;