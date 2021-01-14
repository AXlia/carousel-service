// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'student',
//   password: 'student',
//   database: 'homes',
// });

// connection.connect((err) => {
//   if (err) {
//     console.log('could not connect to mysql db, ', err);
//   } else {
//     console.log('connected to mysql db');
//   }
// });

// module.exports = connection;

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('listings', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
  define: { timestamps: false },
});

const Home = sequelize.define('home', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  address: {
    type: DataTypes.STRING,
  },
  neighborhood: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.STRING,
  },
  bedrooms: {
    type: DataTypes.INTEGER,
  },
  bathrooms: {
    type: DataTypes.INTEGER,
  },
  sqft: {
    type: DataTypes.STRING,
  },
  realtor: {
    type: DataTypes.STRING,
  },
  newTag: {
    type: DataTypes.BOOLEAN,
  },
  like: {
    type: DataTypes.BOOLEAN,
  },
});

sequelize.sync();

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

module.export = {
  Home,
};
