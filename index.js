const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('24.212.136.73', (err, coords) => {
//   if (err) {
//     return console.log("It didn't work!", err);
//   }

//   console.log("It worked! Returned Coords:", coords);
// });

// fetchISSFlyOverTimes({ latitude: 43.653226, longitude: -79.3831843 }, (err, flyOverArray) => {
//   if (err) {
//     return console.log("It didn't work!", err);
//   }

//   console.log("It worked! Returned Array: ", flyOverArray);
// });