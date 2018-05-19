var fs = require("fs");
module.exports = {
  "development": {
    "username": "node-quiz-app-dev",
    "password": null,
    "database": "node_quiz_app_db",
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
    "dialect": "mysql"
  }
}
