import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [user, setUSer] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function validateForm() {
    return user.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    // auth la na3ref  wen nro7 
    history.push("/adminPg");
    
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="formGroup" size="lg" controlId="email">
          <Form.Label>User</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={user}
            onChange={(e) => setUSer(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Form.Group className="formGroup" size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Button className="formBut" block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}