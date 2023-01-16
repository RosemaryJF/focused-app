import React from 'react';
import { Modal, Button } from "react-bootstrap";

// import Button from 'react-bootstrap/Button';
// // import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Option from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

// export default function DayFormModal(props) {
//   function climbDropdowns(climbs, crags) {
//     const mappedClimbs = climbs.map(climb => {
//       const selected = crags.find(crag => crag === climb._id) ? true : false;
//       return <option value={climb._id} selected={selected}>{climb.name}</option>;
//     });
//     return mappedClimbs;
//   }

//   return (

//     <Modal show={props.show} id="day">
//       <Modal.Dialog>
//         <Modal.Header closeButton onClick={props.close}>
//           <Modal.Title>
//             Create a New Day
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form {...props} autocomplete="off">
//             <div className="form-group">
//               <label htmlFor="title">Day</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="date"
//                 placeholder="Focus Date"
//                 value={props.dayDate}
//                 name="dayDate"
//                 onChange={props.handleInputChange}
//               />
//             </div>

//             <div class="form-group">
//               <label for="exampleFormControlSelect2">Guests</label>
//               <select multiple class="form-control" id="exampleFormControlSelect2" onChange={props.handleGuestsChange}>
//                 {climbDropdowns(props.climbs, props.crags)}
//               </select>
//             </div>


//             <div className="form-group">
//               <label htmlFor="location">Location</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="location"
//                 placeholder="Location"
//                 value={props.location}
//                 name="location"
//                 onChange={props.handleInputChange}
//               />
//               <p className="error">{props.errorLocation}</p>
//             </div>

//             <div className="form-group">
//               <label htmlFor="startDate">Start Date</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="start"
//                 value={props.start}
//                 name="start"
//                 onChange={props.handleInputChange}
//               />
//               <p className="error">{props.errorStart}</p>
//             </div>
//             <div className="form-group">
//               <label htmlFor="endDate">End Date</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 id="end"
//                 value={props.end}
//                 name="end"
//                 onChange={props.handleInputChange}
//               />
//               <p className="error">{props.errorEnd}</p>
//             </div>
//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <textarea
//                 className="form-control"
//                 id="description"
//                 rows="4"
//                 value={props.description}
//                 name="description"
//                 onChange={props.handleInputChange}
//               ></textarea>
//               <p className="error">{props.errorDescription}</p>
//             </div>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.close} variant="secondary">
//             Close
//           </Button>
//           <Button onClick={props.save} variant="primary" class="newEvent">
//             Save Trip
//           </Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//     </Modal>
//   );
// }

// function DayForm(props) {
//   const [crag, setCrag] = useState('');
//   const [climb, setClimb] = useState('');
//   let [focus, setFocus] = useState('');
//   const [attemptsInput, setattemptsInput] = useState('');
//   const [restInput, setrestInput] = useState('');
//   const [betaInput, setbetaInput] = useState('');
//   const [notesInput, setnotesInput] = useState('');

