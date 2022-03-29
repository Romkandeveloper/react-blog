import React from 'react';
import style from './Sidebar.module.css';
import Navigation from "./navigation/Navigation";

const Sidebar = (props) => {
    return (
        <aside className={style.aside}>
            <Navigation />
        </aside>
    );
};

export default Sidebar;