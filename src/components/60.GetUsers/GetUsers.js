import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

export default function GetUsers({ users }) {
  return (
    <Container>
      <Table striped bordered hover variant="dark" className='mt3'>
        <thead>
          <tr>
            <th># ID</th>
            <th>Full Name</th>
            <th>Password</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.password}</td>
              <td>{user.userEmail}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
