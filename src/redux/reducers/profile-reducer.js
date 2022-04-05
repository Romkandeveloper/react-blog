const ADD_POST_TO_STATE = 'ADD-POST-TO-STATE';
const UPDATE_FORM_INPUT = 'UPDATE-FORM-INPUT';
const UPDATE_FORM_TEXTAREA = 'UPDATE-FORM-TEXTAREA';

const initialState =  {
        posts: [
            {
                title: '4 Natural Ways To Have Young Skin',
                description: 'Lorem ipsum dolor sit amet, to consectetur adipi scing elit. Nulla vehicula lorem and lacus. Vestibulum vitae mauris lorem ipsum doar.',
            },
            {
                title: 'Как избавиться от прыщей?',
                description: 'Хз, попробуй помыться',
            },
            {
                title: 'I`ll learn React',
                description: 'You will do this',
            },
        ],

        form: {
            inputValue: '',
            textAreaValue: '',
        }
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST_TO_STATE:
            state.posts.push({
                title: action.postTitle,
                description: action.postDescription
            });
            state.form.inputValue = '';
            state.form.textAreaValue = '';
            return state;
        case UPDATE_FORM_INPUT:
            state.form.inputValue = action.newValue;
            return state;
        case UPDATE_FORM_TEXTAREA:
            state.form.textAreaValue = action.newValue;
            return state;
        default:
            return state;
    }
}

export default profileReducer;

export const addPostToStateCreator = (postTitle, postDescription) => {
    return {
        type: ADD_POST_TO_STATE,
        postTitle: postTitle,
        postDescription: postDescription
    }
}

export const updateFormInputCreator = (value) => {
    return {
        type: UPDATE_FORM_INPUT,
        value: value
    }
}

export const updateFormTextAreaCreator = (value) => {
    return {
        type: UPDATE_FORM_TEXTAREA,
        value: value
    }
}
