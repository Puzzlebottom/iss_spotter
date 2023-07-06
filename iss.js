const request = require("request");


/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

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


module.exports = { fetchMyIP };