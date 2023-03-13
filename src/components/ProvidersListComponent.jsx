import {
  React,
  // useEffect,
  useState,
} from 'react';
import Form from 'react-bootstrap/form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProvidersListComponent = ({
  providers,
}) => {
  const [formData, setFormData] =
    useState({
      bunny: 'hdd',
      scaleway: 'multi',
    });

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log(formData);

  return (
    <>
      {providers.map((provider) =>
        Object.keys(
          provider.priceStorage
        ).length <= 1 ? (
          <Row
            className="provider h-15  mb-3 mt-3"
            key={provider.id}
          >
            <Col sm={9}>
              <p className="h5">
                {provider.name}
              </p>
            </Col>
            <Col sm={3}>
              <img
                src="#"
                // src="../favicon.ico"
                alt=""
              ></img>
            </Col>
          </Row>
        ) : (
          <Row
            className="provider  h-15 mb-3"
            key={provider.id}
          >
            <Col sm={9}>
              <p className="h5">
                {provider.name}
              </p>
            </Col>
            <Col sm={3}>
              <img src="#" alt=""></img>
            </Col>
            <Form>
              <Form.Check
                inline
                // label="HDD"
                label={
                  Object.keys(
                    provider.priceStorage
                  )[0]
                }
                name={provider.name}
                type="radio"
                value={
                  Object.keys(
                    provider.priceStorage
                  )[0]
                }
                defaultChecked={true}
                onChange={
                  handleOnChange
                }
              />
              <Form.Check
                inline
                label={
                  Object.keys(
                    provider.priceStorage
                  )[1]
                }
                name={provider.name}
                type="radio"
                value={
                  Object.keys(
                    provider.priceStorage
                  )[1]
                }
                onChange={
                  handleOnChange
                }
              />
            </Form>
          </Row>
        )
      )}
    </>
  );
};

export default ProvidersListComponent;
