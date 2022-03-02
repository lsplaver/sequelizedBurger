'use strict';

var fs = require('fs');
// import fs from 'fs';
var path = require('path');
// import path from 'path';
var Sequelize = require('sequelize');
// import Sequelize from 'sequelize';
// import { fileURLToPath } from 'url';
// var fileURLToPath;// = require('url');
// var __filename = fileURLToPath = require('url');//url = require('url'));
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
// import { dirname } from 'path';
// var dirname = require('path');
// var dirName = dirname(__filename).toString();
//const __dirname = dirname(__filename);
var config = require(__dirname + '/../config/config.cjs')[env];
// import config from 
//import config from (__dirname, '/../config/config.js', [env]);
// var __dirname = path.join(dirName, /*dirname(__filename),*/ "/../config/config.js"); //, [env]);
console.log("__filename:  " + __filename);
console.log("__dirname:   " + __dirname);
//config = __dirname + '/../config/config.js'[env];
// var config = require(__dirname)[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-4) === '.cjs');
  })
  .forEach(file => {
    // /*import*/ sequelize from path(__dirname, file);
    // sequelize.path = __dirname + file;
    // var model = sequelize./*['import'](*/path;//(__dirname + file)/*)*/;
    // var model = sequelize['import'].path.join(__dirname, file);
    var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
// export default module = db;
