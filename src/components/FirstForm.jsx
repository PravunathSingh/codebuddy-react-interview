import { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import validator from 'validator';

const FirstForm = ({ nextStep, formChange, values }) => {
  const [error, setError] = useState(false);
  const submitHandler = e => {
    e.preventDefault();
    if (
      validator.isStrongPassword(values.password, {
        minLength: 8,
        minLowercase: 2,
        minUppercase: 2,
        minNumbers: 2,
        minSymbols: 2,
      }) ||
      validator.isEmpty(values.emailId)
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="emailId"
                value={values.emailId}
                style={{ border: error ? '2px solid red' : '' }}
                onChange={formChange('emailId')}
              />

              {error ? (
                <Form.Text style={{ color: 'red' }}>
                  This is a required field and type Should be Email
                </Form.Text>
              ) : (
                ''
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                style={{ border: error ? '2px solid red' : '' }}
                onChange={formChange('password')}
              />

              {error ? (
                <Form.Text style={{ color: 'red' }}>
                  This is required. Must contain minimum 2 capital letters, 2 small letter, 2
                  numbers and 2 special characters.
                </Form.Text>
              ) : (
                ''
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Next
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FirstForm;
