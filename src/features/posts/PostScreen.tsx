import UserDetail from "../users/UserDetails";
import PostList from "./PostList";

const PostScreen = () => {
  return (
    <div>
      <h1>POSTS</h1>
      <UserDetail />
      <PostList />
    </div>
  );
};

export default PostScreen;
