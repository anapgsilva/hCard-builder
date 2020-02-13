import React from 'react';
import './inputform.css';

const InputForm = (props) => {

  const handleInput = (event) => {
    props.saveInput(event);
  }

  return (
    <div className="inputs" >
      <label>{props.detail.toUpperCase()}</label>
      <input type="text" name={props.detail} onChange={handleInput}/>
    </div>
  );
}

export default InputForm;
