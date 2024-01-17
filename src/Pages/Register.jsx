import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");




  const handleSubmit = async (event) => {
    event.preventDefault();
    // await delay(500);
    console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    axios.post(`${process.env.REACT_APP_API}/user/registeruser`,{
        username:inputUsername,
        password:inputPassword
    }).then(() => {
      window.location.href = "/"
    }).catch(err => {
        console.log(err);

    })
  };

  return (
    <div
      className="sign-in__wrapper"
    >
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="h4 mb-2 text-center">Sign Up</div>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit" onClick={handleSubmit}> 
            Register
          </Button>
      </Form>
    </div>
  );
};

export default Register;
