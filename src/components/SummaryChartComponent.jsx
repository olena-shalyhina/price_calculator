import React, {
  useState,
  useEffect,
} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getProviders } from '../API/providerService.js';
import ChartComponent from './ChartComponent.jsx';

const SummaryChartComponent = () => {
  const [providers, setProviders] =
    useState('');

  // useEffect(() => {
  //   setProviders(
  //     getProviders().then((data) =>
  //       setProviders(data)
  //     )
  //   );
  // }, []);

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    const data = await getProviders();
    setProviders(data);
  };

  return providers ? (
    <>
      <Container className="mt-5">
        <Row className="h-75">
          <Col sm={5}>
            <Row className="provider h-15  mb-5">
              <Col sm={9}>
                <p className="h5">
                  {providers[0].name}
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
            <Row className="provider  h-15 mb-5">
              <Col sm={9}>
                <p className="h5">
                  {providers[1].name}
                </p>
              </Col>
              <Col sm={3}>
                <img
                  src="#"
                  alt=""
                ></img>
              </Col>
              <Form>
                <Form.Check
                  inline
                  // label="HDD"
                  label={
                    Object.keys(
                      providers[1]
                        .priceStorage
                    )[0]
                  }
                  name="group1"
                  type="radio"
                  id="hdd-radio"
                  defaultChecked
                />
                <Form.Check
                  inline
                  label={
                    Object.keys(
                      providers[1]
                        .priceStorage
                    )[1]
                  }
                  name="group1"
                  type="radio"
                  id="ssd-radio"
                />
              </Form>
            </Row>
            <Row className="provider  h-15  mb-5">
              <Col sm={9}>
                <p className="h5">
                  {providers[2].name}
                </p>
              </Col>
              <Col sm={3}>
                <img
                  src="#"
                  alt=""
                ></img>
              </Col>
              <Form>
                <Form.Check
                  inline
                  label={
                    Object.keys(
                      providers[2]
                        .priceStorage
                    )[0]
                  }
                  name="group2"
                  type="radio"
                  id="multi-radio"
                />
                <Form.Check
                  inline
                  label={
                    Object.keys(
                      providers[2]
                        .priceStorage
                    )[1]
                  }
                  name="group2"
                  type="radio"
                  id="single-radio"
                  defaultChecked
                />
              </Form>
            </Row>
            <Row className="provider  h-15 mb-5">
              <Col sm={9}>
                <p className="h5">
                  {providers[3].name}
                </p>
              </Col>
              <Col sm={3}>
                <img
                  src="#"
                  alt=""
                ></img>
              </Col>
            </Row>
          </Col>

          <Col sm={7}>
            <ChartComponent />
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    ''
  );
};

export default SummaryChartComponent;
