import { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:3000/article');
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

function Posts() {
    return (
      <div>
        {posts.map(post =>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <span>{post.category}</span>
            </div>
            )}
      </div>
    );
  }
}
  export default Posts;