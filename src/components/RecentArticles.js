import { useState } from "react";

const RecentArticles = ({blogs, title}) => {

    const sortedBlogs = blogs.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    const recentBlogs = sortedBlogs.slice(0, 5);

    return ( 
        <div className="layout">
      <h1 className="blog-title">{title}</h1>
      <span></span>
      {blogs.map((blog) => (
        <div
          className="blog-preview"
          key={blog.id}
          onClick={() => handleClick(blog.id)}
        >
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className="article-date">Date: {blog.date} </div>
        </div>
      ))}
        </div>
     );
}
 
export default RecentArticles;