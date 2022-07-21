import api from "./JsonPlaceholder";
import { User } from "../models";

export class UserService {
  static getAll = async () => {
    const response = await api.get<User[]>("/users").catch(() => null);
    if (!response) return null;
    return response.data;
  };

  static getUserById = async (id: number) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  };
}
