import React, {FC} from 'react';
import './App.module.scss';
import Header from "./components/Header/Header";
import Banner from "./views/Banner/Banner";
import Skills from "./views/Skills/Skills";
import ProjectsPage from "./views/ProjectsPage/ProjectsPage";
import FormPage from "./views/FormPage/FormPage";
import Footer from "./views/Footer/Footer";
import {ToastContainer} from "react-toastify";
import styles from "./App.module.scss"
const App:FC = () => {
  return (
      <div className={styles.app}>
          <Header/>
          <main>
              <ToastContainer style={{ marginTop: 70 }}/>
              <Banner />
              <Skills />
              <ProjectsPage />
              <FormPage />
          </main>
          <Footer />
      </div>
  );
}

export default App;
