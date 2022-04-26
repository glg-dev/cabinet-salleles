import React from 'react';
import Carousel from '../components/Carousel';
import Tags from '../components/Tags';

function Home() {
  return (
    <div className="home">
      <div className="presentation">
        <Carousel />
        <div className="presentation__text">
          <p>Bonjour et bienvenue.
            Je m'appelle Floriane, afin de me présenter un peu à vous, je vous laisse lire ces quelques lignes. <br />
            Depuis le début de ma pratique ostéopathique, j'ai un lien particulier avec les "tout-petits". Je me suis donc formée spécifiquement après l'obtention de mon diplôme d'ostéopathe (formation de 6 ans, d'une école agréée par le ministère de la Santé, niveau RNCP 1) dans la prise en charge spécifique de ces petits patients, et ce, à chaque étape de leur vie. <br />
            
            D'ailleurs, le saviez-vous ? <br />

            La prise en charge ostéopathique peut se faire dans le cadre des troubles de la fertilité masculin et féminin (comme il faut être 2 pour faire un bébé, le bilan ostéopathique se fera, de préférence, pour les 2 partenaires). <br />
          </p>
        </div>
      </div>
      <div className="article-card blue-container">
        <h2>Pourquoi venir consulter ?</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id exercitationem ex minima praesentium architecto voluptatibus sint nam sequi ipsa culpa, ea unde repellendus adipisci a saepe similique dignissimos aspernatur rerum quam velit, inventore nihil perferendis impedit! Illum accusamus est dicta.</p>
        <Tags />
        <button className='rdv-doctolib'><a href="https://www.doctolib.fr/osteopathe/salleles-d-aude/floriane-girollet" target="_blank" rel="noopener noreferrer">Prendre rendez-vous sur Doctolib</a></button>
      </div>
      <div className="article-card white-container">
        <h2>Quelques mots sur l'ostéopathie</h2>
        <p>
          L’ostéopathie, c’est l’art de diagnostiquer et de traiter, par les mains, les pertes de mobilité et de micromobilité des différentes structures de l’organisme (muscles, ligaments, fascia, articulations, organes, etc.), dans le but de restaurer l’équilibre du corps. <br />
          Le rôle de l’ostéopathe est de stimuler les facultés d’auto-guérison de votre corps et lui fournir les clés pour se déverrouiller. Il permet notamment de soulager les douleurs du squelette, les séquelles d'entorses, mais aussi le stress, les règles douloureuses ou encore certaines migraines, insomnies, infertilités ou névralgies, etc. Les champs d'actions peuvent être très nombreux.
        </p>
        <p>
        Mais l’ostéopathe n'effectue pas de traitement ne relevant pas de son champ de compétence, les manipulations ostéopathiques ne remplacent ni les médicaments (comme les antibiotiques) lorsqu'ils sont nécessaires, ni la chirurgie lorsqu'elle est indispensable.
        L'ostéopathie traite toutes les indications mécaniquement réversibles et relevant des compétences de votre ostéopathe, dans le cas contraire (maladies infectieuses, dégénératives, génétiques) l'ostéopathie ne sera plus curative, mais palliative et complémentaire de vos traitements, dans un souci de mieux-être et d’accompagnement.
        L'ostéopathie pourra être efficace si l’analyse est logique et la méthode adaptée.
        Le résultat n’est pas forcément optimal à la première consultation, il faut parfois plusieurs séances.
        </p>
        <p>
        L'ostéopathie, comme toute science, a ses limites.
        </p>
      </div>
    </div>
  );
}

export default Home;
