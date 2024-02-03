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
        key: "parallax",
        name: "Parallax",
        fullScreen:{
            enable:true,
            zIndex:-1
        },
        particles: {
            number: {
                value: 150,
                density: {
                    enable: true,
                },
            },
            color: {
                value: "#fff",
            },
            shape: {
                type: "square",
            },
            opacity: {
                value: {
                    min: 0.1,
                    max: 0.5,
                },
                animation: {
                    enable: true,
                    speed: 3,
                    sync: false,
                },
            },
            size: {
                value: {
                    min: 1,
                    max: 10,
                },
                animation: {
                    enable: true,
                    speed: 20,
                    sync: false,
                },
            },
            links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                    parallax: {
                        enable: true,
                        smooth: 10,
                        force: 60,
                    },
                },
                onClick: {
                    enable: true,
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
                    size: 40,
                    duration: 2,
                    opacity: 0.8,
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
