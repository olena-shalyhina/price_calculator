import React from 'react';
import Form from 'react-bootstrap/Form';
import '../styles/RangeComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStorageValue, setTransferValue } from '../store/rangeSlice';

const RangeComponent = () => {
  const dispatch = useDispatch();
  const storageValue = useSelector((state) => state.range.storageValue);
  const transferValue = useSelector((state) => state.range.transferValue);
  const rangemin = 0;
  const rangemax = 1000;

  return (
    <section className="usage_card" aria-labelledby="usage-title">
      <div className="usage_card_heading">
        <p className="eyebrow">Your usage</p>
        <h2 id="usage-title">Monthly consumption</h2>
      </div>
      <div className="range_wrapper">
        <div className="storage_range">
          <Form.Label htmlFor="storage_range" className="range_label">
            <span>Storage</span>
            <output>{storageValue} GB</output>
          </Form.Label>
          <Form.Range
            min={rangemin}
            max={rangemax}
            id="storage_range"
            value={storageValue}
            onChange={(event) => {
              dispatch(setStorageValue(event.target.value));
            }}
          />
        </div>
        <div className="transfer_range">
          <Form.Label htmlFor="transfer_range" className="range_label">
            <span>Transfer</span>
            <output>{transferValue} GB</output>
          </Form.Label>
          <Form.Range
            min={rangemin}
            max={rangemax}
            id="transfer_range"
            value={transferValue}
            onChange={(event) => {
              dispatch(setTransferValue(event.target.value));
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default RangeComponent;
