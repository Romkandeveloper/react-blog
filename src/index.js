import React from 'react';
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals'
import store from "./redux/redux-store";
import './index.css';
import App from './App';

let renderDom = (store) => {
    ReactDOM.render(
        <App appState={store.getState()} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}

renderDom(store);

store.subscribe(() => {
    renderDom(store);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
