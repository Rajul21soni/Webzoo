import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; 


const ParticleComponent = () => {
    const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
        key: "bubble",
    name: "Bubble",
    fullScreen:{
        enable:true,
        zIndex:-1
    },
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#1b1e34",
        },
        shape: {
            type: "square",
            
        },
        opacity: {
            value: {
                min: 0.3,
                max: 0.5,
            },
        },
        size: {
            value: {
                min: 100,
                max: 160,
            },
        },
        links: {
            enable: false,
            distance: 200,
            color: "#ffffff",
            opacity: 1,
            width: 2,
        },
        move: {
            enable: true,
            speed: 8,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "bubble",
            },
            onClick: {
                enable: false,
                mode: "push",
            },
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                duration: 2,
                size: 40,
                opacity: 0.8,
                color: "#FFA500",
                mix: true,
            },
            repulse: {
                distance: 200,
            },
            push: {
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
        },
    },
        pauseOnBlur: true,
        background: {
            color: "#000",
        },
    }),
    [],
  );
  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{ zIndex: -1 }}
      />
    );
  }



    return (
        
      <></>
    );
};

export default ParticleComponent;
