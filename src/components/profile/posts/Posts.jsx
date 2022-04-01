import React from "react";
import style from './Post.module.css';
import Post from './post/Post';

const Posts = (props) => {

    console.log(props.state);

  let posts = props.state.map(item => {
     return <Post post={item} />
  });

  return (
      <div>
          { posts }
      </div>
  );
};

export default Posts;