import { useState, useEffect } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:3000/posts');
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
      <div className='article-list'>
        <h1>TEST</h1>
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

  export default Posts;