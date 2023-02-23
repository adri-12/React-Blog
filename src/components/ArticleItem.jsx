



const ArticleItem = ({ title, description, content, category }) => {
    return (
        <div className="item">
        <h3>{ title }</h3>
            <p>{ content }</p>
            <span>{ description }</span>
                <span>{ category }</span>
        </div>
    );
};

export default ArticleItem;