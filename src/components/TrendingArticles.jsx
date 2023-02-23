import ArticleItem from "./ArticleItem";
// TrendingArticles are style fara a fi importat vreun style,de ce?



const TrendingArticles = () => {
    return (
<div className="trending-articles article-components-container">
<h2>Trending Articles</h2>
<div className="items-container">
    <ArticleItem />
    <ArticleItem />
    <ArticleItem />
    <ArticleItem />
</div>
</div>
    )}

export default TrendingArticles;