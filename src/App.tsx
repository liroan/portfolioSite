import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Banner from "./views/Banner/Banner";
import Skills from "./views/Skills/Skills";

function App() {
  return (
      <div>
          <Header/>
          <Banner />
          <Skills />
          <div className="lol">

          </div>
      </div>
  );
}

export default App;
