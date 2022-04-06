import React from "react";
import style from './Post.module.css';
import Post from './post/Post';

const Posts = (props) => {
    debugger;
  let posts = props.posts.map(item => {
     return <Post post={item} />
  });

  return (
      <div>
          { posts }
      </div>
  );
};

export default Posts;