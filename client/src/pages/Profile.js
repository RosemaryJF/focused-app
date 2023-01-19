import React from 'react';
// import { useEffect, useState } from "react";
import { Navigate } from "react-router"
import Auth from '../utils/auth';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ClimbMenu from '../components/ClimbMenu';
import DayList from '../components/DayList';
import Nav from '../components/Nav';

// Renders the users profile
const Profile = () => {
  if (!Auth.loggedIn) {
    <Navigate replace to="/"></Navigate>
  } else {
    return (
      <Container fluid id="profile" className="m-0 p-0">
        <Nav />
        <Container className="px-5" style={{ marginTop: "50px", paddingTop: "50px", paddingBottom: "100px" }} >
          <Row className="text-justify">
            <Col className="col-md-6 p-4 text-profile">
              <p>Welcome back!</p>
              <p>
                <li>Click the '+' icon to add a day.</li>
                <li>Or view the days you've already created.</li>
                <ClimbMenu />
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  };
};

export default Profile;