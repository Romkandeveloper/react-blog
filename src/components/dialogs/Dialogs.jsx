import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__sidebar}>
                <ul className={style.dialogsList}>
                    <li className={style.dialogsList__item}>
                        Roma
                    </li>
                    <li className={style.dialogsList__item}>
                        Vlad
                    </li>
                    <li className={style.dialogsList__item}>
                        Vova
                    </li>
                </ul>
            </div>
            <div className={style.dialogs__messages}>
                <ul className={style.messagesList}>
                    <li className={style.messagesList__item}>
                        Hi!
                    </li>
                    <li className={style.messagesList__item}>
                        What`s up?
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Dialogs;