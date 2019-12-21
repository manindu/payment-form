import React from 'react';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';
import './Button.scss';

const Button = ({ onClick, disabled }) => (
  <Ripples during={1000} className="button-container">
    <button
      className={`button ${disabled && 'button-disabled'}`}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      Proceed
    </button>
  </Ripples>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false
};

export default Button;
