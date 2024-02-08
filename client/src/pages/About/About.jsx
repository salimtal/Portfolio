import React from 'react';
import "./About.css";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";





import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const About = () => {


  // gsap.to(".aboutMe", {
  //   scrollTrigger: {
  //     trigger: ".aboutMe",
  //     start: "top center",
  //     end: "+=900",
  //     marker: true,
  //     toggleActions: "restart pause reverse pause"
  //   },
  //   x: 200,
  //   duration: 1
  // });


  // gsap.to(".exprience", {
  //   scrollTrigger: {
  //     trigger: ".exprience",
  //     start: "top center",
  //     end: "+=900",
  //     marker: true,
  //     srub: true,
  //     toggleActions: "restart pause reverse pause"
  //   },
  //   x: 400,
  //   duration: 1
  // });

  // gsap.to(".skills", {
  //   scrollTrigger: {
  //     trigger: ".skills",
  //     start: "top center",
  //     end: "+=900",
  //     marker: true,
  //     toggleActions: "restart pause reverse pause"
  //   },
  //   x: 400,
  //   duration: 1
  // });


  return (
    <div className='aboutMePage'>
      <div className='aboutMe'>

        <h1>À propos</h1>
        <h2>Liza Bahloul</h2>
        <p> Vous venez de l'apprendre, je suis ardemment à la recherche d'une alternance, car ma carrière future en dépend ! Oui, je répète, cette opportunité est cruciale pour la progression de mes objectifs professionnels, à savoir:</p>

        <ul>
          <li>Explorez de nouveaux projets pour plonger davantage dans les coulisses de ce domaine</li>
          <li>Acquérir une expérience concrète afin de cultiver mon potentiel</li>
          <li>Développer mes compétences au sein d'une entreprise</li>
          <li>Concevoir et développer des applications</li>
          <li>Apporter une valeur ajoutée à vos projets</li>
          <li>...On en arrive à l'équation suivante:</li>
          <li>Alternance = Expérience = CDD/CDI.</li>
        </ul>

      </div>


      <div className='exprience'>
        <h2>Parcours & expérience</h2>

        <p>Après avoir suivi trois années de licence en anglais, j'ai débuté ma carrière en tant que secrétaire dans un garage automobile, acquérant ainsi des compétences administratives et organisationnelles.   </p>
          <p> Par la suite, j'ai évolué en tant que conseillère client chez Sitel pour Airbnb.</p>
          <p>Mon intérêt croissant pour la programmation m'a ensuite conduit à entreprendre une reconversion professionnelle. </p>
          <p>Au cours de cette transition, j'ai suivi une formation en développement web et web mobile, et j'ai eu l'opportunité de mettre en pratique mes nouvelles compétences lors d'un stage de trois mois chez GMA International. Cette expérience m'a permis de valider un titre de niveau bac +2 en développement web et web mobile, consolidant ainsi mon parcours professionnel dans le domaine de la programmation.</p>
     
      </div>


      <div className='skills'>
        <h2>Outils et compétences </h2>
        <div className='HardSkillsIcons'>
        <IoLogoJavascript className='svg' />
        <FaReact />
        <IoLogoHtml5 className='svg' />
        <IoLogoCss3 className='svg' />
        <FaNode className='svg' />
        <SiMysql className='svg'/>
        <IoLogoFigma className='svg'/>
        <FaGitAlt className='svg'/>
        <FaGithubSquare  className='svg' />
        <BsBootstrapFill className='svg'/>

        </div>

      </div>
    </div>



  )
}

export default About