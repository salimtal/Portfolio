import "./Project.css";
import { useNavigate } from 'react-router-dom';

import GMALogo from '../../Images/GMALogo.png';
import png1 from '../../Images/1.png';
import mysteryNumber from '../../Images/mysteryNumber.png';



function Projects() {

  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/ProjectDetails1');
  };
  const handleClick2 = () => {
    navigate('/ProjectDetails2');
  };
  const handleClick3 = () => {
    navigate('/ProjectDetails3');
  };


  return (

    <div className='cardsMap'>

      <div className='card'>

        <div className='projectImg'>
        <img src={GMALogo} alt="GMALogo" />
        </div>


        <div className='cardBody'>

          <div className='cardTitle'>GMA International</div>

          <div className='cardText'>
            <p> Page "Données Personnelles", incluant une gestion complète des données.  </p>
          </div>

          <button className='btn' onClick={handleClick1} >En savoir plus </button>

        </div>

      </div>

      <div className='card'>

        <div className='projectImg'>
        <img src={png1} alt="png1" />
        </div>


        <div className='cardBody'>

          <div className='cardTitle'>Epic Rivals</div>

          <div className='cardText'>
            <p>Jeu au tour par tour.</p>
          </div>

          <button className='btn' onClick={handleClick2} >En savoir plus </button>

        </div>

      </div>

      <div className='card'>

        <div className='projectImg'>
        <img src={mysteryNumber} alt="mysteryNumber" />
        </div>


        <div className='cardBody'>

          <div className='cardTitle'>Mystery Number</div>

          <div className='cardText'>
            <p>Devinez le nombre ou chiffre mystère </p>
          </div>

          <button className='btn' onClick={handleClick3} >En savoir plus </button>

        </div>



      </div>

    </div>

  );
}

export default Projects;