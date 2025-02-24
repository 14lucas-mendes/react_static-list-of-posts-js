import { UserInfo } from '../UserInfo/UserInfo';

export const PostInfo = ({ post, users }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo user={users} />
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />

    <b data-cy="NoCommentsMessage">No comments yet</b>
  </div>
);
