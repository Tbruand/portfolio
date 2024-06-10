import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function MenuBurger() {
  const [animate, setAnimate] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleMenuClick = () => {
    setAnimate(!animate);
    setOverlayVisible(!overlayVisible);
  };
  const handleLinkClick = () => {
    setAnimate(false);
    setOverlayVisible(false);
  };
  const itemNav = [
    {
      title: "À propos",
      to: "about",
    },
    {
      title: "Stacks",
      to: "stacks",
    },
    {
      title: "Projets",
      to: "projects",
    },
    {
      title: "Contact",
      to: "contact",
    },
  ];

  return (
    <>
      <nav className='menu'>
        <div
          className={`menuBurger ${animate ? "animate" : ""}`}
          onClick={handleMenuClick}
        >
          <div className='bar'></div>
        </div>
        <div className={`overlay ${overlayVisible ? 'menuVisible' : ''}`}>
          <ul>
            {itemNav.map((item, index) => (
              <li key={index}>
                <Link className='navLi' to={item.to} onClick={handleLinkClick}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default MenuBurger;
