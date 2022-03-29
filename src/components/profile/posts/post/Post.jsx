import React from 'react';
import style from './Post.module.css';
import Author from './../author/Author.jsx';

const Post = (props) => {
    return (
        <article className={style.post}>
            <div className={style.post__body}>
                <h5 className={style.post__title}>
                    4 Natural Ways To Have Young Skin
                </h5>
                <p className={style.post__description}>
                    Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vehicula lorem and lacus. Vestibulum vitae mauris lorem ipsum doar.
                </p>
            </div>
            <footer className={style.post__footer}>
                <Author />
            </footer>
        </article>
    );
};

export default Post;