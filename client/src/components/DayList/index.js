import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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
            <Card bg="custom-color-700-lght" style={{ width: '100%' }}>
              <Row className="mx-auto text-center" bg="custom-color-700-lght">
                <Col><strong>Date:</strong>{day.dayDate}</Col>
                <Col><strong>Climb:</strong> {day.climbs}</Col>
                <Col><strong>Crag:</strong> {day.crags}</Col>
              </Row>
              <br />
              <Row className="text-center">
                <Col ><strong>Focus:</strong> {day.focus}</Col>
              </Row>
              <br />
              <Row className="text-center">
                <Col><strong>Attempts:</strong> {day.attempts}</Col>
                <Col><strong>Rests:</strong> {day.rests}</Col>
              </Row>
              <br />
              <Row className="text-center">
                <Col><strong>Beta:</strong> {day.beta}</Col>
              </Row>
              <br />
              <Row>
                <Col><strong>Notes:</strong> {day.notes}</Col>
              </Row>
              <br />
            </Card>
            <div></div>
          </Container>

        ))
      }
    </div >
  );
};

export default DayList;