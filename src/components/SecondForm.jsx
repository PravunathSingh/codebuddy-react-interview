import { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import validator from 'validator';

const SecondForm = ({ nextStep, formChange, prevStep, values }) => {
  const [error, setError] = useState(false);
  const submitHandler = e => {
    e.preventDefault();
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.address) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card className="mt-5">
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>First Name*</Form.Label>
              <Form.Control
                type="text"
                minLength="2"
                maxLength="50"
                name="firstName"
                value={values.firstName}
                style={{ border: error ? '2px solid red' : '' }}
                onChange={formChange('firstName')}
              />

              {error ? (
                <Form.Text style={{ color: 'red' }}>
                  This is a required field and should only contain alphabets
                </Form.Text>
              ) : (
                ''
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                style={{ border: error ? '2px solid red' : '' }}
                onChange={formChange('lastName')}
              />

              {error ? (
                <Form.Text style={{ color: 'red' }}>Should only contain alphabets</Form.Text>
              ) : (
                ''
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address*</Form.Label>
              <Form.Control
                type="text"
                minLength="10"
                name="address"
                value={values.address}
                style={{ border: error ? '2px solid red' : '' }}
                onChange={formChange('address')}
              />

              {error ? (
                <Form.Text style={{ color: 'red' }}>This is a required field</Form.Text>
              ) : (
                ''
              )}
            </Form.Group>
            <div classNames="me-3">
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Save and Next
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SecondForm;
