import React from 'react';
import Form from 'react-bootstrap/Form';
import '../styles/RangeComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStorageValue, setTransferValue } from '../store/rangeSlice';

const RangeComponent = () =>
  // {
  //   // storageValue,
  //   // setStorageValue,
  //   // transferValue,
  //   // setTransferValue,
  // }
  {
    const dispatch = useDispatch();
    const storageValue = useSelector((state) => state.range.storageValue);
    const transferValue = useSelector((state) => state.range.transferValue);
    const rangemin = 0;
    const rangemax = 1000;

    return (
      <div className="range_wrapper">
        <div className="storage_range">
          <Form.Label>{`Storage: ${storageValue} GB`}</Form.Label>
          <Form.Range
            min={rangemin}
            max={rangemax}
            id="storage_range"
            value={storageValue}
            onChange={(event) => {
              // setStorageValue(event.target.value);
              dispatch(setStorageValue(event.target.value));
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
              // setTransferValue(event.target.value);
              dispatch(setTransferValue(event.target.value));
            }}
          />
        </div>
      </div>
    );
  };

export default RangeComponent;
