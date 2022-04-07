import React from "react";
import style from './User.module.css';

const User = (props) => {
    return (
        <div className={style.author}>
            <div className={style.author__avatar}>
                <img src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" />
            </div>
            <div className={style.author__info}>
                <div className={style.author__name}>
                    { props.state.username }
                </div>
                <div className={style.author__date}>
                    { props.state.email }
                </div>
            </div>
        </div>
    );
}

export default User;