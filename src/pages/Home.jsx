import React from "react";
import { Link } from 'react-router-dom';
import NewestArticles from "../components/NewestArticles";
import TrendingArticles from "../components/TrendingArticles";
import Navbar from "../components/Navbar";
import '../styles/App.scss'

const Home = () => {
    return (
        <>
        <Navbar />
        <div className='App'>
        <NewestArticles />
        <div className='middle-section'>
          <h1>Get The Knowledge You Need</h1>
          <h2>Click Bellow To Get Started.</h2>
          <button><Link to="/Posts">YOUR JOURNEY STARTS HERE</Link></button>
        </div>
        <TrendingArticles />
        </div>
        </>
    );
};


export default Home;