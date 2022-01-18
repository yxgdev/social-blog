import React from "react";
import BlogPosts from "./components/BlogPosts/BlogPosts";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Form></Form>
      <BlogPosts></BlogPosts>
    </>
  );
};

export default App;
