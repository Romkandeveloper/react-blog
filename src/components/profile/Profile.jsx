import React from 'react';
import style from './Profile.module.css';
import Posts from './posts/Posts';
import Form from  './posts/form/Form';

const Profile = () => {
  return (
      <section className={style.profile}>
          <div className={style.profile__posts}>
              <Posts />
          </div>
          <div className={style.profile__form}>
              <Form />
          </div>
      </section>
  );
};

export default  Profile;