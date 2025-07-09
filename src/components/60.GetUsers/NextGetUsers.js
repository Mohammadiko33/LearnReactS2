import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Container, Button, Modal, Form } from "react-bootstrap";

export default function GetUsers({ users, setUsers }) {
  const [isModalShowed, setIsModalShowed] = useState(false);
  const [isEditModalShowed, setIsEditModalShowed] = useState(false);
  const [selectedUserID, setSelectedUserID] = useState(null);
  const [editFullName, setEditFullName] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [rerend, setRerend] = useState(false);

  const complatedRemoveUser = async () => {
    if (selectedUserID) {
      await fetch(
        `https://itsmyiko-default-rtdb.firebaseio.com/users/${selectedUserID}.json`,
        {
          method: "DELETE",
        }
      );

      // به‌روزرسانی کاربران بعد از حذف
      const updatedUsers = users.filter((user) => user.id !== selectedUserID);
      setUsers(updatedUsers);

      // تنظیم مجدد و بستن مدال
      setSelectedUserID(null);
      setIsModalShowed(false);
    }
  };

  const removableHandler = (userID) => {
    setSelectedUserID(userID);
    setIsModalShowed(true);
  };

  const editbleHandler = (userID) => {
    setSelectedUserID(userID);
    setIsEditModalShowed(true);
  };

  const rerenderUsers = () => {
    setRerend(prevState => !prevState);
  };
  
  const complateEditing = async () => {
    console.log(selectedUserID);
    setSelectedUserID(null); // اینجا مقدار اولیه برگشت داده می‌شود
    setIsEditModalShowed(false);
  
    let EditnewUser = {
      userName: editFullName,
      password: editPassword,
      userEmail: editEmail,
    };
  
    await fetch(
      `https://itsmyiko-default-rtdb.firebaseio.com/users/${selectedUserID}.json`,
      {
        method: "PUT",
        body: JSON.stringify(EditnewUser),
      }
    ).then((res) => console.log(res));
  
    setEditFullName("");
    setEditPassword("");
    setEditEmail("");
  
    // دام رندر برای اپدیت کاربران
    setRerend(prevState => !prevState);
  };
     
  
  
  useEffect(() => {
    if (rerend) {
      // کد اپدیت شما
      setRerend(false); // تنظیم مجدد مقدار rerend برای جلو گیری از تکرار اپدیت
    } else {
      setRerend(true); // تنظیم مجدد مقدار rerend برای جلو گیری از تکرار اپدیت

    }
  }, [rerend]);

  return (
    <Container>
      <Table striped bordered hover variant="dark" className="mt3">
        <thead>
          <tr>
            <th># ID</th>
            <th>Full Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>Action User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.password}</td>
              <td>{user.userEmail}</td>
              <td>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#ff0000" }}
                  className="btn btn-danger"
                  onClick={() => removableHandler(user.id)}
                >
                  Remove
                </Button>
                <Button
                  style={{ marginLeft: "1rem" }}
                  variant="contained"
                  className="btn btn-primary"
                  onClick={() => editbleHandler(user.id)}
                >
                  edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        size="lg"
        show={isModalShowed}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={() => setIsModalShowed(false)}>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure you want to delete this user?</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-danger"
            onClick={() => setIsModalShowed(false)}
          >
            No, Close
          </Button>
          <Button className="btn btn-success" onClick={complatedRemoveUser}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={isEditModalShowed}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={() => setIsEditModalShowed(false)}>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              style={{ width: "96%" }}
            >
              <Form.Label style={{ color: "#fff" }}>
                Enter new Full Mame
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Full name"
                value={editFullName}
                onChange={(e) => setEditFullName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              style={{ width: "96%" }}
            >
              <Form.Label style={{ color: "#fff" }}>
                Enter new Password
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ width: "96%" }}
            >
              <Form.Label style={{ color: "#fff" }}>
                Enter new Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-danger"
            onClick={() => setIsEditModalShowed(false)}
          >
            Close
          </Button>
          <Button className="btn btn-success" onClick={complateEditing}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
