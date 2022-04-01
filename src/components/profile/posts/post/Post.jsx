import React from 'react';
import style from './Post.module.css';
import Author from './../author/Author.jsx';

const Post = (props) => {
    return (
        <article className={style.post}>
            <div className={style.post__body}>
                <h5 className={style.post__title}>
                    {props.post.title}
                </h5>
                <p className={style.post__description}>
                    {props.post.description}
                </p>
            </div>
            <footer className={style.post__footer}>
                <Author />
            </footer>
        </article>
    );
};

export default Post;