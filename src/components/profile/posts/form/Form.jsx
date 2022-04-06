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

        props.addPost(postTitle.current.value, postDescription.current.value);
    }

    let inputChange = () => {
        props.inputChange(postTitle.current.value);
    }

    let textAreaChange = () => {
        props.textAreaChange(postDescription.current.value);
    }

    return (
        <form className={style.form}>
            <input className={style.form__input}
                   placeholder="Введите название"
                   value={props.inputValueState}
                   onChange={inputChange}
                   ref={postTitle}
            />
            <textarea className={style.form__text}
                      placeholder="Введите текст"
                      value={props.inputAreaValueState}
                      onChange={textAreaChange}
                      ref={postDescription}
            ></textarea>
            <button type="button"
                    className={style.form__btn}
                    onClick={addPost}
            >Опубликовать</button>
        </form>
    )
};

export default Form;