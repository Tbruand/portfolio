import React from "react";
import { Link } from "react-router-dom";

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
        <svg
          className='materialIcons'
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z' />
        </svg>
      </nav>
    </>
  );
}

export default Navigation;
