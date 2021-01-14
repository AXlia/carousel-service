const faker = require('faker');
const listings = require('./database');

const getRandomBool = () => {
  const num = Math.round(Math.random());
  if (num === 0) {
    return false;
  }
  return true;
};

const generateEntries = () => {
  // eslint-disable-next-line prefer-const
  let entries = [];
  for (let i = 0; i < 101; i += 1) {
    // eslint-disable-next-line prefer-const
    let obj = {
      address: faker.address.streetAddress(),
      neighbourhood: faker.random.word(),
      city: faker.address.city(),
      state: faker.address.state(),
      price: Math.floor(Math.random() * (10000000 - 500000 + 1) + 500000),
      bedrooms: Math.floor(Math.random() * 10),
      bathrooms: Math.floor(Math.random() * 10),
      sqft: Math.floor(Math.random() * (10000 - 200 + 1) + 200),
      realtor: `${faker.name.findName()} ${faker.company.companyName()}`,
      newTag: getRandomBool(),
      liked: getRandomBool(),
    };
    entries.push(obj);
  }
  return entries;
};

const insertFakeEntries = () => {
  const entries = generateEntries();
  listings.bulkCreate(entries);
};

insertFakeEntries();
