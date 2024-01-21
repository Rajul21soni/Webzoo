import React, { useEffect, useRef, useState } from "react";
import ParticleComponent from "./Components/ParticleComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import DataAnnotation from "./Components/DataAnnotation";
import Loader from "./Components/Loader";
import DataCollection from "./Components/DataCollection";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) here
    const fetchData = async () => {
      // Simulating a delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <Router>
      <ParticleComponent />

        {isLoading ? (
          <div>
            <Loader/>
          </div>
        ) : (
          <>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dataannotation" element={<DataAnnotation />} />
            <Route path="/datacollection" element={<DataCollection />} />
          </Routes>
          </>
        )}
      </Router>
    </>
  );
};

export default App;
