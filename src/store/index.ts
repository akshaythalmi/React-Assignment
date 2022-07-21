import { proxy } from "valtio";
import { User, Post } from "../models";

interface UserStoreType {
  users: User[];
  selectedUser?: User;
}

export const userStore = proxy<UserStoreType>({
  users: [],
  selectedUser: undefined,
});

interface PostStoreType {
  posts: Post[];
}

export const postStore = proxy<PostStoreType>({
  posts: [],
});
