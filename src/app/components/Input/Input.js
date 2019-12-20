import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ label, placeholder }) => (
  <div className="input-container">
    <p className="input-label">{label}</p>
    <input className="input" placeholder={placeholder} />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  label: 'Input',
  placeholder: 'John Doe'
};

export default Input;
