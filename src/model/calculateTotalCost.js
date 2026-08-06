const getStoragePrice = (provider, selectedOptions) => {
  if (typeof provider.priceStorage === 'number') {
    return provider.priceStorage;
  }

  const selectedOption =
    selectedOptions[provider.name] ?? Object.keys(provider.priceStorage)[0];
  return provider.priceStorage[selectedOption];
};

const calculateBasePrice = (
  provider,
  storageValue,
  transferValue,
  selectedOptions
) => {
  const freeAllowance = provider.withoutPayment ?? 0;
  return (
    (storageValue - freeAllowance) * getStoragePrice(provider, selectedOptions) +
    (transferValue - freeAllowance) * provider.priceTransfer
  );
};

export const calculateTotalCost = (
  providers,
  storageValue,
  transferValue,
  selectedOptions
) =>
  providers.map((provider) => {
    const basePrice = calculateBasePrice(
      provider,
      storageValue,
      transferValue,
      selectedOptions
    );
    const limitedPrice = provider.minPayment
      ? Math.max(basePrice, provider.minPayment)
      : provider.maxPayment
      ? Math.min(basePrice, provider.maxPayment)
      : basePrice;

    return Math.max(0, Number(limitedPrice.toFixed(2)));
  });
