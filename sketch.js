// example for loading JSON from URL 
// get API key from http://openweathermap.org/api 


var weatherNY;
var weatherChi;

function preload() { //best to load JSON in preload
  //sub key
  var urlny = 'http://api.openweathermap.org/data/2.5/weather?APPID=6fbadd7b22efd6545720c02b303d5deb&q=NewYork,USA&units=imperial'
  var urlchi = 'http://api.openweathermap.org/data/2.5/weather?APPID=6fbadd7b22efd6545720c02b303d5deb&q=Chicago,USA&units=imperial'
  weatherNY = loadJSON(urlny);
  weatherChi = loadJSON(urlchi);
}


function setup() {
  createCanvas(500, 500);
  console.log(weatherNY);
  //console.log(weatherChi);

  textSize(24);
  textAlign(CENTER);
  text("In New York we have " + weatherNY.weather[0].description, width / 2, height / 2 - 60);
  text("and the temperature is " + int(weatherNY.main.temp) + ".", width / 2, height / 2 - 30);
  text("In Chicago they have " + weatherChi.weather[0].description, width / 2, height / 2 + 30);
  text("and the temperature is " + int(weatherChi.main.temp) + ".", width / 2, height / 2 + 60);
}