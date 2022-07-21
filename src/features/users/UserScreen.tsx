import React, { useEffect } from "react";
import { UserManager } from "../../managers/UserManager";
import PostScreen from "../posts/PostScreen";
import UserList from "./UserList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserScreen = () => {
  const loadUser = async () => {
    await UserManager.getAll();
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <Row>
        <Col sm={4}>
          {" "}
          <UserList />
        </Col>
        <Col sm={8}>
          <PostScreen />
        </Col>
      </Row>
    </div>
  );
};

export default UserScreen;
