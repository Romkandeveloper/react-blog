import React from 'react';
import style from './Profile.module.css';
import Posts from './posts/Posts';
import FormContainer from  './posts/form/FormContainer';

const Profile = (props) => {

  return (
      <section className={style.profile}>
          <div className={style.profile__posts}>
              <Posts state={props.data.posts} />
          </div>
          <div className={style.profile__form}>
              <FormContainer state={props.data.form} dispatch={props.dispatch} />
          </div>
      </section>
  );
};

export default  Profile;