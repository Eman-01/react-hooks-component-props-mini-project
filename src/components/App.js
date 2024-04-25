import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <>
    <Header name={blogData.name}/>
    <About about={blogData.about}/>
    <ArticleList />
    <Article />
    </>
  );
}

export default App;
