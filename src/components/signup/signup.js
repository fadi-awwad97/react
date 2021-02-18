import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./signup.css";

export default function Login() {
  const [organization, setOrganization] = useState("");
  const [admin, setAdmin] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && organization.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    //send the data throuh axios
  }

  return (
    <div className="Signup">
      <Form onSubmit={handleSubmit} >
        <Form.Group size="lg" controlId="email">
          <Form.Label className="formlable">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            size="lg"
            className="inputbut"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           </Form.Group>

          <Form.Group>
          <Form.Label className="formlable">Organization Name</Form.Label>
         <Form.Control
          type="text"
          size="lg"
          className="inputbut"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}  />
          </Form.Group>

          <Form.Group>
          <Form.Label className="formlable">Set Admin Name</Form.Label>
         <Form.Control
          type="text"
          size="lg"
          className="inputbut"
          value={admin}
          onChange={(e) => setAdmin(e.target.value)}  />
          </Form.Group>
          <Form.Group>

          <Form.Group size="lg" controlId="password">
          <Form.Label className="formlable">Set Admin Password</Form.Label>
          <Form.Control
            type="password"
            size="lg"
            className="inputbut"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

              
          <Form.Label className="formlable">Address</Form.Label>
         <Form.Control
          type="text"
          size="lg"
          className="inputbut"
          placeholder="1234 Main St"
          value={address}
          onChange={(e) => setAddress(e.target.value)}  />
          </Form.Group>
          <Button className="signupButton" block size="lg" type="submit" disabled={!validateForm()}>
          ADD MY COMPANY
        </Button>

      </Form>

    </div>
  );
}

