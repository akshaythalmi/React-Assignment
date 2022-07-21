import { useSnapshot } from "valtio";
import { userStore } from "../../store";
import Card from "react-bootstrap/Card";

export default function UserDetail() {
  const { selectedUser } = useSnapshot(userStore);
  return (
    <>
      <Card style={{ width: "18rem" }} className="mb-2">
        <Card.Header>User Details</Card.Header>
        <Card.Body>
          {selectedUser ? (
            <>
              <Card.Text>Name: {selectedUser?.name}</Card.Text>
              <Card.Text>Email: {selectedUser?.email}</Card.Text>
            </>
          ) : (
            <p>Click user to see details</p>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
