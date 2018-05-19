var fs = require("fs");
module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "burgers_sequelized_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    // "username": process.env.DB_USERNAME,
    // "password": process.env.DB_PASSWORD,
    // "database": process.env.DB_NAME,
    // "host": process.env.DB_HOSTNAME,
    "dialect": "mysql"
  }
}
