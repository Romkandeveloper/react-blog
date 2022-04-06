import React from 'react';
import style from './Profile.module.css';
import PostsContainer from './posts/PostsContainer';
import FormContainer from './posts/form/FormContainer';

const Profile = (props) => {

    return (
        <section className={style.profile}>
            <div className={style.profile__posts}>
                <PostsContainer />
            </div>
            <div className={style.profile__form}>
                <FormContainer />
            </div>
        </section>
    );
};

export default Profile;