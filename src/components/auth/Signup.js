import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Signup = () => {
 


    
  return (
    <>
    <div className="container mr-4 w-50  p-4 box mt-5 " >
        <h2 className="mb-3">Firebase Auth Signup</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="container  w-50 p-3 box gap-2 mt-2 ">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
