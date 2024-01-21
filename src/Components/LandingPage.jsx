import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Qaulity from "../Pages/Qaulity";
import Work from "../Pages/Work";
import DefaultModal from "./DefaultModal";
import DefaultNavbar from "./DefaultNavbar";
import Contact from "../Pages/Contact";
import Clients from "../Pages/Clients";

const LandingPage = () => {
  return (
    <div>
      <DefaultNavbar/>
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
    </div>
  );
};

export default LandingPage;
