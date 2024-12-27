import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";

const obj = {
    "/": Home,
    "about": About,
    "blog": Blog
}

const Main = ({ page }) => {
    const Component = obj[page]
    return <Component />
}

export default Main;
