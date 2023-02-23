import { useState } from 'react';
import ArticleItem from "./ArticleItem";

const Articles = () => {
  const [articles, setArticles] = useState([ title, description, content, category]);
}

function AddArticle() {
    const [ formData, setFormData ] = useState({
        title: '',
        description: '',
        content: '',
        category: 'Fitness'
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Preia valorile din formular
        const { title, description, content, category } = event.target.elements;
        const newFormData = {
            title: title.value,
            description: description.value,
            content: content.value,
            category: category.value
        };
        setFormData(newFormData);
    };

    return (
        <div>
        <form onSubmit={ handleFormSubmit } action="create-a-post" method="post">
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
    );
}

export default AddArticle;
