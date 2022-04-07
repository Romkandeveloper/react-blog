const UPDATE_USERS = 'UPDATE-USERS';

const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERS:
            return {
                ...state,
                users: [...action.value],
            }
        default:
            return state;
    }
}

export default usersReducer;

export const updateUsers = (value) => {
    return {
        type: UPDATE_USERS,
        value: value
    }
}