import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav>
        <Link className='siteName' to="/">Thomas Bruand</Link>
        <Link className='menu' to="/about">À propos de moi</Link>
        <Link className='menu' to="stacks">Stacks</Link>
        <Link className='menu' to="/projects">Projets</Link>
        <Link className='menu' to="/contact">Contact</Link>
      </nav>
    </>
  );
}

export default Navigation;
