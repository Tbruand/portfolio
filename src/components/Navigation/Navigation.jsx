import React from "react";
import { Link } from "react-router-dom";
import ThemeMode from "../ThemeMode/ThemeMode";

function Navigation() {
  return (
    <>
      <nav>
        <Link className='siteName' to='/'>
              Thomas Bruand
            </Link>
        <ul>
          <li>
            <Link className='navLi' to='/about'>
              À propos
            </Link>
          </li>
          <li>
            <Link className='navLi' to='stacks'>
              Stacks
            </Link>
          </li>
          <li>
            {" "}
            <Link className='navLi' to='/projects'>
              Projets
            </Link>
          </li>
          <li>
            <Link className='navLi' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
        <ThemeMode />
      </nav>
    </>
  );
}

export default Navigation;
