import React from 'react';
import { Navigate } from "react-router"
import Auth from '../utils/auth';
import { Col, Container, Row } from 'react-bootstrap';

import DayForm from '../components/DayForm';
import Nav from '../components/Nav';

// Base add day page, where the form to add a day renders
const AddDay = () => {
  if (!Auth.loggedIn) {
    <Navigate replace to="/"></Navigate>
  } else {
    return (
      <Container fluid id="addDay" className="m-0 p-0">
        <Nav />
        <Container className="px-5" style={{ marginTop: "50px", paddingTop: "50px", paddingBottom: "100px" }} >
          <Row className="text-justify">
            <Col className="col-md-6 p-4 text-profile">
              <DayForm />
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
};

export default AddDay;