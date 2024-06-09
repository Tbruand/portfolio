import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function MenuBurger() {
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
    <nav>
      <ul>
        {itemNav.map((item, index) => (
          <li key={index}>
            <Link className='navLi' to={item.to}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuBurger;
