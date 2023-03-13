const providers = [
  {
    name: 'backblaze',
    minPayment: 7,
    priceStorage: 0.005,
    priceTransfer: 0.01,
    id: 1,
  },
  {
    name: 'bunny',
    maxPayment: 10,
    priceStorage: {
      hdd: 0.01,
      ssd: 0.02,
    },
    priceTransfer: 0.01,
    id: 2,
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
    id: 3,
  },
  {
    name: 'vultr',
    minPayment: 5,
    priceStorage: 0.01,
    priceTransfer: 0.01,
    id: 4,
  },
];

export const getProviders =
  async () => {
    return new Promise((resolve) =>
      resolve(providers)
    );
  };
console.log(providers);
