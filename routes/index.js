var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "barney",
    date: new Date().toLocaleDateString(),
  },
  {
    text: "Hello World!",
    user: "adam",
    date: new Date().toLocaleDateString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Messageboard", messages: messages });
});

router.post("/new", function (req, res, next) {
  const { author, message } = req.body;

  const newMessage = {
    text: message,
    user: author,
    date: new Date().toLocaleDateString(),
  };

  messages.push(newMessage);

  res.redirect("/");
});

module.exports = router;
