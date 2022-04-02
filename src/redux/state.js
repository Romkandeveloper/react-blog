const ADD_POST_TO_STATE = 'ADD-POST-TO-STATE';
const UPDATE_FORM_INPUT = 'UPDATE-FORM-INPUT';
const UPDATE_FORM_TEXTAREA = 'UPDATE-FORM-TEXTAREA';

let store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {

        },
    },

    getState () {
      return this._state;
    },

    _reRender () {

    },

    render (callback) {
        this._reRender = callback;
    },

    _addPostToState (postTitle, postDescription) {
        this._state.profilePage.posts.push({
            title: postTitle,
            description: postDescription
        });

        this._clearForm();
        this._reRender(this);
    },

    _clearForm () {
        this._state.profilePage.form.inputValue = '';
        this._state.profilePage.form.textAreaValue = '';
    },

    _updateFormInput (newValue) {
        this._state.profilePage.form.inputValue = newValue;
        this._reRender(this);
    },

    _updateFormTextArea (newValue) {
        this._state.profilePage.form.textAreaValue = newValue;
        this._reRender(this);
    },

    dispatch (action) {
        if (action.type === ADD_POST_TO_STATE) {
            this._addPostToState(action.postTitle, action.postDescription);
        }else if (action.type === UPDATE_FORM_INPUT) {
            this._updateFormInput (action.value);
        }else if (action.type === UPDATE_FORM_TEXTAREA) {
            this._updateFormTextArea (action.value);
        }
    },
}

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


export default store;