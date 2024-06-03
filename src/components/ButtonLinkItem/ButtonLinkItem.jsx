import React from "react";
import { Link } from "react-router-dom";


function ButtonLinkItem({ to, className, label }) {
  return (
    <>
      <Link to ={to} className={className}>
        <button>{label}</button>
        <span className="spanLight"></span>
      </Link>
    </>
  );
}

export default ButtonLinkItem;