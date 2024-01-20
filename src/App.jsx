import React, { useEffect, useRef } from "react";
import DefaultNavbar from "./Components/DefaultNavbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Qaulity from "./Pages/Qaulity";
import Work from "./Pages/Work";
import DefaultModal from "./Components/DefaultModal";
import Contact from "./Pages/Contact";
import Clients from "./Pages/Clients";
import ParticleComponent from "./Components/ParticleComponent";

const App = () => {

  return (
    <>
    <ParticleComponent></ParticleComponent>
      <DefaultNavbar />
      <div id="outer-container">
        <div id="page-wrap">
            <Home />
          <About />
          <Qaulity />
          <Work />
          <Clients />
          <Contact />
          <DefaultModal />
          </div>
      </div>
    </>
  );
};

export default App;
