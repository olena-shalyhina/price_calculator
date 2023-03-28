const providers = [
  {
    name: 'backblaze',
    icon: 'https://cdn-icons-png.flaticon.com/512/4107/4107739.png',
    minPayment: 7,
    priceStorage: 0.005,
    priceTransfer: 0.01,
    id: 1,
  },
  {
    name: 'bunny',
    icon: 'https://cdn-icons-png.flaticon.com/512/862/862286.png',
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
    icon: 'https://cdn-icons-png.flaticon.com/512/3997/3997584.png',
    priceStorage: {
      multi: 0.06,
      single: 0.03,
    },
    priceTransfer: 0.02,
    withoutPayment: 75,
    id: 3,
  },
  {
    name: 'vultr',
    icon: 'https://cdn-icons-png.flaticon.com/512/5709/5709275.png',
    minPayment: 5,
    priceStorage: 0.01,
    priceTransfer: 0.01,
    id: 4,
  },
];

export const getProviders = async () => {
  return new Promise((resolve) => resolve(providers));
};
console.log(providers);
