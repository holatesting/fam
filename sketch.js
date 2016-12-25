var weatherNY;
var weatherChi;

function preload() {
  var urlchi = 'https://api.wunderground.com/api/e9e7ffff3e289a8b/conditions/q/IL/Lakemoor.json';
  var urlny = 'https://api.wunderground.com/api/e9e7ffff3e289a8b/conditions/q/NY/Brooklyn.json';

  weatherNY = loadJSON(urlny);
  weatherChi = loadJSON(urlchi);
}


function setup() {
  createCanvas(500, 500);
  //console.log(weatherNY);
  //console.log(weatherChi);
  //console.log(weatherChi.current_observation.weather);
  //console.log(weatherChi.current_observation.temp_f);

  textSize(24);
  textAlign(CENTER, CENTER);

  /*
  text("In New York we have " + weatherNY.weather[0].description, width / 2, height / 2 - 60);
  text("and the temperature is " + int(weatherNY.main.temp) + ".", width / 2, height / 2 - 30);
  text("In Chicago they have " + weatherChi.weather[0].description, width / 2, height / 2 + 30);
  text("and the temperature is " + int(weatherChi.main.temp) + ".", width / 2, height / 2 + 60);
 */
  text("In Lakemoor it is " + weatherChi.current_observation.weather + " and " + int(weatherChi.current_observation.temp_f), width / 2, height / 2 + 30);
  text("In Brooklyn it is " + weatherNY.current_observation.weather + " and " + int(weatherNY.current_observation.temp_f), width / 2, height / 2 + 60);
}