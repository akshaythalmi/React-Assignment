import { PostManager } from "../../managers/PostManager";
import { UserManager } from "../../managers/UserManager";
import { User } from "../../models";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import { userStore } from "../../store";
import { useSnapshot } from "valtio";

interface UserItemsProps {
  user: User;
}

const UserItem = ({ user }: UserItemsProps) => {
  const { selectedUser } = useSnapshot(userStore);
  const isSelectedUser = selectedUser?.id === user.id;
  const handleUser = async () => {
    await UserManager.getUserById(user.id);
    await PostManager.getAll(user);
  };

  return (
    <ListGroup as="ul">
      <ListGroup.Item
        action
        style={{ margin: 5 }}
        className={`list-group-item ${isSelectedUser ? "active" : ""}`}
        onClick={handleUser}
      >
        {user.name}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default UserItem;
