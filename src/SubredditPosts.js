// SubredditPosts.js
import React, { useState, useEffect } from 'react';
import { getSubredditPosts } from './redditAPI';
import './Posts.css';
import { useParams } from 'react-router-dom';

export default function SubredditPosts() {
  const { subreddit } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const subredditPosts = await getSubredditPosts(`/r/${subreddit}`);
        setPosts(subredditPosts);
      } catch (error) {
        setError(error);
      }
    };

    fetchPosts();
  }, [subreddit]);

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      <ul className='posts'>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