//   const focusChoice = [
//     'Onsight',
//     'Beta Puzzle',
//     'Flash',
//     'Red Point',
//     'Pink Point',
//     'Dogged',
//     'Top Rope',
//     'Winging It']

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!focus) {
//       focus = 'Winging It';
//     }

//     props.onSubmit({
//       id: Math.random(Math.floor() * 1000),
//       // dayDate: dayDate,
//       crag: crag,
//       climb: climb,
//       focus: focus,
//       attempts: attemptsInput,
//       rests: restInput,
//       beta: betaInput,
//       notes: notesInput
//     });

//     setCrag('');
//     setClimb('');
//     setFocus('');
//     setattemptsInput('');
//     setrestInput('');
//     setbetaInput('');
//     setnotesInput('');

//   };

//   const handleChange = (e) => {
//     setCrag(e.target.value)
//     setClimb(e.target.value)
//     setattemptsInput(e.target.value)
//     setrestInput(e.target.value)
//     setbetaInput(e.target.value)
//     setnotesInput(e.target.value)
//   };

//   // First we check to see if "edit" prop exists. If not, we render the normal form
//   // If the prop "edit" exists, we know to render the update form instead
//   return !props.edit ? (
//     <div className="justify-content-evenly text-center day-form" onSubmit={handleSubmit}>
//       <Form.Group as={Row} className="mb-3">
//         <Form.Control
//           type="text"
//           placeholder="Choose your crag"
//           value={crag}
//           name="text"
//           className="crag-input"
//           onChange={handleChange}
//         ></Form.Control>
//       </Form.Group>
//       <Form.Group as={Row} className="mb-3">
//         <Form.Control
//           type="text"
//           placeholder="Choose the climb"
//           value={climb}
//           name="text"
//           className="climb-input"
//           onChange={handleChange}
//         ></Form.Control>
//       </Form.Group>
//       <Form.Select className="focus-dropdown" aria-label='focus choice select'>
//         <Option>Choose your focus</Option>
//         <Option onClick={() => setFocus(focusChoice[0])}>Onsight</Option>
//         <Option onClick={() => setFocus(focusChoice[1])}>Beta Puzzle</Option>
//         <Option onClick={() => setFocus(focusChoice[2])}>Flash</Option>
//         <Option onClick={() => setFocus(focusChoice[3])}>Red Point</Option>
//         <Option onClick={() => setFocus(focusChoice[4])}>Pink Point</Option>
//         <Option onClick={() => setFocus(focusChoice[5])}>Dogged</Option>
//         <Option onClick={() => setFocus(focusChoice[6])}>Top Rope</Option>
//         <Option onClick={() => setFocus(focusChoice[7])}>Winging It</Option>
//       </Form.Select>
//       <Form.Group as={Row} className="mb-3">
//         <Form.Control
//           type="text"
//           placeholder="How many attempts did you have?"
//           value={attemptsInput}
//           name="text"
//           className="attempts-input"
//           onChange={handleChange}
//         ></Form.Control>
//       </Form.Group>
//       <Form.Group as={Row} className="mb-3">
//         <Form.Control
//           type="text"
//           placeholder="How many (if any) rests did you take between attempts?"
//           value={restInput}
//           name="text"
//           className="rest-input"
//           onChange={handleChange}
//         ></Form.Control>
//       </Form.Group>
//       <Form.Group as={Row} className="mb-3">
//         <Form.Control
//           type="text"
//           placeholder="What was your beta?"
//           value={betaInput}
//           name="text"
//           className="beta-input"
//           onChange={handleChange}
//         ></Form.Control>
//       </Form.Group>
//       <Form.Group as={Row} className="mb-3">
//         <Form.Control
//           type="text"
//           placeholder="Add any notes you want to jot down here"
//           value={notesInput}
//           name="text"
//           className="notes-input"
//           onChange={handleChange}
//         ></Form.Control>
//       </Form.Group>
//       <Button className="day-button" variant="outline-secondary" type="submit">
//         Add day
//       </Button>
//     </div >
//   ) : (
//     <div>
//       <Form className="justify-content-evenly text-center day-form" onSubmit={handleSubmit}>
//         <h3>Update day: {props.edit.value}</h3>
//         <Form.Group as={Row} className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder={props.edit.value}
//             value={crag}
//             name="text"
//             className="crag-input"
//             onChange={handleChange}
//           ></Form.Control>
//         </Form.Group>
//         <Form.Group as={Row} className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder={props.edit.value}
//             value={climb}
//             name="text"
//             className="climb-input"
//             onChange={handleChange}
//           ></Form.Control>
//         </Form.Group>
//         <Form.Select className="focus-dropdown" aria-label='focus choice select'>
//           <Option>Choose your focus</Option>
//           <Option onClick={() => setFocus(focusChoice[0])}>Onsight</Option>
//           <Option onClick={() => setFocus(focusChoice[1])}>Beta Puzzle</Option>
//           <Option onClick={() => setFocus(focusChoice[2])}>Flash</Option>
//           <Option onClick={() => setFocus(focusChoice[3])}>Red Point</Option>
//           <Option onClick={() => setFocus(focusChoice[4])}>Pink Point</Option>
//           <Option onClick={() => setFocus(focusChoice[5])}>Dogged</Option>
//           <Option onClick={() => setFocus(focusChoice[6])}>Top Rope</Option>
//           <Option onClick={() => setFocus(focusChoice[7])}>Winging It</Option>
//         </Form.Select>
//         <Form.Group as={Row} className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder={props.edit.value}
//             value={attemptsInput}
//             name="text"
//             className="attempts-input"
//             onChange={handleChange}
//           ></Form.Control>
//         </Form.Group>
//         <Form.Group as={Row} className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder={props.edit.value}
//             value={restInput}
//             name="text"
//             className="rest-input"
//             onChange={handleChange}
//           ></Form.Control>
//         </Form.Group>
//         <Form.Group as={Row} className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder={props.edit.value}
//             value={betaInput}
//             name="text"
//             className="beta-input"
//             onChange={handleChange}
//           ></Form.Control>
//         </Form.Group>
//         <Form.Group as={Row} className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder={props.edit.value}
//             name="text"
//             className="notes-input"
//             onChange={handleChange}
//           ></Form.Control>
//         </Form.Group >
//         <Button className="day-button" variant="outline-secondary" type="submit">
//           Update day
//         </Button>
//       </Form >
//     </div >
//   );
// }

// export default DayForm;
