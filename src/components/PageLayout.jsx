import React from "react";
import '../styles/helper-classes.css';


const PageLayout = () => {
 return (
    <div className="page-layout">
        <div className="new-articles btm-border">
            <h2>Newest Articles</h2>
        </div>
        <div className="trending-articles btm-border">
            <h2>Trending Articles</h2>
        </div>
    </div>
     
 );
};

export default PageLayout;