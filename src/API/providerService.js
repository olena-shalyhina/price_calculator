const providers = [
  {
    name: 'Nimbus Vault',
    mark: 'NV',
    palette: ['#70d6c4', '#229c93', '#157a74'],
    minPayment: 7,
    priceStorage: 0.005,
    priceTransfer: 0.01,
    id: 1,
  },
  {
    name: 'Polarbyte',
    mark: 'PB',
    palette: ['#a5d873', '#5da457', '#3f7d44'],
    maxPayment: 10,
    priceStorage: {
      hdd: 0.01,
      ssd: 0.02,
    },
    priceTransfer: 0.01,
    id: 2,
  },
  {
    name: 'AstraStore',
    mark: 'AS',
    palette: ['#f4ad8d', '#d96f69', '#b54e53'],
    priceStorage: {
      multi: 0.06,
      single: 0.03,
    },
    priceTransfer: 0.02,
    withoutPayment: 75,
    id: 3,
  },
  {
    name: 'Skyforge',
    mark: 'SF',
    palette: ['#f3db72', '#d1a943', '#aa7e24'],
    minPayment: 5,
    priceStorage: 0.01,
    priceTransfer: 0.01,
    id: 4,
  },
];

export const getProviders = async () => {
  return new Promise((resolve) => resolve(providers));
};
