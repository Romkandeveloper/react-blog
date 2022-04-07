import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {updateUsers} from "../../redux/reducers/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUsers (users) {
            dispatch(updateUsers(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;