import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <main>
        <div className='errorPage'>
          <p>Error</p>
          <p>404</p>
          <Link className='errorBtn' to='/'>
            <button>Retour à l'accueil !</button>
            <span className='spanLight'></span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Error404;
