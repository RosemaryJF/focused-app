import { useQuery } from '@apollo/client';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { QUERY_DAYS } from '../../utils/queries';

const DayList = ({ days }) => {
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
          <div key={day._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {day.dayDate}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{day.climb}</p>
              <p>{day.crag}</p>
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