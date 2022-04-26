import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Iframe from '../components/Iframe';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container address-container">
        <h1>Où trouver le cabinet</h1>
        <div className="address">
          <i className='fas fa-2x fa-map-marker-alt'></i>
          <p>
            1, rue Lucie Aubrac <br />
            11590 Sallèles d'Aude
          </p>
        </div>
        <Iframe source='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.532057776588!2d2.946130214607708!3d43.26122808570765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1af91af482151%3A0xf17d0975c5f35359!2sFloriane%20Girollet%20-%20OSTEOPATHE%20DO!5e0!3m2!1sfr!2sfr!4v1645910684996!5m2!1sfr!2sfr' />
      </div>
      <div className="container join-me">
        <h1>Mes coordonnées</h1>
        <ul>
          <li>
            <i className='fas fa-mobile-alt'></i>
            <div className="contact-text">
              <CopyToClipboard text='0642287903'>
                <span onClick={() => alert(`Le numéro de téléphone est copié dans le presse papier`)}>06 42 28 79 03 </span>
              </CopyToClipboard>
              <span> <em>(cliquez pour copier)</em></span>
            </div>
          </li>
          <li>
            <i className='far fa-envelope'></i>
            <div className="contact-text">
              <CopyToClipboard text='floriane.girollet@osteopathe-eso.fr'>
                <span onClick={() => alert(`L'adresse mail est copiée dans le presse papier`)}>floriane.girollet@osteopathe-eso.fr </span>
              </CopyToClipboard>
              <span> <em>(cliquez pour copier)</em></span>
            </div>
          </li>
        </ul>
        <a href="https://fr-fr.facebook.com/Osteo.Girollet.Floriane/" target="_blank" rel='noopener noreferrer'>
          <i className='fab fa-facebook'></i>
          <span>Retrouvez-moi sur Facebook</span>
        </a>
        <a href="https://www.doctolib.fr/osteopathe/salleles-d-aude/floriane-girollet" target="_blank" rel='noopener noreferrer'>
          <i className="fas fa-calendar-check"></i>
          <span>Prenez RDV sur Doctolib</span>
        </a>
        <a href="https://www.google.com/search?hl=fr-FR&gl=fr&q=Floriane+Girollet+-+OSTEOPATHE+DO,+1+Rue+Lucie+Aubrac,+11590+Sall%C3%A8les-d%27Aude&ludocid=17401074936666346329&lsig=AB86z5VyMBYRKopZkbavA9pOmRJ3&hl=fr&gl=FR#lrd=0x12b1af91af482151:0xf17d0975c5f35359,1" target="_blank" rel="noopener noreferrer">
          <i className='fab fa-google'></i>
          <span>Votre avis est important !</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;