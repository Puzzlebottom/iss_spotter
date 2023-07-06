const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPassTimes = (times) => {
  times.forEach(entry => {
    const date = new Date(entry.risetime * 1000);
    const duration = entry.duration;
    console.log(`Next pass at ${date} for ${duration} seconds`);
  });
};

nextISSTimesForMyLocation()
  .then((body) => {
    printPassTimes(body);
  })
  .catch((err) => {
    console.log("It didn't work: ", err.message);
  });