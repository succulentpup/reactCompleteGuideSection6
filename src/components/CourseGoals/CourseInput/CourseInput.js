import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.form`
//   margin: 0.5rem 0;
//
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => !props.valid && 'red'};
//   }
//
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => props.valid ? '#ccc' : 'lightsalmon'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background-color: transparent;
//   }
//
//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
//
//   .invalid input {
//     border-color: lightsalmon;
//     background-color: transparent;
//   }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [validInput, setValidInput] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) setValidInput(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(!enteredValue.trim()) {
      setValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!validInput && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
