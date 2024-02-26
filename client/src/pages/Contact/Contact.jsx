import React, { useState } from 'react';
import './Contact.css';
import confitis from "../../components/confitis";
import emailjs from 'emailjs-com';
import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";



const Contact = () => {


  // const [buttonClicked, setButtonClicked] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
   

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pmkyhoi', 'template_v73k1xn', e.target, 'VrlLLWa_n6uFKsZXd')
      .then((result) => {
        console.log('E-mail envoyé avec succès :', result.text);
        setEmailSent(true);
       
      })
      .catch((error) => {
        console.error('Erreur lors de lenvoi de le-mail :', error);
      });


  };

  return (
    <section className='contact'>

      <h1>Contact <span>Me</span></h1>

      <div className='conteneur'>

        <div className='left'>

          <h2> Besoin d'une information ? </h2>

          <div className='contactMe'>

            <p> N'hésitez pas à me contacter !
              Je suis ouverte à toutes propositions.</p>

            <div className='mail'>

              <MdEmail className='contactMeSvg' />

              <div className='text'>
                <h3>Envoyez moi un email</h3>
                <p> liza.bahloul@gmail.com</p>
              </div>
            </div>

            <div className='phone'>

              <FaPhoneSquareAlt className='contactMeSvg' />

              <div className='text'>

                <h3>Appellez moi </h3>
                <p>07.77.93.05.39</p>

              </div>
            </div>

            <div className='form'>
              <FaArrowAltCircleDown className='contactMeSvg' />

              <div className='text'>

                <h3> Formulaire de contact </h3>

              </div>
            </div>


          </div>


        </div>




        <form className='right' onSubmit={sendEmail}>
          <div className='input'>
            <input type='text' name='nom' placeholder='Votre Nom' required />
            <input type='text' name='prenom' placeholder='Votre Prénom' required />
            <input id='subject' type='text' name='sujet' placeholder='Sujet de contact' required />
          </div>
          <textarea name='message' rows={10} placeholder='Votre Message...' required></textarea>
          <div className='submit'>
          {emailSent &&   <confitis/> && <h4>Merci pour votre message ! Je vous répondrai dès que possible.</h4>}
            <button
              type='submit'
              style={{ backgroundColor: emailSent ? '#DAC0A3' : 'initial', color: 'white' }}
            >
             Envoyer
            </button>
            
          </div>
        </form>


      </div>





    </section>
  )
}

export default Contact





