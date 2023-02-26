import { useState } from 'react';
import "../styles/App.scss";
import "../styles/add-post.scss";



const AddArticle = () => {

  // Title Handler
const [title, setTitle] = useState('');
const titleHandler = (e) => {
const inputTitle = e.target.value;
if (inputTitle.length <= 20) {
  setTitle(inputTitle);
}
};

// Description Handler
const [description, setDescription] = useState('');
const maxChars = 100;

const handleDescription= (e) => {
  const inputDescription = e.target.value;
  if (inputDescription.length <= maxChars) {
    setDescription(inputDescription);
  }
};

// Content Handler
const [content, setContent] = useState('');
const handleContent = (e) => {
  const inputContent = e.target.value;
  if (inputContent.length <= 1500) {
    setContent(inputContent);
  }
};

// Select Option
const categories = ['Fitness', 'Nutrition', 'Physiology', 'Other'];
const [select, setSelect] = useState(categories[0]);

const handleSelectChange = (e) => {
  setSelect(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Construct an article object
  const article = { title, description, content, categories };
  // Get the existing articles from localStorage or creat an empty array
  const articles = JSON.parse(localStorage.getItem('articles')) || [];
  // Add the new article to the articles array
  articles.push(article);
  //Save the articles array back to localStorage
  localStorage.setItem('articles', JSON.stringify(articles));
  // Redirect to the page where the articles are displayed
  window.location.href = '/Posts';
};

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
                    value={title}
                    onChange={titleHandler}
                    className="m-top-10"
                    type="text"
                    id="title"
                    name="article-title"
                  />
                </li>
                <li>
                 <label htmlFor="description">Description: <br />
                 Remaining chars: {maxChars - description.length}/{maxChars}
                 </label>
                 <textarea 
                    value={description}
                    onChange={handleDescription} 
                    name="description"
                    id="article-content"
                    className="m-top-10"
                    cols="30"
                    rows="10"
                    placeholder="Type here the content for your article...">
                  </textarea>
                 {/* Test the max characters
                  <p>Remaining chars: {maxChars - description.length}/{maxChars}</p> */}
                </li>
                <li>
                  <label htmlFor="article">The Article:</label>
                  <textarea
                    value={content}
                    onChange={handleContent}
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
                  <select onChange={handleSelectChange} value={select} name="categories" id="categories">
                 {categories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                 ))}
                  </select>
                </div>
              </ul>
              <button onClick={handleSubmit} type="submit" className="btn-submit m-top-20">
                Create Article
              </button>
            </form>


          </div>
        </div>
  );
  }


export default AddArticle;
