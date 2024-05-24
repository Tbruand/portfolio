import React from "react";
import ButtonLinkItem from "../ButtonLinkItem/ButtonLinkItem";

function ButtonLink() {
  const buttonLinks = [
    {
      href: "https://dribbble.com/shots/23181733-Blurry-Glassmorphic-Modern-Landing-page",
      className: "button first",
      label: "À propos de moi",
    },
    {
      href: "https://youtu.be/1pW_sk-2y40",
      className: "button second",
      label: "Stacks",
    },
    {
      href: "https://x.com/juxtopposed",
      className: "button third",
      label: "Projets",
    },
    {
      href: "https://x.com/juxtopposed",
      className: "button fourth",
      label: "Contact",
    },
  ];
  return (
    <>
      {buttonLinks.map((link, index) => (
        <ButtonLinkItem
          key={index}
          href={link.href}
          className={link.className}
          label={link.label}
        />
      ))}
    </>
  );
}

export default ButtonLink;
