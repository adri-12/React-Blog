import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // eslint-disable-next-line
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div className="loader">Loading...</div> }
            {blogs && <BlogList blogs={blogs} title= "All Posts Are Here!" />}
        </div>
     );
}
 
export default Home;