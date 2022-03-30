import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navigation = () => {
    return (
        <ul className={style.navigation}>
           <li className={style.navigation__item}>
               <NavLink to="/profile">Profile</NavLink>
           </li>
            <li className={style.navigation__item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </li>
            <li className={style.navigation__item}>
                <NavLink to="/news">News</NavLink>
            </li>
            <li className={style.navigation__item}>
                <NavLink to="/music">Music</NavLink>
            </li>
            <li className={style.navigation__item}>
                <NavLink to="/settings">Settings</NavLink>
            </li>
        </ul>
    );
}

export default Navigation;