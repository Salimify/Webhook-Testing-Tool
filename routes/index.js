let express = require('express');
let router = express.Router();
const fs = require('fs');

router.get('/', function (req, res, next) {
  res.send('<h1>Your server works</h1> <p>Please run ngrok, send POST events to <b>/events</b> ' +
      'and view them on <b>/json</b>! More info: <a href="https://github.com/Salimify">here</a></p> ');
});

router.post('/events', function (req, res, next) {
  let jsonContent = JSON.stringify(req.body);
  let headers = JSON.stringify(req.headers);
  let timestamp = Math.floor(Date.now() / 1000);
  fs.writeFile("public/json/headers/header" + timestamp + ".json", headers, 'utf8', function (err) {
    if (err) {
      console.log(err);
    }
  });
  fs.writeFile("public/json/output" + timestamp + ".json", jsonContent, 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      console.log(err);
    }
    console.log("JSON file has been saved.");
  });
  res.json({ status: 200 })
});

module.exports = router;
