// Posts.js
import React, { useState, useEffect } from "react";
import { getSubredditPosts } from './redditAPI';
import './Posts.css';

export default function Posts(){
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
     try{
      const subreddit = 'popular'; // Remove the leading '/'
      const subredditPosts = await getSubredditPosts(subreddit);
      setPosts(subredditPosts);
    } catch (error) {
        setError(error.message);
    }
  };

    fetchPosts();
  }, []);

    return(
        <div>
         {error && <div>Error: {error}</div>}
         <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ul>
        </div>
    )
}
