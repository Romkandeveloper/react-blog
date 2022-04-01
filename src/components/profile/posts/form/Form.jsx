import React from 'react';
import style from './Form.module.css';

const Form = (props) => {

    let postTitle = React.createRef();
    let postDescription = React.createRef();

    let addPost = () => {
        if (postTitle.current.value == '' ||
            postDescription.current.value == '' ) {
            return;
        }

        props.addPost(postTitle.current.value,
                      postDescription.current.value);

    }

    return (
        <form className={style.form}>
            <input className={style.form__input}
                   placeholder="Введите название"
                   ref={postTitle}
            />
            <textarea className={style.form__text}
                      placeholder="Введите текст"
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