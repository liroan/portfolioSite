import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Banner from "./views/Banner/Banner";
import Skills from "./views/Skills/Skills";
import ProjectsPage from "./views/ProjectsPage/ProjectsPage";
import FormPage from "./views/FormPage/FormPage";

function App() {
  return (
      <div>
          <Header/>
          <Banner />
          <Skills />
          <ProjectsPage />
          <FormPage />
      </div>
  );
}

export default App;
