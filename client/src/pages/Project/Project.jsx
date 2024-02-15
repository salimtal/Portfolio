import "./Project.css";
import { useNavigate } from 'react-router-dom';




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
          <img src="GMALogo.png" alt="Jeu" id="GMA" />
        </div>


        <div className='cardBody'>

          <div className='cardTitle'>GMA International</div>

          <div className='cardText'>
            <p> Création de la page "Données Personnelles" de l'utilisateur, incluant une gestion complète.  </p>
          </div>

          <button className='btn' onClick={handleClick1} >En savoir plus </button>

        </div>

      </div>

      <div className='card'>

        <div className='projectImg'>
          <img src="1.png" alt="Jeu" />
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
          <img src="mysteryNumber.png" alt="Jeu" />
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