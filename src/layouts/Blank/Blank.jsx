// layout pour la page Error404
import { Outlet } from "react-router-dom";
import TopRightSvg from "../../components/SvgBackground/TopRightSvg";
import BottomLeftSvg from "../../components/SvgBackground/BottomLeftSvg";
import GridSvg from "../../components/SvgBackground/GridSvg";

function Blank() {
  return (
    <>
      <Outlet />
      <GridSvg />
      <TopRightSvg />
      <BottomLeftSvg />
    </>
  );
}

export default Blank;
