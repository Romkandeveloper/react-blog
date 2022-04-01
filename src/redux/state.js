import {renderDom} from "../render";

let state = {
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
        ]
    },
    messagesPage: {

    }
}

export let addPostToState = (postTitle, postDescription) => {
    state.profilePage.posts.push({
        title: postTitle,
        description: postDescription
    })

    renderDom(state);
}

export default state;