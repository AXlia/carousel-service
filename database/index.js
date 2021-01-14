const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'homes',
});

connection.connect((err) => {
  if (err) {
    console.log('could not connect to mysql db, ', err);
  } else {
    console.log('connected to mysql db');
  }
});
