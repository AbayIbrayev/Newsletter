const express = require("express"),
  bodyParser = require("body-parser"),
  request = require("request");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  let firstName = req.body.fName,
    lastName = req.body.lName,
    email = req.body.email;

  let data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  let jsonData = JSON.stringify(data);

  let options = {
    url: 'https://usX.api.mailchimp.com/3.0/lists/UNIQUE_ID',
    method: "POST",
    headers: {
      "Authorization": "USERNAME API_KEY"
    },
    body: jsonData
  };

  request(options, function (error, response, body) {
    if (error) {
      res.send("There was an error with signing up, please try again!");
    } else {
      if (res.statusCode == 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }
    }
  });
});

app.post("/failure", (res, req) => {
  res.sendFile(__dirname + "/signup.html");
});