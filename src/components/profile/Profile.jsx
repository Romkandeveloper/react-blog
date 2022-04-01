import React from 'react';
import style from './Profile.module.css';
import Posts from './posts/Posts';
import Form from  './posts/form/Form';

const Profile = (props) => {

  return (
      <section className={style.profile}>
          <div className={style.profile__posts}>
              <Posts state={props.data.posts} />
          </div>
          <div className={style.profile__form}>
              <Form addPost={props.addPost} />
          </div>
      </section>
  );
};

export default  Profile;