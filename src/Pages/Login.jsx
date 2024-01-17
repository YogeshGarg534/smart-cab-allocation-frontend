import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from 'axios';

const Login = (props) => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  // console.log("props is", props);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // await delay(500);
    console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    axios.post(`${process.env.REACT_APP_API}/user/loginuser`,{
        username:inputUsername,
        password:inputPassword
    }).then((res) => {
      console.log("data is", res.data.userId)
      localStorage.setItem("userId", res.data.userId);
       window.location.href = "/dashboard"
        // history.push('/dashboard');
    }).catch(err => {
        console.log(err);
        setShow(true);

    })
    setLoading(false);
  };

  return (
    <div
      className="sign-in__wrapper"
    >
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="h4 mb-2 text-center">Sign In</div>
        {/* ALert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Incorrect username or password.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>User</Form.Label>
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
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit" onClick={handleSubmit}> 
            Log In
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Logging In...
          </Button>
        )}
        <div className="d-grid justify-content-end">
          <a
            className="text-muted px-0"
            href='/register'
          >
            Register User!
          </a>
        </div>
      </Form>
    </div>
  );
};

export default (Login);
