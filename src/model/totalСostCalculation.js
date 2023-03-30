const getThePriceStorageByOption = (provider, selectedOptions) => {
  let priceByOption = '';
  if (provider.name in selectedOptions) {
    priceByOption =
      provider.priceStorage[
        Object.keys(provider.priceStorage)
          .filter((key) => Object.values(selectedOptions).includes(key))
          .toString()
      ];
  }
  return priceByOption;
};

const calculatesTheBasePrice = (
  provider,
  storageValue,
  transferValue,
  selectedOptions
) => {
  const basePrice =
    (storageValue - (provider.withoutPayment ? provider.withoutPayment : 0)) *
      (Object.keys(provider.priceStorage).length <= 1
        ? provider.priceStorage
        : getThePriceStorageByOption(provider, selectedOptions)) +
    (transferValue - (provider.withoutPayment ? provider.withoutPayment : 0)) *
      provider.priceTransfer;

  return basePrice;
};

export const calculatesTheTotalCost = (
  providers,
  storageValue,
  transferValue,
  selectedOptions
) => {
  let totalPrice = providers
    ? providers
        .map((provider) =>
          provider.minPayment
            ? Math.max(
                calculatesTheBasePrice(
                  provider,
                  storageValue,
                  transferValue,
                  selectedOptions
                ),
                provider.minPayment
              )
            : provider.maxPayment
            ? Math.min(
                calculatesTheBasePrice(
                  provider,
                  storageValue,
                  transferValue,
                  selectedOptions
                ),
                provider.maxPayment
              )
            : calculatesTheBasePrice(
                provider,
                storageValue,
                transferValue,
                selectedOptions
              )
        )
        .map((element) => (element < 0 ? 0 : +element.toFixed(2)))
    : '';
  return totalPrice;
};
