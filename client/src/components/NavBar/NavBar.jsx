import React, { useState } from 'react';
import './NavBar.css';

import { ImHome3 } from 'react-icons/im';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillFolderOpen } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

function NavBar() {
  const [activeIcon, setActiveIcon] = useState(null);

 
  const openIcon = (iconName) => {
    setActiveIcon(iconName === activeIcon ? null : iconName);
  };


  return (
    
    <nav className='nav'>
      <div className='nav-menu'>
        <ul className="nav-list">
          <li>
            <Link
              to='/'
              className={`items ${activeIcon === 'Home' ? 'active' : ''}`}
              onClick={() => openIcon('Home')}
            >
              <div className="icon-title">
                <ImHome3 className='svg' />
                <h3 className={`${activeIcon === 'Home' ? 'titre active' : 'titre'}`}>Home</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className={`items ${activeIcon === 'About' ? 'active' : ''}`}
              onClick={() => openIcon('About')}
            >
              <div className="icon-title">
                <BsFillPersonFill className='svg' />
                <h3 className={`${activeIcon === 'About' ? 'titre active' : 'titre'}`}>About</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to='/project'
              className={`items ${activeIcon === 'Project' ? 'active' : ''}`}
              onClick={() => openIcon('Project')}
            >
              <div className="icon-title">
              <AiFillFolderOpen  className='svg'  />
              <h3 className={`${activeIcon === 'Project' ? 'titre active' : 'titre'}`}>Project</h3>
               
              </div>
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className={`items ${activeIcon === 'Contact' ? 'active' : ''}`}
              onClick={() => openIcon('Contact')}
            >
              <div className="icon-title">
                <MdEmail className='svg' />
                <h3 className={`${activeIcon === 'Contact' ? 'titre active' : 'titre'}`}>Contact</h3>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;



// /* <Link to='/' className="items button"><h3>Home</h3><ImHome3/></Link>
//           <Link to='/about' className="items button"><h3>A propos</h3><BsFillPersonFill/></Link>
//           <Link to='/project' className="items button"><h3>Projet</h3><AiFillFolderOpen/></Link>
//           <Link to='/contact' className="items button"><h3>Contact</h3><MdEmail/></Link> */







/* .box img {
	width: 100%;
	height: auto;
	opacity: 0;
	transition: opacity 1s ease-in-out; 
  }
  .box img.active {
	opacity: 1; 
}
  .box {
	width: 100px;
	height: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
  } 
  
  .boxes {
	width: 1000%; 
	position: relative;
	display: flex;
	overflow: hidden;
  }
  
 
   */