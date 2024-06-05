import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDefault from "../layouts/Default/Default";
import LayoutBlank from "../layouts/Blank/Blank";
import Home from "../pages/Home/home";
import About from "../pages/About/About";
import Stack from "../pages/Stack/Stack";
import Contact from "../pages/Contact/Contact";
import Error404 from "../pages/Error404/Error404";
import Project from "../pages/Project/Project";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='stacks' element={<Stack />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Project />} />
        </Route>

        <Route element={<LayoutBlank />}>
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
