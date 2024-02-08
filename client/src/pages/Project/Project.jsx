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
          <img src="1.png" alt="Jeu" id="epicRivals" />
        </div>


        <div className='cardBody'>

          <div className='cardTitle'>Epic Rivals</div>

          <div className='cardText'>
            <p>Combat tour par tour entre deux équipes deux équipesdeux équipes </p>
          </div>

          <button className='btn'onClick={handleClick1} >En savoir plus </button>

        </div>

      </div>

      <div className='card'>

        <div className='projectImg'>
          <img src="1.png" alt="Jeu" />
        </div>


        <div className='cardBody'>

          <div className='cardTitle'>Card Title</div>

          <div className='cardText'>
            <p>Jeu au tour par tour</p>
          </div>

          <button className='btn' onClick={handleClick2} >En savoir plus </button>

        </div>

      </div>

      <div className='card'>

        <div className='projectImg'>
          <img src="1.png" alt="Jeu" />
        </div>


        <div className='cardBody'>

          <div className='cardTitle'>Card Title</div>

          <div className='cardText'>
            <p>Jeu au tour par tour</p>
          </div>

          <button className='btn' onClick={handleClick3} >En savoir plus </button>

        </div>



      </div>

      </div>

  );
}

export default Projects;