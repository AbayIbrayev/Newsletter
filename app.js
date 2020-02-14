const express = require("express"),
  bodyParser = require("body-parser"),
  request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});