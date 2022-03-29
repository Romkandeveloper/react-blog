import React from 'react';
import style from './Author.module.css';

const Author = (props) => {
  return (
    <div className={style.author}>
      <div className={style.author__avatar}>
        <img src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" />
      </div>
      <div className={style.author__info}>
        <div className={style.author__name}>
          James Leman
        </div>
        <div className={style.author__date}>
          April 28, 2016
        </div>
      </div>
    </div>
  );
};

export default Author;