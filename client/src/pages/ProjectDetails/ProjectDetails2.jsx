
import React, { useEffect, useRef } from 'react';
import "./ProjectDetails2.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { FaNode } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";



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

		<div className='projectContainer2'>

			<section className="carrousel">
				<button ref={prevRef} className="prev"><FaArrowLeft /></button>

				<div className="current slide"><img src="./1.png" alt="Jeu" /></div>
				<div className="slide"><img src="./2.png" alt="Jeu" /></div>
				<div className="slide"><img src="./avatar.png" alt="Jeu" /></div>
				<div className="slide"><img src="./3.png" alt="Jeu" /></div>
				<div className="slide"><img src="./4.png" alt="Jeu" /></div>
				<div className="slide"><img src="./5.png" alt="Jeu" /></div>
				<div className="slide"><img src="./6.png" alt="Jeu" /></div>
				<div className="slide"><img src="./7.png" alt="Jeu" /></div>
				<div className="slide"><img src="./8.png" alt="Jeu" /></div>
				<div className="slide"><img src="./9.png" alt="Jeu" /></div>
				<div className="slide"><img src="./10.png" alt="Jeu" /></div>
				<div className="slide"><img src="./11.png" alt="Jeu" /></div>
				<div className="slide"><img src="./12.png" alt="Jeu" /></div>
				<div className="slide"><img src="./13.png" alt="Jeu" /></div>
				<div className="slide"><img src="./14.png" alt="Jeu" /></div>
				<div className="slide"><img src="./15.png" alt="Jeu" /></div>
				<div className="slide"><img src="./16.png" alt="Jeu" /></div>
				<button ref={nextRef} className="next"><FaArrowRight /></button>

				<div className="controls">
				</div>
			</section>

			<div className='projectDetails'>
				<div className='projectDetailsContent'>
					<h1>Epic Rivals</h1>
					<h2>Déscriptif</h2>
					<p>Epic Rivals est un mini-jeu de combat au tour par tour opposant deux équipes (gauche et droite). </p>
					<p>Le joueur principal a la possibilité de créer deux équipes, chacune représentée par un avatar. Ensuite, il devra choisir une faction et lui attribuer ses unités pour démarrer la partie, le tout se déroulant dans une arène aléatoire.</p>
					<h2>Contexte</h2>
					<p> Conçu en collaboration avec un binôme lors d'une activité en formation. </p>
				</div>

				<div className='progLanguages'>
					<h2>Langages et outils</h2>
					<div className='toolsSvg'>
						<IoLogoJavascript className='svg' />
						<IoLogoHtml5 className='svg' />
						<IoLogoCss3 className='svg' />
						<BsBootstrapFill className='svg' />
						<FaNode className='svg' />
						<SiMysql className='svg' />
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
			</div>





		</div>
	)
}

export default ProjectDetails;