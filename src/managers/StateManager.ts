import { postStore, userStore } from "../store/index";
import { Post, User } from "../models";

export class StateManager {
  static setPostList = (postsList: Post[]) => {
    postStore.posts = postsList;
  };

  static setUsers = (users: User[]) => {
    userStore.users = users;
  };

  static setUserDetail = (userDetails: User) => {
    userStore.selectedUser = userDetails;
  };
}
