var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form", { title: "New Message Form" });
});

module.exports = router;
