import React from 'react';
import { Link } from "react-router-dom";

const DayList = ({ days }) => {
  if (!days.length) {
    return <h3>No Focus Days Yet</h3>;
  }
  else {
    return (
      <div>
        <div className="bg-dark">
          <h2 className="text-center fs-2">Upcoming Days</h2>
        </div>
        <div>
          {days &&
            days.map(days => (
              <div key={days.day._id} className="py-3">
                <h3><Link to={`/day/${days._id}`}>
                  {days.day}
                </Link></h3>
                <p className="fs-6"><strong>{days.dayDate}</strong></p>
                <div>
                  <p className="dayClimb">Climb: {days.day.climb}</p>
                  <p className="dayCrag">Crag: {days.day.crag}</p>
                  <p className="dayFocus">Focus: {days.day.focus}</p>
                  <p className="dayAttempts">Attempts: {days.day.attempts}</p>
                  <p className="dayRests">Rest: {days.day.rests}</p>
                  <p className="dayBeta">Beta: {days.day.beta}</p>
                  <p className="dayNotes">Notes: {days.day.notes}</p>
                  <p></p>
                  <div className="double-border"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };
};

export default DayList;