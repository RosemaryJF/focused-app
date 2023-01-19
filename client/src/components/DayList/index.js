import { useQuery } from '@apollo/client';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
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
      <h3>UPCOMING FOCUS DAYS</h3>
      {days &&
        days.map((day) => (
          <div key={day._id} className="">
            <div className=" bg-transparent" bg="custom-color-800-lght">
              <p>{day.dayDate}</p>
              <p>{day.climbs}</p>
              <p>{day.crags}</p>
              <p>{day.focus}</p>
              <p>{day.attempts}</p>
              <p>{day.rests}</p>
              <p>{day.beta}</p>
              <p>{day.notes}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DayList;