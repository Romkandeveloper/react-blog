import React from 'react';
import style from './Form.module.css';

import {addPostToStateCreator, updateFormInputCreator, updateFormTextAreaCreator} from "../../../../redux/state";

const Form = (props) => {

    let postTitle = React.createRef();
    let postDescription = React.createRef();

    let addPost = () => {
        if (postTitle.current.value == '' ||
            postDescription.current.value == '' ) {
            return;
        }

        props.dispatch(addPostToStateCreator(postTitle.current.value, postDescription.current.value));
    }

    let inputChange = () => {
        props.dispatch(updateFormInputCreator(postTitle.current.value));
    }

    let textAreaChange = () => {
        props.dispatch(updateFormTextAreaCreator(postDescription.current.value));
    }

    return (
        <form className={style.form}>
            <input className={style.form__input}
                   placeholder="Введите название"
                   value={props.state.inputValue}
                   onChange={inputChange}
                   ref={postTitle}
            />
            <textarea className={style.form__text}
                      placeholder="Введите текст"
                      value={props.state.textAreaValue}
                      onChange={textAreaChange}
                      ref={postDescription}
            ></textarea>
            <button type="button"
                    className={style.form__btn}
                    onClick={ addPost }
            >Опубликовать</button>
        </form>
    )
};

export default Form;