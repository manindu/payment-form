import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({
  id,
  label,
  placeholder,
  onChange,
  onBlur,
  value,
  type,
  error,
  required
}) => {
  return (
    <div className="input-container">
      {label ? (
        <div className="label-container">
          <p className="input-label">{label}</p>
          {required && <span className="required">*</span>}
        </div>
      ) : (
        <div className="spacing" />
      )}
      <input
        id={id}
        className={`input ${!!error && 'input-error'}`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool
};

Input.defaultProps = {
  label: '',
  placeholder: 'John Doe',
  type: 'text',
  error: '',
  required: true
};

export default Input;
