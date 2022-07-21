import { proxy } from "valtio";
import { User, Post } from "../models";

interface UserStoreType {
  users: User[];
  selectedUser?: User;
  loadingUserDetails: boolean;
}

export const userStore = proxy<UserStoreType>({
  users: [],
  selectedUser: undefined,
  loadingUserDetails: false,
});

interface PostStoreType {
  posts: Post[];
}

export const postStore = proxy<PostStoreType>({
  posts: [],
});
