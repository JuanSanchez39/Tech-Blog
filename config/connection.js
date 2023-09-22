// Import the Sequelize constructor from the library
const { log } = require('console');
const Sequelize = require('sequelize');

require('dotenv').config();

// Create connection to our database, pass in your MySQL information for username and password
let sequelize;



if (process.env.JAWSDB_URL) { console.log('apple')
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else { 
  console.log('bannanas')

  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3301
  });
}

module.exports = sequelize;