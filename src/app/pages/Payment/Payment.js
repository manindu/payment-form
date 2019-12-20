import React from 'react';
import { Col, Row, Container } from 'react-grid-system';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, CardInput, Button } from 'app/components';
import './Payment.scss';

const Payment = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: ''
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required()
      })}
      onSubmit={onSubmit}
      render={({
        handleChange,
        handleBlur,
        values
        // errors,
        // handleSubmit,
        // touched
      }) => (
        <div className="payment-page">
          <div className="form">
            <Container>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <Input
                    id="nameOnCard"
                    label="Name on Card"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <CardInput label="Card Number" />
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <Input label="Expiry Date" placeholder="10" />
                </Col>
                <Col sm={4}>
                  <Input placeholder="2019" />
                </Col>
                <Col sm={4}>
                  <Input label="CVV" placeholder="444" />
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={12} lg={12}>
                  <div className="button-section">
                    <Button />
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

export default Payment;
