import React from 'react';
import InputMask from 'react-input-mask';
import valid from 'card-validator';
import { getCardInputMask, getCardLogo } from 'app/helpers';
import PropTypes from 'prop-types';
import './CardInput.scss';

const CardInput = ({
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
  const numberValidation = valid.number(value);
  return (
    <div className="card-input-container">
      <div className="label-container">
        <p className="input-label">{label}</p>
        {required && <span className="required">*</span>}
      </div>
      <InputMask
        id={id}
        className={`input ${!!error && 'input-error'}`}
        title="text"
        mask={getCardInputMask(value)}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
      />
      {numberValidation.card && (
        <img
          className="card-image"
          alt="selected card"
          src={getCardLogo(numberValidation.card.type)}
        />
      )}
    </div>
  );
};

CardInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool
};

CardInput.defaultProps = {
  label: 'Input',
  placeholder: 'XXXX XXXX XXXX XXXX',
  type: 'text',
  error: '',
  required: true
};

export default CardInput;
