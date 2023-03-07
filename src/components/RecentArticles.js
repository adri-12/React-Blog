import { useState } from "react";
import BlogList from "./BlogList";
import '../styles/recent-articles.scss';

const RecentArticles = ({blogs}) => {
  return (   
        <div className="recent-articles">
          <BlogList blogs={blogs} title="Recent Blogs" />
        </div>
 );
}
 
export default RecentArticles;
