import React from "react";
import style from './Post.module.css';
import Post from './post/Post';

const Posts = (props) => {
  return (
      <div>
          <Post />
          <Post />
      </div>
  );
};

export  default Posts;