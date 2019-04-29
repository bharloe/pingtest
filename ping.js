const axios = require("axios");
const moment = require("moment");
const fs = require('fs');

const url = 'benharloe.com';

ping = async () => {
   axios.get(url)
  .then(function (response) {
    console.log(moment().format())
    console.log(`Response: ${response.status} ${response.statusText}`);
    fs.appendFile('frontend_logs.txt', `${moment().format()} Response: ${response.status} ${response.statusText} \n`, (err) => {
      if (err) throw err;
    });
  })
  .catch(function (error) {
    console.log(`${moment().format()} ${error}`);
    fs.appendFile('logs.txt', `${moment().format()} ${error} \n`, (err) => {
      if (err) throw err;
    });
  })
}

setInterval(ping, 1500);