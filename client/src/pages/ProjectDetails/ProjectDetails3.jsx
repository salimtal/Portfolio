
import React, { useEffect, useRef } from 'react';
import "./ProjectDetails3.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { TbFileTypeJsx } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import mysteryNumber from '../../Images/mysteryNumber.png';
import MN1 from '../../Images/MN1.png';
import MN2 from '../../Images/MN2.png';
import MN3 from '../../Images/MN3.png';
import MN4 from '../../Images/MN4.png';
import MN5 from '../../Images/MN5.png';





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

		<div className='projectContainer3'>

			<section className="carrousel">
				<div className='toto'>
					<div className='tata'><button ref={prevRef} className="prev"><FaArrowLeft /></button></div>


					<div className="current slide"><img src={mysteryNumber} alt="Jeu" /></div>
					<div className="slide"><img src={MN1} alt="Jeu" /></div>
					<div className="slide"><img src={MN2} alt="Jeu" /></div>
					<div className="slide"><img src={MN3} alt="Jeu" /></div>
					<div className="slide"><img src={MN4} alt="Jeu" /></div>
					<div className="slide"><img src={MN5} alt="Jeu" /></div>

					<div className='titi'>	<button ref={nextRef} className="next"><FaArrowRight /></button></div>

				</div>

				<div className="circles">
					<div className="circle active"></div>
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>

				</div>
			</section>





			<div className='projectDetails'>
				<div className='projectDetailsContent'>
					<h1>Mystery Number</h1>
					<h2>Déscriptif</h2>
					<p>Mystery Number est un jeu simple qui consiste à deviner un nombre mystère en seulement trois tentatives.</p>
					<p>Le joueur a la possibilité de choisir le niveau de jeu : le niveau 1 où il doit deviner un nombre entre 1 et 10, le niveau 2 où il doit deviner un nombre entre 1 et 50, ou le niveau 3 où il doit deviner un nombre entre 1 et 100 pour complexifier l'énigme.</p>
					<h2>Contexte</h2>
					<p>Un projet d'entraînement personnel.</p>
				</div>

				<div className='progLanguages'>
					<h2>Langages et outils</h2>
					<div className='toolsSvg'>
						<FaReact className='svg' />
						<IoLogoJavascript className='svg' />
						<TbFileTypeJsx className='svg' />
						<IoLogoCss3 className='svg' />
					</div>
				</div>

			</div>







		</div>
	)
}

export default ProjectDetails;