import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
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
  const [liked, setLiked] = useState(false);

  const handleLikes = (event) => {
    event.preventDefault();
    const updatedBlog = { ...blog, likes: likes + 1 };
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog)
    })
    .then((response) => response.json())
    .then((data) => {
      if (data && data.likes !== undefined) {
      setLikes(data.likes);
      }
    })
    setLiked(!liked);
};



  return (
    <div className="blog-details">
      {isPending && <div className="loader">Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
         <div> 
          <p>{blog.content}</p> 
          </div>
          <span>Category: {blog.category}</span>
          <button className="btn-submit" onClick={handleCLick}>
            <span>Delete Post</span>
            <i></i>
          </button>
      <button className={`like-button ${liked ? 'clicked' : ''} `} onClick={handleLikes}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
  <span className="like-count">{likes}</span>
</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
