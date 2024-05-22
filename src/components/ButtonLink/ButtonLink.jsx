import React from "react";

function ButtonLink() {
  return (
    <>
      {/* first btn */}
      <a
        href='https://dribbble.com/shots/23181733-Blurry-Glassmorphic-Modern-Landing-page'
        target='_blank'
        rel='noreferrer'
        class='button first'
      >
        <button>À propos de moi</button>
        <span></span>
      </a>

      {/* second btn */}
      <a
        href='https://youtu.be/1pW_sk-2y40'
        target='_blank'
        rel='noreferrer'
        class='button second'
      >
        <button>Stacks</button>
        <span></span>
      </a>

      {/* third btn */}
      <a
        href='https://x.com/juxtopposed'
        target='_blank'
        rel='noreferrer'
        class='button third'
      >
        <button>Projets</button>
        <span></span>
      </a>

      {/* fourth btn */}
      <a
        href='https://x.com/juxtopposed'
        target='_blank'
        rel='noreferrer'
        class='button fourth'
      >
        <button>Contact</button>
        <span></span>
      </a>
    </>
  );
}

export default ButtonLink;
