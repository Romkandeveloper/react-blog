import React from 'react';
import './App.css';

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = (props) => {

  return (

      <BrowserRouter>
          <section className="page">
              <Header />
              <Sidebar />

              <div className="content">

                  <Routes>
                      <Route path="/"
                             element={<Profile data={props.appState.profilePage}
                                               addPost={props.addPost}
                             />}

                      />
                      <Route path="/profile"
                             element={<Profile data={props.appState.profilePage}
                                               addPost={props.addPost}
                             />}

                      />
                      <Route path="/dialogs" element={<Dialogs />} />
                  </Routes>

              </div>
          </section>
      </BrowserRouter>

  );
}

export default App;
