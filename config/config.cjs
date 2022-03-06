var fs = require("fs");
module.exports = {
  "development": {
    "username": "dev", // "node-quiz-app-dev",
    "password": null,
    "database": "burgers_db", // "Burgers", // "node_quiz_app_db",
    "host": "localhost", // "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "test",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
