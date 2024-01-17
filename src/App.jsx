import React, { useEffect, useRef } from "react";
import DefaultNavbar from "./Components/DefaultNavbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Qaulity from "./Pages/Qaulity";
import Work from "./Pages/Work";
import DefaultModal from "./Components/DefaultModal";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import Clients from "./Pages/Clients";
const App = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // Apply VANTA.GLOBE effect to the wrapper div
    const vantaEffect = VANTA.WAVES({
      el: "#vanta-wrapper", // Use the wrapper div with id="vanta-wrapper"
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x884000,
      color: 0x884000,
      zoom: 0.65
    });

    // Cleanup the effect when the component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <>
      <DefaultNavbar />
      <div id="vanta-wrapper">
        <div id="outer-container">
          <div id="page-wrap">
            <Home />
            <About />
            <Qaulity />
            <Work />
            <Clients/>
            <Contact/>
            <DefaultModal/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;