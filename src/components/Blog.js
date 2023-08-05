import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/api/blog_posts')
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Blog posts:', error);
      });
  }, []);

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800">Blog</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
