import { PostInfo } from '../PostInfo';

export const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <PostInfo key={post.id} posts={post} />
    ))}
  </>
);
