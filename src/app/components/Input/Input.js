import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ id, label, placeholder, onChange, onBlur, value, type }) => (
  <div className="input-container">
    <p className="input-label">{label}</p>
    <input
      id={id}
      className="input"
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      type={type}
    />
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  label: 'Input',
  placeholder: 'John Doe',
  type: 'text'
};

export default Input;
