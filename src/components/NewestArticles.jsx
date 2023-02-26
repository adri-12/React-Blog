import ArticleItem from "./ArticleItem";
import '../styles/helper-classes.css';
import '../styles/card-layout.scss';

const NewestArticles = () => {
    return (
<div className="newest-articles article-components-container">
<h2>Newest Articles</h2>
<div className="items-container">
<ArticleItem />
<ArticleItem />
<ArticleItem />
<ArticleItem />
</div>
</div>
    );
};


export default NewestArticles;