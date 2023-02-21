import React from "react";
import NewestArticles from "../components/NewestArticles";
import TrendingArticles from "../components/TrendingArticles";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
        <Navbar />
        <div className="page-layout">
            <NewestArticles />
            <TrendingArticles />
        </div>
        </>
    );
};


export default Home;