var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
router.get("/", function (req, res) {
    // burger.selectAll(function(data) {
    burger.findAll().then(burger => {
        var burgerOutputObject = {
            burgers: data
        };
        res.render("index", burgerOutputObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne("Burgers", "burger_name", "devoured", req.body.burger_name, false, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne("Burgers", "devoured", req.body.devoured, "id", req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            return res.status(200).end();
        }
    });
});

module.exports = router;