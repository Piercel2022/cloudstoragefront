import React, { useState } from 'react';


const Blog = () => {
  const [blogPosts] = useState([]);

  

  return (
    <div className="d-flex  max-w-4xl px-4 py-8 mx-auto">
      <h1 className="text-5xl border-4 border-blue-900/100  font-bold pt-6 mt-6 text-center text-gray-800">Blog</h1>
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
