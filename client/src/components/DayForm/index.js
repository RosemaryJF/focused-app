import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_DAY } from '../../utils/mutations';
import { QUERY_DAYS } from '../../utils/queries';

// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Option from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

const DayForm = () => {
  const [formState, setFormState] = useState({
    id: null,
    dayDate: '',
    crag: '',
    climb: '',
    focus: '',
    attempts: '',
    rests: '',
    beta: '',
    notes: '',
  });
  const [addDay, { error }] = useMutation(ADD_DAY, {
    update(cache, { data: { addDay } }) {
      const { days } = cache.readQuery({ query: QUERY_DAYS });

      cache.writeQuery({
        query: QUERY_DAYS,
        data: { days: [addDay, ...days] }
      });
    }
  });

  // update state based on for input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await addDay({
        variables: { ...formState }
      });
      setFormState({
        id: null,
        dayDate: '',
        crag: '',
        climb: '',
        focus: '',
        attempts: '',
        rests: '',
        beta: '',
        notes: '',
      });
    } catch (e) {
      console.error(e);
    }
  }

  // Renders the form to add a new day 
  return (
    <div className="py-3">
      <h1>What's your focus going to be?</h1>
      <h3>Enter the information for your day below</h3>
      <form className='rounded' onSubmit={handleFormSubmit}>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            placeholder="Choose a date"
            name='dayDate'
            type='date'
            id='dayDate'
            value={formState.dayDate}
            onChange={handleChange}
          />
          <label htmlFor="dayDate">Choose a date to climb!</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Choose which crag you'll be going to"
            name="crag"
            id="crag"
            value={formState.crag}
            onChange={handleChange}
          >
          </textarea>
          <label htmlFor="crag">Choose which crag you'll be going to</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Pick what climb you're doing"
            name="climb"
            id="climb"
            value={formState.climb}
            onChange={handleChange}
          >
          </textarea>
          <label htmlFor="climb">Pick what climb you're doing</label>
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label=".form-select-1"
            name="focus"
            id="focus"
            onChange={handleChange}>
            <option defaultValue={[0]}>Choose your focus:</option>
            <option value="Onsight">Onsight</option>
            <option value="Beta Puzzle">Beta Puzzle</option>
            <option value="Flash">Flash</option>
            <option value="Top Rope">Top Rope</option>
            <option value="Red Point">Red Point</option>
            <option value="Pink Point">Pink Point</option>
            <option value="Winging It">Winging It</option>
          </select>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="How many attempts would you like to do"
            name="attempts"
            id="attempts"
            type="number"
            value={formState.attempts}
            onChange={handleChange}
          >
          </textarea>
          <label htmlFor="caseDescription">How many attempts would you like to do?</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="How many rests would you like to take"
            name="rests"
            id="rests"
            type="number"
            value={formState.rests}
            onChange={handleChange}
          >
          </textarea>
          <label htmlFor="caseDescription">How many rests would you like to take?</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Any beta you want to remember for next time?"
            name="beta"
            id="beta"
            value={formState.beta}
            onChange={handleChange}
          >
          </textarea>
          <label htmlFor="beta">Any beta you want to remember for next time?</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Any other notes you want to take?"
            name="notes"
            id="notes"
            value={formState.notes}
            onChange={handleChange}
          >
          </textarea>
          <label htmlFor="caseDescription">Any other notes you want to take?</label>
        </div>
        <div className="d-grid ga-2 d-md-flex justify-content-md-end py-2">
          <button className='btn btn-dark btn-primary px-4' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DayForm;