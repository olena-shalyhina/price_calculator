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
  const normalizeValue = (value) =>
    Math.min(rangemax, Math.max(rangemin, Number(value) || 0));

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
            <span className="range_value_control">
              <Form.Control
                aria-label="Storage in gigabytes"
                max={rangemax}
                min={rangemin}
                type="number"
                value={storageValue}
                onChange={(event) => {
                  dispatch(setStorageValue(normalizeValue(event.target.value)));
                }}
              />
              <span>GB</span>
            </span>
          </Form.Label>
          <Form.Range
            min={rangemin}
            max={rangemax}
            id="storage_range"
            value={storageValue}
            onChange={(event) => {
              dispatch(setStorageValue(normalizeValue(event.target.value)));
            }}
          />
          <div className="range_scale" aria-hidden="true">
            <span>{rangemin} GB</span>
            <span>{rangemax} GB</span>
          </div>
        </div>
        <div className="transfer_range">
          <Form.Label htmlFor="transfer_range" className="range_label">
            <span>Transfer</span>
            <span className="range_value_control">
              <Form.Control
                aria-label="Transfer in gigabytes"
                max={rangemax}
                min={rangemin}
                type="number"
                value={transferValue}
                onChange={(event) => {
                  dispatch(setTransferValue(normalizeValue(event.target.value)));
                }}
              />
              <span>GB</span>
            </span>
          </Form.Label>
          <Form.Range
            min={rangemin}
            max={rangemax}
            id="transfer_range"
            value={transferValue}
            onChange={(event) => {
              dispatch(setTransferValue(normalizeValue(event.target.value)));
            }}
          />
          <div className="range_scale" aria-hidden="true">
            <span>{rangemin} GB</span>
            <span>{rangemax} GB</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RangeComponent;
