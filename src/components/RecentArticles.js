import { useState } from "react";
import BlogList from "./BlogList";
import '../styles/recent-articles.scss';

const RecentArticles = ({ blogs }) => {
 const sortedBlogsDate = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (   
        <div className="recent-articles">
          <BlogList blogs={sortedBlogsDate} title="Recent Blogs" />
        </div>
 );
}
 
export default RecentArticles;
