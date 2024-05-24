import React from "react";

function ButtonLinkItem({ href, className, label }) {
  return (
    <>
      <a href={href} target='_blank' rel='noreferrer' className={className}>
        <button>{label}</button>
        <span className="spanLight"></span>
      </a>
    </>
  );
}

export default ButtonLinkItem;