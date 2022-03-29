import React from 'react';
import style from './Profile.module.css';
import Posts from './posts/Posts';

const Profile = () => {
  return (
      <section className={style.profile}>
         <Posts />
      </section>
  );
};

export default  Profile;