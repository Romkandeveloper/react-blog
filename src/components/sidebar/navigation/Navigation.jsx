import React from 'react';
import style from './Navigation.module.css';

const Navigation = () => {
    return (
        <ul className={style.navigation}>
           <li className={style.navigation__item}>
               <a href="#">Profile</a>
           </li>
            <li className={style.navigation__item}>
                <a href="#">Messages</a>
            </li>
            <li className={style.navigation__item}>
                <a href="#">News</a>
            </li>
            <li className={style.navigation__item}>
                <a href="#">Music</a>
            </li>
            <li className={style.navigation__item}>
                <a href="#">Settings</a>
            </li>
        </ul>
    );
}

export default Navigation;