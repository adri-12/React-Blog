import BlogList from "./BlogList";
import RecentArticles from "./RecentArticles";
import useFetch from "./useFetch";
import TrendingArticles from "./TrendingArticles";

const Home = () => {
    // eslint-disable-next-line
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="content">
            { error && <div>{ error }</div> }
            { isPending && <div className="loader">Loading...</div> }
            {blogs && <RecentArticles blogs={blogs} title="Trending Articles" />}
            {blogs && <BlogList blogs={blogs} title= "All Posts Are Here!" />}
            {blogs && <TrendingArticles blogs={blogs} title="Recent Articles" />}
        </div>
     );
}
 
export default Home;