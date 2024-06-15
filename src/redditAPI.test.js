import { getSubredditPosts } from './redditAPI';

describe('Reddit API', () => {
  it('fetches subreddit posts', async () => {
    const posts = await getSubredditPosts('/r/popular');
    expect(posts).toHaveLength(25); // Assuming default Reddit response contains 25 posts
  });
});