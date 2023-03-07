import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
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
            <span>{ likes }</span>
            <i></i>
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
