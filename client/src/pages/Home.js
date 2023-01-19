import React from 'react';
import { Card, Button } from 'react-bootstrap';
import logo from '../assets/images/icon.png';

// Homepage
const Home = () => {
  return (
    <Card
      className='position-absolute top-50 start-50 translate-middle'
      bg={'custom-color-700-lght'}
    >
      <Card.Body>
        <img src={logo} alt="Focused Logo" style={{ width: '200px', height: '200px', marginBottom: '10px' }} />
        <Card.Title>FOCUSED</Card.Title>
        <Button href="/login" variant="outline-secondary">
          LOGIN
        </Button>
        <Button href="/signup" variant="outline-secondary">
          SIGN UP
        </Button>
      </Card.Body>
    </Card>
  )
};

export default Home;
