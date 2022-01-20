import React from "react";
import BlogPosts from "./components/BlogPosts/BlogPosts";
import BlogPostSingleFull from "./components/BlogPosts/BlogPostSingleFull/BlogPostSingleFull";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=":postId" element={<BlogPostSingleFull />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

{
  /* <BlogPosts></BlogPosts>
          <BlogPostSingleFull></BlogPostSingleFull> */
}
