import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../styles/RangeComponent.css';

const RangeComponent = () => {
  const rangemin = 0;
  const rangemax = 1000;
  const [
    storageValue,
    setStorageValue,
  ] = useState(100);
  const [
    transferValue,
    setTransferValue,
  ] = useState(400);

  const firstProwiderTotal = () => {
    let firstTotal =
      storageValue * 0.005 +
      transferValue * 0.01;
    if (firstTotal > 7) {
      return firstTotal;
    } else return (firstTotal = 7);
  };
  console.log(firstProwiderTotal());

  return (
    <div className="range_wrapper">
      <div className="storage_range">
        <Form.Label>
          {`Storage: ${storageValue} GB`}
        </Form.Label>
        <Form.Range
          min={rangemin}
          max={rangemax}
          id="storage_range"
          value={storageValue}
          onChange={(event) => {
            setStorageValue(
              event.target.value
            );
          }}
        />
      </div>
      <div className="transfer_range">
        <Form.Label>
          {`Transfer: ${transferValue}
          GB`}
        </Form.Label>
        <Form.Range
          min={rangemin}
          max={rangemax}
          id="transfer_range"
          value={transferValue}
          onChange={(event) => {
            setTransferValue(
              event.target.value
            );
          }}
        />
      </div>
    </div>
  );
};

export default RangeComponent;
