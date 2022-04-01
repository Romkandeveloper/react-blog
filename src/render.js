import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPostToState } from "./redux/state";

export let renderDom = (state) => {
    ReactDOM.render(
        <App appState={state} addPost={addPostToState} />,
        document.getElementById('root')
    );
}
