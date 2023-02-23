import { useState, useEffect } from 'react';
import "../styles/App.scss";
import "../styles/add-post.scss";



const AddPost = () => {
  return (
        <div className="add-post">
          <h1>Write An Article</h1>
          <div className="form-container">
            <div className="logo-text">
              <img src="\logo512.png" alt="React" />
              <span>Get Inspired</span>
            </div>
            <form action="create-a-post" method="post">
              <ul>
                <li>
                  <label htmlFor="title">Article Title:</label>
                  <input
                    className="m-top-10"
                    type="text"
                    id="title"
                    name="article-title"
                  />
                </li>
                <li>
                  <label htmlFor="description">Description:</label>
                  <input
                    className="m-top-10"
                    type="text"
                    id="description"
                    name="article-description"
                  />
                </li>
                <li>
                  <label htmlFor="article">The Article:</label>
                  <textarea
                    name="content"
                    id="article-content"
                    className="m-top-10"
                    cols="30"
                    rows="10"
                    placeholder="Type here the content for your article..."
                  ></textarea>
                </li>
                <div className="select-category m-top-20">
                  <span>Select your article category: </span>
                  <select name="categories" id="categories">
                    <option>Fitness</option>
                    <option>Nutrition</option>
                    <option>Physiology</option>
                    <option>Other</option>
                  </select>
                </div>
              </ul>
              <button type="submit" className="btn-submit m-top-20">
                Create Article
              </button>
            </form>
          </div>
        </div>
  );
  }


export default AddPost;
