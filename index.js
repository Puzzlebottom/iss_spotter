const { fetchMyIP, fetchCoordsByIP } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('4', (err, coords) => {
//   if (err) {
//     return console.log("It didn't work!", err);
//   }

//   console.log("It worked! Returned Coords:", coords);
// });