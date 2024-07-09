
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';


// import pages

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import ProjectDetails1 from './pages/ProjectDetails/ProjectDetails1';
import ProjectDetails2 from './pages/ProjectDetails/ProjectDetails2';
import ProjectDetails3 from './pages/ProjectDetails/ProjectDetails3';
import Contact from './pages/Contact/Contact';
import NavBar from './components/NavBar/NavBar';




const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#black",
          
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.5,
          },
        },
      },
      particles: {
        color: {
          value: "#DAC0A3",
        },
        links: {
          color: "#DAC0A3",
          distance: 250,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
      zIndex: 0, 
    }),
    [],
  );


  return <>
    <Router>
     

      <Routes>

    
      <Route exact path="/" element={<Home />} />
      <Route path="/Portfolio" element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/ProjectDetails1' element={<ProjectDetails1 />} />
        <Route path='/ProjectDetails2' element={<ProjectDetails2 />} />
        <Route path='/ProjectDetails3' element={<ProjectDetails3 />} />


      </Routes>

      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <NavBar />

    </Router>

  </>;

};

export default App;




