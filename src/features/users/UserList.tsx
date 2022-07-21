import { useSnapshot } from "valtio";
import { userStore } from "../../store";
import UserItem from "./UserItem";

const UserList = () => {
  const { users } = useSnapshot(userStore);

  return (
    <div>
      <h1>USERS LIST</h1>
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </div>
  );
};

export default UserList;
