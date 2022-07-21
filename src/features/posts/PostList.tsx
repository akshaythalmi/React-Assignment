import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { PostManager } from "../../managers/PostManager";
import { postStore } from "../../store";
import PostItem from "./PostItem";

const PostList = () => {
  const { posts } = useSnapshot(postStore);

  const LoadPostList = async () => {
    PostManager.getAll();
  };

  useEffect(() => {
    LoadPostList();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <PostItem posts={post} />
      ))}
    </div>
  );
};

export default PostList;
