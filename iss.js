const request = require("request");


const fetchMyIP = (callback) => {
  const URL = 'https://api.ipify.org?format=json';

  request(URL, (err, response, body) => {
    if (err) {
      return callback(err, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);
    }

    if (!Object.keys(JSON.parse(body)).length) {
      return callback("You don't appear to have an IP. How did you get in here?", null);
    }

    const result = JSON.parse(body).ip;
    return callback(null, result);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  const baseURL = 'http://ipwho.is/';

  request(baseURL + ip, (err, response, body) => {
    if (err) {
      return callback(err, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${body}`;
      return callback(Error(msg), null);
    }

    const result = JSON.parse(body);

    if (!result.success) {
      const message = `${result.message} => ${ip}`;
      return callback(Error(message, null));
    }

    const latitude = result.latitude;
    const longitude = result.longitude;

    return callback(null, { latitude: latitude, longitude: longitude });
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP };