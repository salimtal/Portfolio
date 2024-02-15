
import React, { useEffect, useRef } from 'react';
import "./ProjectDetails1.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { FaNode } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { TbFileTypeJsx } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";




function ProjectDetails() {
	const nextRef = useRef(null);
	const prevRef = useRef(null);

	useEffect(() => {

		const carousel = (function () {
			var carr = document.querySelector('.carrousel');
			var circles = document.querySelectorAll('.circles .circle');
			var circlesLength = circles.length;
			var currentCircle = circles[0];
			var counter = 0;
			var items = document.querySelectorAll('.carrousel div.slide');
			var itemsLength = items.length;
			var current = items[0];
			var myVar;

			function slide(direction) {
				current.classList.remove('current');
				currentCircle.classList.remove('active');
				counter = counter + direction;

				if (direction === -1 && counter < 0) {
					counter = itemsLength - 1;
				}

				if (direction === 1 && !items[counter]) {
					counter = 0;
				}

				current = items[counter];
				currentCircle = circles[counter];
				current.classList.add('current');
				currentCircle.classList.add('active');
				console.log("Slide Called!")
			}

			nextRef.current.addEventListener('click', function () {
				slide(1);
			});

			prevRef.current.addEventListener('click', function () {
				slide(-1);
			});

			function sliding() {
				myVar = setInterval(function () {
					slide(1);
				}, 5000);
			};
			sliding();

			carr.addEventListener('mouseover', function () {
				clearInterval(myVar);
			});

			carr.addEventListener('mouseleave', function () {
				console.log("moseleaved!")
				sliding();
			});

		})();
	}, []);



	return (

		<div className='projectContainer1'>

			<section className="carrousel">
				<button ref={prevRef} className="prev"><FaArrowLeft /></button>

				<div className="current slide"><img src="./GMA1.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA2.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA3.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA4.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA5.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA6.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA7.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA8.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA9.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA10.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA11.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA12.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA13.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA14.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA15.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA16.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA17.png" alt="Jeu" /></div>
				<div className="slide"><img src="./GMA18.png" alt="Jeu" /></div>
				<button ref={nextRef} className="next"><FaArrowRight /></button>

				<div className="controls">
				</div>
			</section>





			<div className='projectDetails'>
				<div className='projectDetailsContent'>
					<h1>Page Données Personnelles</h1>
					<h2>Déscriptif</h2>
					<p>Pour ce projet, ma mission était de développer à la fois le front-end et le back-end de la page "Données Personnelles", un élément crucial pour toute plateforme de commerce électronique.  Cette page contient des informations sensibles et spécifiques relatives à l'utilisateur, telles que les Informations d'Identification (nom, prénom, numéro de téléphone, date de naissance), les Informations Personnelles (adresse postale), et la Sécurité et la Gestion de Compte (e-mail et mot de passe).</p>
					<p>En fournissant des options de gestion complètes, elle permet aisément à l'utilisateur d'ajouter, consulter, modifier ou supprimer ses informations selon ses besoins.</p>
					<h2>Contexte</h2>
					<p>Dans le cadre de mon stage chez GMA International, réalisé à la fin de ma formation DWWM.</p>
				</div>

				<div className='progLanguages'>
					<h2>Langages et outils</h2>
					<div className='toolsSvg'>
					    <FaReact className='svg'/>
						<IoLogoJavascript className='svg' />
						<FaNode className='svg' />
						<SiMysql className='svg' />
						<TbFileTypeJsx className='svg'/>
						<IoLogoCss3 className='svg' />
						<BsBootstrapFill className='svg' />
					</div>
				</div>

			</div>

			<div className="circles">
				<div className="circle active"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
				<div className="circle"></div>
			</div>





		</div>
	)
}

export default ProjectDetails;