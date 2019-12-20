import React from 'react';
import Ripples from 'react-ripples';
import './Button.scss';

const Button = () => (
  <Ripples className="button-container">
    <button className="button" type="button">
      Proceed
    </button>
  </Ripples>
);

export default Button;
