import React from 'react';
import Button from '../components/Button';
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
        <p>Le désir d'enfant : <br />
          En effet, il arrive que médicalement, rien ne cloche et pourtant, bébé tarde à arriver.<br />
          Il se peut que l'intervention d'un ostéopathe qualifié vous aide dans l'accompagnement de ce projet bébé. Une approche simple, précise et adéquate (aucun acte interne ne sera pratiqué par votre ostéopathe), va permettre de s'assurer que votre corps fonctionne correctement pour permettre à la nature d'opérer (mécanique, hormonal, viscéral, etc.).<br />
          Le corps humain est une mécanique magique et capricieuse, c'est parfois "un petit rien" qui fait bloquer tout un système (ou apparaître une douleur, un symptôme), ici une fertilité amoindrie. Je me suis donc particulièrement intéressée à la prise en charge ostéopathique spécifique de la fertilité. </p>
          
          <p>La grossesse :<br />
          Ensuite, quand tout s'est bien passé, que bébé a fait son nid, on se revoit pour le suivi de votre grossesse ainsi que pour la préparation à votre accouchement. La nature est bien faite, mais il faut parfois un petit coup de main pour l'y aider. Ce sont de grands changements pour votre corps, il est parfois intéressant de bien l'accompagner.<br />
          Pensez également au bilan post-partum (pour maman) et du nouveau-né (dès la sortie de maternité) afin de bien commencer cette nouvelle partie de votre vie.</p>

          <p>De l'enfance au grand âge :<br />
          Chaque étape de la vie a son importance dans le suivi ostéopathique. <br />
          Bien que ce suivi ne soit pas toujours indispensable mais fortement recommandé, un suivi ostéopathique régulier dans les grandes étapes de votre vie vous permettra de soulager et prévenir vos douleurs, et de vous garder en bonne santé. <br />
          Pour vous et votre famille, du nourrisson à l'enfant puis l'adolescent, le sportif et la personne âgée, votre ostéopathe sera là pour vous accompagner.<br />
          Je suis également formée pour la vérification (prise de mesures) des déformations crâniennes (plagiocéphalie et brachycéphalie).<br />
          Et je suis actuellement en formation pour la vérification et la prise en charge des freins restrictifs buccaux. </p>
        {/* <Tags /> */}
        <Button classButton='rdv-doctolib' />
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
