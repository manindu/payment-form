import React from 'react';
import valid from 'card-validator';
import PropTypes, { bool } from 'prop-types';
import { PulseLoader } from 'react-spinners';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'react-grid-system';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, CardInput, Button } from 'app/components';
import { submitPayment } from 'app/state/actions/paymentActions';
import './Payment.scss';

const Payment = ({ payment, submitPaymentDetails }) => {
  const onSubmit = values => {
    submitPaymentDetails({
      name: values.name,
      month: values.month,
      year: values.year,
      cardNumber: values.cardNumber,
      cvv: values.cvv
    });
  };

  if (payment.processing) {
    return (
      <div className="payment-page">
        <PulseLoader
          sizeUnit="px"
          size={20}
          color="#5c6bc0"
          loading={payment.processing}
        />
      </div>
    );
  }

  return (
    <Formik
      initialValues={{
        name: '',
        month: '',
        year: '',
        cvv: '',
        cardNumber: ''
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .matches(/^[a-zA-Z\s]*$/, {
            message: 'Name should include letters',
            excludeEmptyString: true
          })
          .strict(true)
          .required(),
        month: Yup.number()
          .integer()
          .min(1)
          .max(12)
          .required(),
        year: Yup.number()
          .integer()
          .moreThan(new Date().getFullYear() - 1)
          .required(),
        cvv: Yup.number()
          .positive()
          .integer()
          .test(
            'len',
            'Must be 3 or 4 digits',
            val =>
              val &&
              (val.toString().length === 3 || val.toString().length === 4)
          )
          .required(),
        cardNumber: Yup.string()
          .test('test-number', 'Credit Card number is invalid', value => {
            const isValidNumber = valid.number(value).isValid;
            return isValidNumber;
          })
          .required()
      })}
      onSubmit={onSubmit}
      render={({
        handleChange,
        handleBlur,
        values,
        errors,
        handleSubmit,
        touched,
        isValid
      }) => (
        <div className="payment-page">
          <div className="form">
            <Container>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <Input
                    id="name"
                    label="Name on Card"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    error={
                      touched.name && errors.name && errors.name.toString()
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <CardInput
                    id="cardNumber"
                    label="Card Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cardNumber}
                    error={
                      touched.cardNumber &&
                      errors.cardNumber &&
                      errors.cardNumber.toString()
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4}>
                  <Input
                    id="month"
                    label="Expiry"
                    placeholder="10"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.month}
                    error={
                      touched.month && errors.month && errors.month.toString()
                    }
                  />
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                  <Input
                    id="year"
                    placeholder={(new Date().getFullYear() + 1).toString()}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.year}
                    error={
                      touched.year && errors.year && errors.year.toString()
                    }
                  />
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}>
                  <Input
                    id="cvv"
                    label="CVV"
                    placeholder="444"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cvv}
                    error={touched.cvv && errors.cvv && errors.cvv.toString()}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <div className="button-section">
                    <Button onClick={handleSubmit} disabled={!isValid} />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )}
    />
  );
};

Payment.propTypes = {
  submitPaymentDetails: PropTypes.func.isRequired,
  payment: PropTypes.shape({ processing: bool }).isRequired
};

const mapStateToProps = state => ({
  payment: state.payment
});

export default connect(mapStateToProps, {
  submitPaymentDetails: submitPayment
})(Payment);
