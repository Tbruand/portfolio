import React from "react";

function About() {
  return (
    <>
      <main>
        <article>
          <h2>
            <span>Thomas</span>
            <span>Bruand</span>
          </h2>
          <p>
            En tant que développeur web passionné, j'utilise une variété de
            technologies modernes pour créer des sites web et applications
            performantes, esthétiques et fonctionnelles. Mes stacks principales
            inclut des langages de programmation tels que JavaScript, Python
            ainsi que des frameworks populaires comme React et Django. Découvrez
            dans la section Stacks, les stacks technologiques que j'utilise pour
            transformer des idées en réalités numériques.
          </p>
          <div className='cvDownload'>
            <span>CV</span>
            <a className='cvDownloadBtn' href="/path/to/cv.pdf" download>
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
