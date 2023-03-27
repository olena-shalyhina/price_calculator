import { React } from 'react';
import Form from 'react-bootstrap/form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedOptions } from '../store/optionsSlice';

const ProvidersListComponent = ({ providers }) => {
  const dispatch = useDispatch();

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

  let selectedOptions = useSelector((state) => state.options.selectedOptions);
  if (!Object.keys(selectedOptions).length) {
    selectedOptions = getInitialFormData();
  }
  console.log(selectedOptions);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    dispatch(
      setSelectedOptions({
        ...selectedOptions,
        [name]: value,
      })
    );
    console.log(selectedOptions);
  };

  return (
    <>
      {providers?.map((provider) =>
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
                  checked={selectedOptions[provider.name] === option}
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
