import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Stack from "../pages/Stack/Stack";
import Error404 from "../pages/Error404/Error404";
import LayoutDefault from "../layouts/Default/Default";
import LayoutBlank from "../layouts/Blank/Blank";
import LayoutUnGrid from "../layouts/UnGrid/UnGrid";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<LayoutUnGrid />}>
          <Route path='stacks' element={<Stack/>} />
        </Route>

        <Route element={<LayoutBlank />}>
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;