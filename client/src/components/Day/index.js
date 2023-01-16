// import React, { useState } from 'react';
// import DayForm from '../DayForm';
// import { Link } from "react-router-dom";
// import { ADD_DAY, UPDATE_DAY } from "../../utils/actions";



// function Day(props) {
//   const [edit, setEdit] = useState({
//     id: null,
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

