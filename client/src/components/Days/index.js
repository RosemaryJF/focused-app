import React, { useState } from 'react';
import DayForm from '../DayForm';
import { Link } from "react-router-dom";
import { ADD_DAY, UPDATE_DAY } from "../../utils/actions";

function Days(props) {
  return (
    <ul className="list-group">
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {props.days.map(day => (
        <li className="day-group-item" key={day._id}>
          {day.climb}
        </li>
      ))}
    </ul>
  );
}

export default Days;


// function Day(props) {
//   const [edit, setEdit] = useState({
//     id: null,
//     dayDate: '',
//     crag: '',
//     climb: '',
//     focus: '',
//     attempts: '',
//     rests: '',
//     beta: '',
//     notes: '',
//   });

//   console.log(props.day);

//   const submitUpdate = (value) => {
//     props.editDayItem(edit.id, value);
//     setEdit({
//       id: null,
//       dayDate: '',
//       crag: '',
//       climb: '',
//       focus: '',
//       attempts: '',
//       rests: '',
//       beta: '',
//       notes: '',
//     });
//   };

//   if (edit.id) {
//     return <DayForm edit={edit} onSubmit={submitUpdate} />;
//   }

//   return props.day.map((day, i) => (
//     <div
//       className={
//         day.isComplete
//           ? `day-row complete ${day.focus}`
//           : `day-row ${day.fpcus}`
//       }
//       key={i}
//     >
//       <div key={day.id} onClick={() => props.completeDay(day.id)}>
//         {day.text}
//       </div>
//       <div className="icons">
//         {console.log(day)}
//         <p onClick={() => setEdit({ id: day.id, climb: day.climb.name, focus: day.focus })}> ✏️</p>
//         <p onClick={() => props.deleteDay(day.id)}> 🗑️</p>
//       </div>
//     </div>
//   ));
// }

// export default Day;

