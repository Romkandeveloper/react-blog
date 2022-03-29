import React from 'react';
import './App.css';

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
      <section className="page">
          <Header />
          <Sidebar />
          <Profile />
      </section>
  );
}

export default App;
