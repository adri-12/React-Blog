import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import '../styles/blog-details.scss';


const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();
  const handleCLick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  const [likes, setLikes] = useState(0);
  const handleLikes = () => {
    const updatedBlog = { ...blog, likes: likes + 1};
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog)
    })
    .then((response) => response.json())
    .then((data) => {
      setLikes(data.likes);
    })
};

  return (
    <div className="blog-details">
      {isPending && <div className="loader">Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.content}</div>
          <span>Category: {blog.category}</span>
          <button className="btn-submit" onClick={handleCLick}>
            <span>Delete Post</span>
            <i></i>
          </button>
          <button className="btn-submit" onClick={handleLikes}>
            <span>Like</span>
            <i></i>
      </button>
      <span>{ likes }</span>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
