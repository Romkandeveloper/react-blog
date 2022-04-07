import React from 'react';
import './App.css';

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";

const App = (props) => {

  return (

      <BrowserRouter>
          <section className="page">
              <Header />
              <Sidebar />

              <div className="content">

                  <Routes>
                      <Route path="/" element={<Profile />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/dialogs" element={<Dialogs />} />
                      <Route path="/users" element={<UsersContainer />} />
                  </Routes>

              </div>
          </section>
      </BrowserRouter>

  );
}

export default App;
