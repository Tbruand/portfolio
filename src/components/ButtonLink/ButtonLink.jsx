import React from "react";
import ButtonLinkItem from "../ButtonLinkItem/ButtonLinkItem";

function ButtonLink() {
  const buttonLinks = [
    {
      to: "about",
      className: "button first",
      label: "À propos",
    },
    {
      to: "stacks",
      className: "button second",
      label: "Stacks",
    },
    {
      to: "projects",
      className: "button third",
      label: "Projets",
    },
    {
      to: "contact",
      className: "button fourth",
      label: "Contact",
    },
  ];
  return (
    <>
      {buttonLinks.map((link, index) => (
        <ButtonLinkItem
          key={index}
          to={link.to}
          className={link.className}
          label={link.label}
        />
      ))}
    </>
  );
}

export default ButtonLink;
