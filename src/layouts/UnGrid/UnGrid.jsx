import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import TopRightSvg from "../../components/SvgBackground/TopRightSvg";
import BottomLeftSvg from "../../components/SvgBackground/BottomLeftSvg";

function UnGrid() {
  return (
    <>
      <Navigation />
      <Outlet />
      <TopRightSvg />
      <BottomLeftSvg />
    </>
  );
}

export default UnGrid;