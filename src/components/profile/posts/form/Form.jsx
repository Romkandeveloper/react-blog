import React from 'react';
import style from './Form.module.css';

const Form = (props) => {
    return (
        <form className={style.form}>
            <input className={style.form__input} placeholder="Введите название"/>
            <textarea className={style.form__text} placeholder="Введите текст"></textarea>
            <button className={style.form__btn}>Опубликовать</button>
        </form>
    )
};

export default Form;