import { UserService } from "../services/UserService";
import { userStore } from "../store";
import { StateManager } from "./StateManager";

export class UserManager {
  static getAll = async () => {
    const users = await UserService.getAll();
    if (!users) return;
    userStore.users = users;
  };

  static getUserById = async (id: number) => {
    const response = await UserService.getUserById(id);
    StateManager.setUserDetail(response);
  };
}
