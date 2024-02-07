// import './App.css';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// // import components
// import Navbar from './components/NavBar/NavBar';

// // import pages

// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Project from './pages/Project/Project';
// import Contact from './pages/Contact/Contact';
// import NavBar from './components/NavBar/NavBar';



// // import NotFound from './pages/NotFound/NotFound';
// //  si pages ne s'affichent pas aller dans view puis commande palette puis reload window


// export default function App() {
//   const particlesInit = async (main) => {
//     console.log(main);

//     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     await loadFull(main);
//   };

//   return (
//     <div className="App">
//       <h1>Hello Coders!</h1>

//        <Router>

//  <NavBar/>

// <Routes>

// <Route path='/' element={<Home/>}/>
// <Route path='/About' element={<About/>}/>
//  <Route path='/Project' element={<Project/>}/>
//  <Route path='/Contact' element={<Contact/>}/>

//  </Routes>

// </Router>
//        <Particles
//       id="tsparticles"
//       init={particlesInit}

//       options={{
//         "fullScreen": {
//             "enable": true,
//             "zIndex": 5
//         },
//         "particles": {
//             "number": {
//                 "value": 50,
//                 "density": {
//                     "enable": true,
//                     "value_area": 800
//                 }
//             },
//             "color": {
//                 "value": "#fff"
//             },
//             "shape": {
//               "type": "links",
//               "options": {
//                   "sides": 5
//               }
//           },
//             "opacity": {
//                 "value": 50,
//                 "random": true,
//                 "anim": {
//                     "enable": true,
//                     "speed": 5,
//                     "opacity_min": 0.1,
//                     "sync": true
//                 }
//             },
//             "size": {
//                 "value": 5,
//                 "random": true,
//                 "anim": {
//                     "enable": true,
//                     "speed": 40,
//                     "size_min": 0.1,
//                     "sync": true
//                 }
//             },
//             "rotate": {
//                 "value": 50,
//                 "random": true,
//                 "direction": "clockwise",
//                 "animation": {
//                     "enable": true,
//                     "speed": 5,
//                     "sync": false
//                 }
//             },
// "line_linked": {
//                 "enable": true,
//                 "distance": 10,
//                 "color": "#ffffff",
//                 "opacity": 0.4,
//                 "width": 10
//             },
//             "move": {
//                 "enable": true,
//                 "speed": 2,
//                 "direction": "none",
//                 "random": false,
//                 "straight": false,
//                 "out_mode": "out",
//                 "attract": {
//                     "enable": false,
//                     "rotateX": 600,
//                     "rotateY": 1200
//                 }
//             }
//         },
//         "interactivity": {
//             "events": {
//                 "onhover": {
//                     "enable": true,
//                     "mode": ["grab"]
//                 },
//                 "onclick": {
//                     "enable": false,
//                     "mode": "bubble"
//                 },
//                 "resize": true
//             },
//             "modes": {
//                 "grab": {
//                     "distance": 400,
//                     "line_linked": {
//                         "opacity": 1
//                     }
//                 },
//                 "bubble": {
//                     "distance": 400,
//                     "size": 40,
//                     "duration": 2,
//                     "opacity": 8,
//                     "speed": 3
//                 },
//                 "repulse": {
//                     "distance": 200
//                 },
//                 "push": {
//                     "particles_nb": 4
//                 },
//                 "remove": {
//                     "particles_nb": 2
//                 }
//             }
//         },
//         // "retina_detect": true,
//         // "background": {
//         //     "color": "#111",
//         //     "image": "",
//         //     "position": "50% 50%",
//         //     "repeat": "no-repeat",
//         //     "size": "cover"
//         // }
//     }}
//     />
//     </div>
//   );
// }


import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Navbar from './components/NavBar/NavBar';

// import pages

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
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
          value: "#8a2be2",
        },
        links: {
          color: "#FF9BD2",
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
          speed: 4.,
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
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <NavBar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/ProjectDetails' element={<ProjectDetails />} />
        <Route path='/ProjectDetails2' element={<ProjectDetails2 />} />
        <Route path='/ProjectDetails3' element={<ProjectDetails3 />} />


      </Routes>

    </Router>

  </>;
};

export default App;




