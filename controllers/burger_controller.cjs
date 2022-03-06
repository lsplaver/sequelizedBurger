var db = require("../models/index.cjs");
module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burgers.findAll({}).then(function (data) {
            var burgerOutputObject = {
                burgers: data
            };
            res.render("index", burgerOutputObject, { rows: rows });
        }).catch((err) => {
            res.status(500).json({
                error: err.message
            });
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burgers.create({
            burger_name: req.body.burger_name
        }).then(burger => {
            console.log(burger.get({
                plain: true
            }));
            res.render("index", burger.get());
        }).catch((err) => {
            res.status(500).json({
                error: err.message
            });
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        db.Burgers.update({
            devoured: req.body.devoured
        },
            {
                where: {
                    id: req.params.id
                }
            }).then(function (data) {
                var burgerOutputObject = {
                    burgers: data
                };
                console.log(burgerOutputObject);
                res.render("index", burgerOutputObject);
            }).catch((err) => {
                res.status(500).json({
                    error: err.message
                });
                console.log(err);
            });

    });
};
