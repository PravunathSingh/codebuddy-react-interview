import { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

const ThirdForm = ({ formChange, prevStep, values }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const postData = async () => {
    const response = await fetch('https://codebuddy.review/submit', {
      method: 'POST',
      body: JSON.stringify(values),
    });

    const resData = await response.json();
    console.log(resData);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (validator.isEmpty(values.phoneNumber) || validator.isEmpty(values.countryCode)) {
      setError(true);
    } else {
      postData();
      navigate('/posts');
    }
  };

  return (
    <div>
      <Card className="mt-5">
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Country Code*</Form.Label>

              <Form.Select
                required
                name="countryCode"
                value={values.countryCode}
                onChange={formChange('countryCode')}
                style={{ border: error ? '2px solid red' : '' }}
              >
                <option>Choose Country Code</option>
                <option value="+91">(+91) India</option>
                <option value="+1">(+1) USA</option>
              </Form.Select>

              {error ? (
                <Form.Text style={{ color: 'red' }}>This is a required field</Form.Text>
              ) : (
                ''
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number*</Form.Label>
              <Form.Control
                type="text"
                minLength="10"
                name="phoneNumber"
                value={values.phoneNumber}
                style={{ border: error ? '2px solid red' : '' }}
                onChange={formChange('phoneNumber')}
                required
              />

              {error ? (
                <Form.Text style={{ color: 'red' }}>Should be at least 10 charcters long</Form.Text>
              ) : (
                ''
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Accept Terms and Conditions*" required />
            </Form.Group>
            <div classNames="me-3">
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit Form
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ThirdForm;
