import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './projectMgInterface.css';

export default function Login() {
  const [prjName, setPrjName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [addMember, setAddmember] = useState("");
  const [projectName, setProjectName] = useState("");
  const [task, setTask] = useState("");
 

  function validateForm() {
    return prjName.length > 0 && deadline.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    //send the data throuh axios
  }

  function handleSubmit1(event) {
    event.preventDefault();
    //send the data throuh axios
  }

  return (
    <div className="Signup1">
      <Form onSubmit={handleSubmit} >
        <Form.Group size="lg" controlId="email">
          <Form.Label className="formlable">Project Name</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            size="lg"
            className="inputbut1"
            value={prjName}
            onChange={(e) => setPrjName(e.target.value)}
          />
           </Form.Group>

          <Form.Group>
          <Form.Label className="formlable"> deadline </Form.Label>
         <Form.Control
          type="text"
          size="lg"
          className="inputbut1"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}  />
          </Form.Group>

          <Button className="signupButton1" block size="lg" type="submit" disabled={!validateForm()}>
          Create Project
        </Button>
      </Form>

       <div>
       <Form onSubmit={handleSubmit1} >
        <Form.Group size="lg" controlId="email">
          <Form.Label className="formlable">Add Member</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            size="lg"
            className="inputbut1"
            value={addMember}
            onChange={(e) => setAddmember(e.target.value)}
          />
           </Form.Group>

          <Form.Group>
          <Form.Label className="formlable"> Project Name </Form.Label>
         <Form.Control
          type="text"
          size="lg"
          className="inputbut1"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}  />
          </Form.Group>

          <Form.Group>
          <Form.Label className="formlable"> Task </Form.Label>
         <Form.Control
          type="text"
          size="lg"
          className="inputbut1"
          value={task}
          onChange={(e) => setTask(e.target.value)}  />
          </Form.Group>

          <Button className="signupButton1" block size="lg" type="submit" >
          GIVE TASK
        </Button>
      </Form>

       </div>
       <div className="happy">
           :)
       </div>
    </div>
  );
}
