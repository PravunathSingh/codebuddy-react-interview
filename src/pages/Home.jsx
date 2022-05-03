import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FirstForm from '../components/FirstForm';
import SecondForm from '../components/SecondForm';
import ThirdForm from '../components/ThirdForm';

const Home = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const formChange = input => e => {
    // input value from the form
    const { value } = e.target;

    // updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value,
    }));
  };

  // eslint-disable-next-line default-case
  switch (step) {
    case 1:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <FirstForm nextStep={nextStep} formChange={formChange} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <SecondForm
                  nextStep={nextStep}
                  prevStep={prevStep}
                  formChange={formChange}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <ThirdForm
                  nextStep={nextStep}
                  prevStep={prevStep}
                  formChange={formChange}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    default:
      return <div className="App" />;
  }
};

export default Home;
