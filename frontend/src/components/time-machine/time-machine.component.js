import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDate, resetDate } from '../../redux/current-date/current-date.actions';
import './time-machine.styles.css';

export default function TimeMachine() {
  const [newDate, setNewDate] = useState(new Date());
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewDate(new Date(e.target.value));
  };

  const handleClick = (e) => {
    const { name } = e.target;
    if (name === 'change-date') {
      dispatch(setDate(newDate));
    }
    if (name === 'reset-date') {
      dispatch(resetDate());
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return null;
  };

  return (
    <section className="time-machine">
      <form onSubmit={handleSubmit}>
        <label htmlFor="choose-time">Time Machine</label>
        <input onChange={handleChange} type="date" id="choose-time" />
        <div className="time-machine-button-container">
          <button onClick={handleClick} name="change-date" type="button">Change Date</button>
          <button onClick={handleClick} name="reset-date" type="button">Reset Date</button>
        </div>
      </form>
    </section>
  );
}
