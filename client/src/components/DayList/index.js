import React, { useState } from 'react';
// import DayForm from '../DayForm';
// import Day from '../Day';

// function DayList() {
//   const [days, setDays] = useState([]);

//   // Function to add a day
//   const addDay = (day) => {
//     console.log(
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

//   // Function to mark day as complete
//   const completeDay = (id) => {
//     // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
//     let updatedDays = days.map((day) => {
//       if (day.id === id) {
//         day.isComplete = !day.isComplete;
//       }
//       return day;
//     });

//     console.log(updatedDays);
//     setDays(updatedDays);
//   };

//   // Function to remove day and update state
//   const deleteDay = (id) => {
//     const updatedDays = [...days].filter((day) => day.id !== day);

//     setDays(updatedDays);
//   };

//   // Function to edit the bucket list item
//   const editDay = (dayId, newFocus) => {
//     // Make sure that the Focus isn't empty
//     if (!newFocus.text) {
//       return;
//     }

//     // We use the "prev" argument provided with the useState hook to map through our list of items
//     // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
//     setDays((prev) =>
//       prev.map((day) => (day.id === dayId ? newFocus : day))
//     );
//   };

//   return (
//     <div>
//       <h1>What days have you got?</h1>
//       <DayForm onSubmit={addDay} />
//       <Day
//         days={days}
//         completeDay={completeDay}
//         deleteDay={deleteDay}
//         editDay={editDay}
//       ></Day>
//     </div>
//   );
// }

// export default DayList;
