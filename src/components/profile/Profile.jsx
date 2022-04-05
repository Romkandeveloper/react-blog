import React from 'react';
import style from './Profile.module.css';
import Posts from './posts/Posts';
import FormContainer from  './posts/form/FormContainer';
import storeContext from "../../redux/store-context";

const Profile = (props) => {

  return (
      <storeContext.Consumer>
          {
              store => {
                  return (
                      <section className={style.profile}>
                          <div className={style.profile__posts}>
                              <Posts state={store.getState().profilePage.posts} />
                          </div>
                          <div className={style.profile__form}>
                              <FormContainer state={store.getState().profilePage.form} dispatch={store.dispatch} />
                          </div>
                      </section>
                  )
              }
          }
      </storeContext.Consumer>


  );
};

export default  Profile;