const providers = [
  {
    name: 'backblaze',
    minPayment: 7,
    priceStorage: 0.005,
    priceTransfer: 0.01,
  },
  {
    name: 'bunny',
    maxPayment: 10,
    priceStorage: {
      hdd: 0.01,
      ssd: 0.02,
    },
    priceTransfer: 0.01,
  },
  {
    name: 'scaleway',
    minPayment: 7,
    priceStorage: {
      multi: 0.06,
      singl: 0.03,
    },
    priceTransfer: 0.02,
    withoutPayment: 75,
  },
  {
    name: 'vultr',
    minPayment: 5,
    priceStorage: 0.01,
    priceTransfer: 0.01,
  },
];

const storageValue = 100;
const transferValue = 400;

const calculatesTheTotalCost = (
  providers,
  storageValue,
  transferValue
) => {
  let totalPrice = providers.map(
    (provider) =>
      Object.keys(provider.priceStorage)
        .length <= 1
        ? storageValue *
            provider.priceStorage +
          transferValue *
            provider.priceTransfer
        : storageValue *
            Object.values(
              provider.priceStorage
            )[0] +
          storageValue *
            Object.values(
              provider.priceStorage
            )[1] +
          transferValue *
            provider.priceTransfer
  );
  // console.log(totalPrice);
  return totalPrice;
};

const total = calculatesTheTotalCost(
  providers,
  storageValue,
  transferValue
);

console.log(total);
