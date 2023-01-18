// import React, { useEffect } from 'react';

// import { useFocusContext } from '../../utils/GlobalState';
// import { UPDATE_DAY } from '../../utils/actions';
// import { useQuery } from '@apollo/client';
// import { QUERY_DAYS } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import spinner from '../../assets/images/spinner.gif';

import React, { useState } from 'react';
import DayForm from '../DayForm';
import Days from '../Days';
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


// function DayList() {
//   const [days, setDays] = useState([]);

//   // Function to add a bucket list item
//   const addDay = (day) => {
//     console.log(
//       '🚀 ~ file: BucketList.js ~ line 10 ~ addBucketItem ~ item',
//       day
//     );
//     // Check to see if the item text is empty
//     if (!day.climb) {
//       return;
//     }

//     // Add the new bucket list item to the existing array of objects
//     const newDay = [day, ...days];
//     console.log(newDay);

//     // Call setBucket to update state with our new set of bucket list items
//     setDays(newDay);
//   };

//   // Function to mark bucket list item as complete
//   const completeDay = (id) => {
//     // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
//     let updatedDayList = days.map((day) => {
//       if (day._id === id) {
//         day.isComplete = !day.isComplete;
//       }
//       return day;
//     });

//     console.log(updatedDayList);
//     setDays(updatedDayList);
//   };

//   // Function to remove bucket list item and update state
//   const removeDay = (id) => {
//     const updatedDayList = [...days].filter((day) => day._id !== id);

//     setDays(updatedDayList);
//   };

//   // Function to edit the bucket list item
//   const editDay = (dayId, newClimb) => {
//     // Make sure that the value isn't empty
//     if (!newClimb.climb) {
//       return;
//     }

//     // We use the "prev" argument provided with the useState hook to map through our list of items
//     // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
//     setDays((prev) =>
//       prev.map((day) => (day._id === dayId ? newClimb : day))
//     );
//   };

//   return (
//     <div>

//       {/* <DayForm onSubmit={addDay} /> */}
//       <Days
//         days={days}
//         completeDay={completeDay}
//         removeDay={removeDay}
//         editDay={editDay}
//       ></Days>
//     </div>
//   );
// }

// export default DayList;



// function DayList() {
//   const [state, dispatch] = useFocusContext();

//   const { currentDay } = state;

//   const { loading, data } = useQuery(QUERY_DAYS);

//   useEffect(() => {
//     if (data) {
//       dispatch({
//         type: UPDATE_DAY,
//         days: data.days,
//       });
//       data.days.forEach((day) => {
//         idbPromise('days', 'put', day);
//       });
//     } else if (!loading) {
//       idbPromise('days', 'get').then((days) => {
//         dispatch({
//           type: UPDATE_DAY,
//           days: days,
//         });
//       });
//     }
//   }, [data, loading, dispatch]);

//   function filterDays() {
//     if (!currentDay) {
//       return state.days;
//     }

//     return state.days.filter(
//       (day) => day._id === currentDay
//     );
//   }

//   return (
//     <div className="my-2">
//       <h2>Your Days:</h2>
//       {state.days.length ? (
//         <div className="flex-row">
//           {filterDays().map((day) => (
//             <Day
//               key={day._id}
//               _id={day._id}
//               dayDate={day.dayDate}
//               climb={day.climb}
//               crag={day.crag}
//               focus={day.focus}
//               attempts={day.attempts}
//               rests={day.rests}
//               beta={day.beta}
//               notes={day.notes}
//             />
//           ))}
//         </div>
//       ) : (
//         <h3>You haven't added any days yet!</h3>
//       )}
//       {loading ? <img src={spinner} alt="loading" /> : null}
//     </div>
//   );
// }

// export default DayList;
