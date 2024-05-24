import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from '../../components/Navigation/Navigation';
import TopRightSvg from "../../components/SvgBackground/TopRightSvg";
import BottomLeftSvg from "../../components/SvgBackground/BottomLeftSvg";
import GridSvg from "../../components/SvgBackground/GridSvg";

function Default() {
  return (
    <>
      <Navigation />
      <Outlet />
      <GridSvg />
      <TopRightSvg />
      <BottomLeftSvg />
    </>
  );
}

export default Default;
