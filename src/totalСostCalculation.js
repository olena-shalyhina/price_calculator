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
    priceStorage: {
      multi: 0.06,
      single: 0.03,
    },
    priceTransfer: 0.02,
    withoutPayment: 75,
  },
  {
    name: 'vultr',
    priceStorage: 0.01,
    minPayment: 5,
    priceTransfer: 0.01,
  },
];

const storageValue = 50;
const transferValue = 50;

let formData = {
  bunny: 'ssd',
  scaleway: 'single',
};

const calculatesThePriceStorage = (
  provider
) => {
  let priceByOption = '';
  if (provider.name in formData) {
    priceByOption =
      provider.priceStorage[
        Object.keys(
          provider.priceStorage
        )
          .filter((key) =>
            Object.values(
              formData
            ).includes(key)
          )
          .toString()
      ];
  }
  return priceByOption;
};
// const priceStorageByOpton =
//   calculatesThePriceStorage(
//     providers[1]
//   );
// console.log(priceStorageByOpton);

const calculatesTheTotalCost = (
  providers,
  storageValue,
  transferValue,
  formData
) => {
  let totalPrice = providers.map(
    (provider) =>
      (provider.minPayment
        ? Math.max(
            (storageValue -
              (provider.withoutPayment
                ? provider.withoutPayment
                : 0)) *
              (Object.keys(
                provider.priceStorage
              ).length <= 1
                ? provider.priceStorage
                : calculatesThePriceStorage(
                    provider,
                    formData
                  )) +
              (transferValue -
              provider.withoutPayment
                ? provider.withoutPayment
                : 0) *
                provider.priceTransfer,
            provider.minPayment
          )
        : 0) ||
      (provider.maxPayment
        ? Math.min(
            (storageValue -
            provider.withoutPayment
              ? provider.withoutPayment
              : 0) *
              (Object.keys(
                provider.priceStorage
              ).length <= 1
                ? provider.priceStorage
                : calculatesThePriceStorage(
                    provider,
                    formData
                  )) +
              (transferValue -
                (provider.withoutPayment
                  ? provider.withoutPayment
                  : 0)) *
                provider.priceTransfer,
            provider.maxPayment
          )
        : (storageValue -
            (provider.withoutPayment
              ? provider.withoutPayment
              : 0)) *
            (Object.keys(
              provider.priceStorage
            ).length <= 1
              ? provider.priceStorage
              : calculatesThePriceStorage(
                  provider,
                  formData
                )) +
          (transferValue -
            (provider.withoutPayment
              ? provider.withoutPayment
              : 0)) *
            provider.priceTransfer)
  );

  return totalPrice;
};

const chartData =
  calculatesTheTotalCost(
    providers,
    storageValue,
    transferValue,
    formData
  );

console.log(chartData);
