import React from "react";

function About() {
  return (
    <>
      <main>
        <article className='about'>
          <h2>
            <span>À propos</span>
            <span>de moi</span>
          </h2>
          <div className='aboutContent'>
            <div>
              Hello ! Je m'appelle{" "}
              <span className='textColor'>Thomas Bruand</span>, je suis{" "}
              <span className='textColor'>développeur Web junior</span>.
            </div>
            <div>
              Auparavant, j'ai travaillé en tant que{" "}
              <span className='textColor'>technicien maintenance</span> dans le
              domaine de la <span className='textColor'>télécommunication</span>
              , ce qui m'a permis d'acquérir de très bonnes compétences telles
              que l'<span className='textColor'>organisation</span>, l'
              <span className='textColor'>écoute</span>, la
              <span className='textColor'> réactivité</span>.
            </div>
            <div>
              En 2023, j'ai suivi une formation sur{" "}
              <span className='textColor'>OpenClassrooms</span>, plateforme de
              formation en ligne, ce qui m'a permis d'apprendre différents{" "}
              <span className='textColor'>langages du web</span> et leur
              utilisation à travers différents cas pratiques.
            </div>
          </div>
          <div className='cvDownload'>
            <span className='textColor'>CV</span>
            <a className='cvDownloadBtn' href='/path/to/cv.pdf' download>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path
                  d='M11.292 16.706a1 1 0 0 0 1.416 0l3-3a1 1 0 0 0-1.414-1.414L13 13.586V4a1 1 0 0 0-2 0v9.586l-1.293-1.293a1 1 0 0 0-1.414 1.414zM17 19H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z'
                  fill='currentColor'
                />
              </svg>
            </a>
          </div>
        </article>
      </main>
    </>
  );
}

export default About;
