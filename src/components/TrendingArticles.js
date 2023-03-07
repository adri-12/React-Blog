import BlogList from "./BlogList";

const TrendingArticles = ({ blogs }) => {
    const sortedBlogsLikes = [...blogs].sort((a, b) => b.likes - a.likes);
    return ( 
        <div className="recent-articles m-right-20">
        <BlogList blogs={sortedBlogsLikes} title="Trending Blogs" />
      </div>
     );
}
 
export default TrendingArticles;