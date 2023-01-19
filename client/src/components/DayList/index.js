import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { QUERY_DAYS } from '../../utils/queries';

const DayList = ({
  days,
  daydate,
  showClimb = true,
  showFirstName = true,
}) => {
  // if (!days.length) {
  //   return (
  //     <div>
  //       <h3>No focus days yet.</h3>
  //       <p>Add a day here</p>
  //     </div>
  //   )
  // } else {
  return (
    <div>
      <h3 className='text-center'>UPCOMING FOCUS DAYS</h3>
      {days &&
        days.map((day) => (
          <Container key={day._id} className="mx-auto d-grid gap-4">
            <Row className="text-center" bg="custom-color-800-lght">
              <Col>Date: {day.dayDate}</Col>
              <Col>Climb: {day.climbs}</Col>
              <Col>Crag: {day.crags}</Col>
            </Row>
            <Row className="text-center">
              <Col >Focus: {day.focus}</Col>
            </Row>
            <Row className="text-center">
              <Col>Attempts: {day.attempts}</Col>
              <Col>Rests: {day.rests}</Col>
            </Row>
            <Row className="text-center">
              <Col>Beta: {day.beta}</Col>
              <Col>Notes: {day.notes}</Col>
            </Row>
          </Container>
        ))
      }
    </div >
  );
};

export default DayList;