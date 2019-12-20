import React from 'react';
import PropTypes from 'prop-types';
import './CardInput.scss';

const CardInput = ({ label, placeholder }) => (
  <div className="card-input-container">
    <p className="input-label">{label}</p>
    <input className="input" title="text" placeholder={placeholder} />
  </div>
);

CardInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
};

CardInput.defaultProps = {
  label: 'Input',
  placeholder: 'XXXX XXXX XXXX XXXX'
};

export default CardInput;
