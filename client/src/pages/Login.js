import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

import logo from '../assets/images/icon.png';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (event) {
      console.log(event);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="justify-content-evenly text-center" id="loginForm">
      <img src={logo} alt="Focused Logo" style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
      <h2>Login</h2>
      <Form className="container-sm" onSubmit={handleFormSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formLoginEmail">
          <Form.Label column sm={2}>Email address:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="youremail@gmail.com"
              name="email"
              id="email"
              onChange={handleChange} />
          </Col>
          <Form.Text className="text-muted justify-content-start">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formLoginPassword">
          <Form.Label column sm={2}>Password:</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="********"
              onChange={handleChange} />
          </Col>
        </Form.Group>

        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <Button variant="outline-secondary" type="submit">
          Login
        </Button>
      </Form>

      Don't have an account? <Link to="/signup"> Signup Here</Link>
    </div >
  );
}

export default Login;
