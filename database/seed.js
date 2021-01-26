/* eslint-disable prefer-const */
const faker = require('faker');
const Homes = require('./index.js');

const getRandomBool = () => {
  let num = Math.round(Math.random());
  if (num === 0) {
    return false;
  }
  return true;
};

const getRandomNH = () => {
  let neighborhoods = ['Bayview', 'Hayes Valley', 'Sunset', 'Richmond', 'Civic Center', 'Ingleside', 'Russian Hill', 'Lower Haight', 'Castro', 'Duboce Triangle', 'Twin Peaks', 'Portrero Hill', 'Nob Hill', 'North Beach', 'SOMA'];
  let randomNum = Math.floor(Math.random() * neighborhoods.length);
  return neighborhoods[randomNum];
};

const getRandomImage = () => {
  let num = Math.floor(Math.random() * 50);
  return `https://hrsf132carouselimages.s3-us-west-1.amazonaws.com/${num}`;
};

const generatePrice = () => {
  let arr = faker.commerce.price().split('.');
  return `$${arr[0]},000`;
};

const generateTrend = () => {
  let trends = ['none', 'up', 'none', 'down', 'none', 'none', 'none'];
  let num = Math.round(Math.random() * trends.length);
  return trends[num];
};

const generateEntries = () => {
  // eslint-disable-next-line prefer-const
  let entries = [];
  for (let i = 0; i < 101; i += 1) {
    // eslint-disable-next-line prefer-const
    let obj = {
      address: faker.address.streetAddress(),
      neighborhood: getRandomNH(),
      city: faker.address.city(),
      state: faker.address.state(),
      imageUrl: getRandomImage(),
      price: generatePrice(),
      bedrooms: Math.floor(Math.random() * 10),
      bathrooms: Math.floor(Math.random() * 10),
      sqft: Math.floor(Math.random() * (10000 - 200 + 1) + 200),
      realtor: `${faker.name.findName()} ${faker.company.companyName()}`,
      newTag: getRandomBool(),
      liked: getRandomBool(),
      trending: generateTrend(),
      homeId: Math.floor(Math.random() * 5),
    };
    entries.push(obj);
  }
  return entries;
};

const insertFakeEntries = () => {
  let entries = generateEntries();
  Homes.insertMany(entries, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Could not seed database');
    } else {
      // eslint-disable-next-line no-console
      console.log('Database seeded');
    }
  });
};

insertFakeEntries();
