import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getProviders } from '../API/providerService.js';
import ChartComponent from './ChartComponent.jsx';
import ProvidersListComponent from './ProvidersListComponent.jsx';
import '../styles/SummaryChartComponent.css';

const SummaryChartComponent = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    const data = await getProviders();
    setProviders(data);
  };

  return (
    <Container fluid className='comparison_container mt-lg-4 mt-4 px-0'>
      <Row className='main align-items-end justify-content-center'>
        <Col md={4} sm={12}>
          {providers.length > 0 && (
            <ProvidersListComponent providers={providers} />
          )}
        </Col>
        <Col md={8} sm={12}>
          <ChartComponent providers={providers} />
        </Col>
      </Row>
    </Container>
  );
};
export default SummaryChartComponent;
