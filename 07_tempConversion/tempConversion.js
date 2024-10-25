const convertToCelsius = function( val ) {
  // (32°F − 32) × 5/9 = 0°C
  // ROUND TO ONE DECIMAL
  // val is temp in Fahrenheit

  let cel = (val - 32) * (5/9);
  cel = Math.round(cel*10)/10;
  return cel;
};


const convertToFahrenheit = function( val ) {
  // (0°C × 9/5) + 32 = 32°F
  // ROUND TO ONE DECIMAL
  // val is temp in Celcius

  let fahr = (val * (9/5)) + 32;
  fahr = Math.round(fahr*10)/10;
  return fahr;
};

console.log(convertToCelsius(-97));
console.log(convertToFahrenheit(-97));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
