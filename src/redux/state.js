import profileReducer from "./reducers/profile-reducer";

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

    dispatch (action) {

        this._state.profilePage = profileReducer(action, this._state.profilePage);

        this._reRender(this);
    },
}

export default store;