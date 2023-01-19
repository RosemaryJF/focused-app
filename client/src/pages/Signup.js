import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import logo from '../assets/images/icon.png';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  // Handles the signup form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = await mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Sign up form
  return (
    <div className="justify-content-evenly text-center" id="signupForm">
      <img src={logo} alt="Focused Logo" style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
      <h2>Signup</h2>
      <Form className="container-sm" onSubmit={handleFormSubmit}>
        <Form.Group as={Row} className="mb-3" id='formSignupEmail'>
          <Form.Label column sm={2}>
            First Name:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="First Name"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Last Name:</Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Email:</Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>Password:</Form.Label>
          <Col sm={10}>
            <Form.Control
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
        <Button variant="outline-secondary" type="submit">Submit</Button>
      </Form>
      Already have an account ? <Link to="/login">Login Here</Link>
    </div >
  );
}

export default Signup;
