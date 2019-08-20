var distance = require('google-distance-matrix'); //https://www.npmjs.com/package/google-distance-matrix
distance.key('xxxxxxxxx');
distance.mode('driving');

var origins = ['Carmelaram', '12.904428,77.706918'];
var destinations = ['12.9478598,77.6893068'];

var dist = function() {
  return new Promise((resolve, reject) => {
      distance.matrix(origins, destinations, function (err, distances) {
        if (err) reject(err);
        resolve({
          statusCode: 200,
          body: distances
        });
      }
    );
  });
}

exports.handler = async (event) => {
    return await dist();
};