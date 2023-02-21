import React from "react";
import NewestArticles from "../components/NewestArticles";
import TrendingArticles from "../components/TrendingArticles";

import '../styles/App.scss';
import '../styles/add-post.scss';


function Addpost() {
    return ( 
      <>
      <div className="page-layout">
      <NewestArticles />
      <div className="add-post"> 
     <h1>Write An Article</h1>
     <form action="create-a-post" method="post">
<ul>
  <li>
    <label htmlFor="title">Article Title:</label>
    <input type="text" id="title" name="article-title" />
  </li>
  <li>
    <label htmlFor="description">Description:</label>
    <input type="text" id="description" name="article-description" />
  </li>
  <li>
    <label htmlFor="article">The Article:</label>
    <textarea name="content" id="article-content" cols="30" rows="10" placeholder="Type here the content for your article..."></textarea>
  </li>
</ul>
     </form>
      </div>
      <TrendingArticles />
      </div>
      </>
    );
  }

  export default Addpost;