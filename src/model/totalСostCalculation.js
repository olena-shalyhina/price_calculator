const getThePriceStorageByOption = (provider, formData) => {
  let priceByOption = '';
  if (provider.name in formData) {
    priceByOption =
      provider.priceStorage[
        Object.keys(provider.priceStorage)
          .filter((key) => Object.values(formData).includes(key))
          .toString()
      ];
  }
  return priceByOption;
};

const calculatesTheBasePrice = (
  provider,
  storageValue,
  transferValue,
  formData
) => {
  const basePrice =
    (storageValue - (provider.withoutPayment ? provider.withoutPayment : 0)) *
      (Object.keys(provider.priceStorage).length <= 1
        ? provider.priceStorage
        : getThePriceStorageByOption(provider, formData)) +
    (transferValue - (provider.withoutPayment ? provider.withoutPayment : 0)) *
      provider.priceTransfer;

  return basePrice;
};

export const calculatesTheTotalCost = (
  providers,
  storageValue,
  transferValue,
  formData
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
                  formData
                ),
                provider.minPayment
              )
            : provider.maxPayment
            ? Math.min(
                calculatesTheBasePrice(
                  provider,
                  storageValue,
                  transferValue,
                  formData
                ),
                provider.maxPayment
              )
            : calculatesTheBasePrice(
                provider,
                storageValue,
                transferValue,
                formData
              )
        )
        .map((element) => (element < 0 ? 0 : element))
    : '';
  return totalPrice;
};
