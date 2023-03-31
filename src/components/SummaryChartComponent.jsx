import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getProviders } from '../API/providerService.js';
import ChartComponent from './ChartComponent.jsx';
import ProvidersListComponent from './ProvidersListComponent.jsx';
import '../styles/SummaryChartComponent.css';

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
    <Container className="mt-2">
      <Row className="main h-100 align-items-center">
        <Col md={4} sm={12}>
          <Row className="mb-2">
            {providers ? <ProvidersListComponent providers={providers} /> : ''}
          </Row>
        </Col>
        <Col md={8} sm={12}>
          <ChartComponent providers={providers} />
        </Col>
      </Row>
    </Container>
  );
};
export default SummaryChartComponent;
