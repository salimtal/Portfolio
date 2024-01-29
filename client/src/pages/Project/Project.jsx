import React from 'react';
import "./Project.css";
// import { useHistory } from 'react-router-dom';



function Projects() {


  // const history = useHistory();

  // const navigateToProjectDetails = () => {
  //   history.push('/ProjectDetails'); 
  // };

  return (

    <div className='cardsMap'>

      <div className='card'>

        <div className='projectImg'>
          <img src="./EpicRivals.png" alt="Jeu" id="epicRivals" />
        </div>


        <div className='cardBody'>

          <div className='cardTitle'>Epic Rivals</div>

          <div className='cardText'>
            <p>Combat tour par tour entre deux équipes </p>
          </div>

          <button className='btn' >En savoir plus </button>

        </div>

      </div>

      <div className='card'>

        <div className='projectImg'>
          <img src="epicrivals.png" alt="Jeu" />
        </div>


        <div className='cardBody'>

          <div className='cardTitle'>Card Title</div>

          <div className='cardText'>
            <p>Jeu au tour par tour</p>
          </div>

          <button className='btn' onClick={navigateToProjectDetails} >En savoir plus </button>

        </div>

      </div>

      <div className='card'>

        <div className='projectImg'>
          <img src="epicrivals.png" alt="Jeu" />
        </div>


        <div className='cardBody'>

          <div className='cardTitle'>Card Title</div>

          <div className='cardText'>
            <p>Jeu au tour par tour</p>
          </div>

          <button className='btn'  type='submit' >En savoir plus </button>

        </div>



      </div>

      </div>

  );
}

export default Projects;