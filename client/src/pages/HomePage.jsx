import React, { useState, useEffect } from 'react';
import { Post } from '../components';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const response = fetch('http://localhost:4000/post').then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map((post, i) => (
          <Post
            key={i}
            {...post}
          />
        ))}
    </>
  );
};

export default HomePage;
