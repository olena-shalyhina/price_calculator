import {
  React,
  // useEffect,
  useState,
} from 'react';
import Form from 'react-bootstrap/form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProvidersListComponent = ({ providers }) => {
  const getInitialFormData = () => {
    return providers
      .filter((provider) => Object.keys(provider.priceStorage).length > 1)
      .reduce(
        (acc, provider) => ({
          ...acc,
          [provider.name]: Object.keys(provider.priceStorage)[0],
        }),
        {}
      );
  };
  const [formData, setFormData] = useState(getInitialFormData());

  console.log(formData, '1');

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      {providers.map((provider) =>
        Object.keys(provider.priceStorage).length <= 1 ? (
          <Row className="provider h-15  mb-3 mt-3" key={provider.id}>
            <Col sm={9}>
              <p className="h5">{provider.name}</p>
            </Col>
            <Col sm={3}>
              {/* <img
                // src="#"
                // src="../favicon.ico"
                alt=""
              ></img> */}
            </Col>
          </Row>
        ) : (
          <Row className="provider  h-15 mb-3" key={provider.id}>
            <Col sm={9}>
              <p className="h5">{provider.name}</p>
            </Col>
            <Col sm={3}>
              <img src="#" alt=""></img>
            </Col>
            <Form>
              {Object.keys(provider.priceStorage).map((option, index) => (
                <Form.Check
                  key={index}
                  inline
                  label={option}
                  name={provider.name}
                  type="radio"
                  value={option}
                  checked={formData[provider.name] === option}
                  onChange={handleOnChange}
                />
              ))}
            </Form>
          </Row>
        )
      )}
    </>
  );
};

export default ProvidersListComponent;
