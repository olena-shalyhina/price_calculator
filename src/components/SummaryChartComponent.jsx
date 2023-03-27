import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getProviders } from '../API/providerService.js';
import ChartComponent from './ChartComponent.jsx';
import ProvidersListComponent from './ProvidersListComponent.jsx';

const SummaryChartComponent = () => {
  const [providers, setProviders] = useState('');

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    const data = await getProviders();
    setProviders(data);
  };

  return (
    <Container className="mt-5">
      <Row className="h-75">
        <Col sm={5}>
          <Row className="provider h-15  mb-5">
            {providers ? <ProvidersListComponent providers={providers} /> : ''}
          </Row>
        </Col>
        <Col sm={7}>
          <ChartComponent providers={providers} />
        </Col>
      </Row>
    </Container>
  );
};
export default SummaryChartComponent;
