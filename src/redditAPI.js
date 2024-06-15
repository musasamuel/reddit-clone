// redditAPI.js

export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
  try {
    const response = await fetch(`${API_ROOT}/r/${subreddit}.json`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  } catch (error) {
    console.error('Error fetching subreddit posts:', error);
    throw error;
  }
};

export const getSubreddits = async () => {
  try {
    const response = await fetch(`${API_ROOT}/subreddits/popular.json`);
    const json = await response.json();
    return json.data.children.map((subreddit) => subreddit.data);
  } catch (error) {
    console.error('Error fetching subreddits:', error);
    throw error;
  }
};

export const getPostComments = async (permalink) => {
  try {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();
    return json[1].data.children.map((comment) => comment.data);
  } catch (error) {
    console.error('Error fetching post comments:', error);
    throw error;
  }
};

export const searchReddit = async (query) => {
  try {
    const response = await fetch(`${API_ROOT}/search.json?q=${query}`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  } catch (error) {
    console.error('Error searching Reddit:', error);
    throw error;
  }
};
