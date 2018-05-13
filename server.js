var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var expressHandleBars = require("express-handlebars");
app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require("./controllers/burger_controller.js")(app);
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Currently listening at https://eat-da-burger-sequelize-lawrence.herokuapp.com " + PORT);
    });
});