const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((err, passTimes) => {
  if (err) {
    return console.log(err);
  }

  passTimes.forEach(entry => {
    const date = new Date(entry.risetime * 1000);
    const duration = entry.duration;
    console.log(`Next pass at ${date} for ${duration} seconds`);

  });
});