// import express from "express";
// import { engine } from "express-handlebars";
var express = require("express");
var bodyParser = require("body-parser");
// import bodyParser from "body-parser";
var db = require("./models/index.cjs");
// import db from "./models/index.cjs";
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var expressHandleBars = require("express-handlebars");
// import expressHandleBars from 'express-handlebars';
// app.engine("handlebars", expressHandleBars.set({ defaultLayout: "main" }));
// var engine = require('handlebars');
// app.engine
app.engine('handlebars', expressHandleBars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require("./controllers/burger_controller.cjs")(app);
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Currently listening at https://eat-da-burger-sqlize-lawrence.herokuapp.com " + PORT);
    });
});