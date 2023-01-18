import React from 'react';
import { Navigate } from "react-router"
import Auth from '../utils/auth';
import { Col, Container, Row } from 'react-bootstrap';

import Nav from '../components/Nav';
import Days from '../components/Days';

const AllDaysDisplay = () => {
  if (!Auth.loggedIn) {
    <Navigate replace to="/"></Navigate>
  } else {
    return (
      <Container fluid id="all-days" className="m-0 p-0">
        <Nav />
        <Container className="px-5" style={{ marginTop: "50px", paddingTop: "50px", paddingBottom: "100px" }} >
          <Row className="text-justify">
            <Col className="col-md-6 p-4 text-profile">
              <Days />
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
};

export default AllDaysDisplay;