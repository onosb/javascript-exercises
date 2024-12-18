const convertToCelsius = function(fahrenhiet) {
  let celsius = (fahrenhiet - 32) * (5/9);
  return parseFloat(celsius.toFixed(1));

};

const convertToFahrenheit = function(celsius) {
  let fahrenhiet = celsius * (9/5) + 32;
  return parseFloat(fahrenhiet.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
