import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './addUser.css';

export default function AddUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    //send the data throuh axios
     console.log(position);
  }

  return (
    <div className="Signup">
      <h1 className="header">ADD NEW USER</h1>
      <Form onSubmit={handleSubmit} >
        <Form.Group size="lg" controlId="email">
          <Form.Label className="formlable">FirstName</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            size="lg"
            className="inputbut"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
           </Form.Group>

          <Form.Group>
          <Form.Label className="formlable">LastName</Form.Label>
         <Form.Control
          type="text"
          size="lg"
          className="inputbut"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}  />
          </Form.Group>

          <Form.Group>
          <Form.Label className="formlable">Position</Form.Label>
          <Form.Control className="selectInput" value={position} onChange={(e) => setPosition(e.target.value)} as="select" custom>
              <option>Employee</option>
              <option>Project Manager</option>

    </Form.Control>
  
          </Form.Group>

          <Form.Group>
          <Form.Label className="formlable">Username</Form.Label>
         <Form.Control
          type="text"
          size="lg"
          className="inputbut"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}  />
          </Form.Group>

          <Form.Group size="lg" controlId="password">
          <Form.Label className="formlable">Password</Form.Label>
          <Form.Control
            type="password"
            size="lg"
            className="inputbut"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="addUser" block size="lg" type="submit" disabled={!validateForm()}>
          ADD USer
        </Button>

      </Form>
     
    </div>
  );
}
