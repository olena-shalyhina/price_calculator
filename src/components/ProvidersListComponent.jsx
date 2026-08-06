import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotalCost } from '../model/calculateTotalCost';
import { setSelectedOptions } from '../store/optionsSlice';
import '../styles/ProvidersListComponent.css';

const ProvidersListComponent = ({ providers }) => {
  const dispatch = useDispatch();
  const selectedOptionsFromStore = useSelector(
    (state) => state.options.selectedOptions
  );
  const storageValue = useSelector((state) => state.range.storageValue);
  const transferValue = useSelector((state) => state.range.transferValue);

  const defaultOptions = providers
    .filter((provider) => typeof provider.priceStorage === 'object')
    .reduce(
      (options, provider) => ({
        ...options,
        [provider.name]: Object.keys(provider.priceStorage)[0],
      }),
      {}
    );
  const selectedOptions = { ...defaultOptions, ...selectedOptionsFromStore };
  const providerCosts = calculateTotalCost(
    providers,
    storageValue,
    transferValue,
    selectedOptions
  );

  const handleOnChange = (event) => {
    dispatch(
      setSelectedOptions({
        ...selectedOptions,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <section className="providers_section" aria-labelledby="providers-title">
      <div className="providers_heading">
        <p className="eyebrow">Compare providers</p>
        <h2 id="providers-title">Available plans</h2>
      </div>
      <div className="providers_list">
        {providers.map((provider, index) => {
          const hasOptions = typeof provider.priceStorage === 'object';
          const activeOption = selectedOptions[provider.name];

          return (
            <article
              className="provider_card"
              key={provider.id}
              style={{
                '--provider-light': provider.palette[0],
                '--provider-accent': provider.palette[1],
                '--provider-dark': provider.palette[2],
              }}
            >
              <div className="provider_card_top">
                <span className="provider_logo" aria-hidden="true">
                  {provider.mark}
                </span>
                <div className="provider_identity">
                  <h3>{provider.name}</h3>
                  <p>{hasOptions ? 'Choose storage type' : 'Single storage plan'}</p>
                </div>
                <output
                  className="provider_price"
                  aria-label={`${provider.name} monthly cost`}
                >
                  ${providerCosts[index].toFixed(2)}<span>/mo</span>
                </output>
              </div>
              {hasOptions && (
                <Form
                  className="provider_options"
                  aria-label={`${provider.name} storage type`}
                >
                  {Object.keys(provider.priceStorage).map((option) => (
                    <Form.Check
                      checked={activeOption === option}
                      id={`${provider.id}-${option}`}
                      key={option}
                      label={option.toUpperCase()}
                      name={provider.name}
                      type="radio"
                      value={option}
                      onChange={handleOnChange}
                    />
                  ))}
                </Form>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProvidersListComponent;
