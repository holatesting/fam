var weatherNY;
var weatherChi;

var click = 0;
var script = " ";

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


  textAlign(LEFT, CENTER);

  /*
  text("In New York we have " + weatherNY.weather[0].description, width / 2, height / 2 - 60);
  text("and the temperature is " + int(weatherNY.main.temp) + ".", width / 2, height / 2 - 30);
  text("In Chicago they have " + weatherChi.weather[0].description, width / 2, height / 2 + 30);
  text("and the temperature is " + int(weatherChi.main.temp) + ".", width / 2, height / 2 + 60);
 */
  //text("In Lakemoor it is " + weatherChi.current_observation.weather + " and " + int(weatherChi.current_observation.temp_f), 0, height / 2 + 30);
  //text("In Brooklyn it is " + weatherNY.current_observation.weather + " and " + int(weatherNY.current_observation.temp_f), 0, height / 2 + 60);
}


function draw() {
  background(255);

  if (click == 0) {
    fill(0);
    textSize(111);
    script = "hello";
  } else if (click == 1) {
    textSize(22);
    script = "this is the beginning of a website";
  } else if (click == 2) {
    script = "kind of like a shared portal";
  } else if (click == 3) {
    script = "between Lakemoor and Brooklyn.";
  } else if (click == 4) {
    script = "Right now not much is happening.";
  } else if (click == 5) {
    script = "But eventually";
  } else if (click == 6) {

    for (var i = 0; i < width; i += 10) { //initialize for loop with var and no data type
    line(mouseX, i, i, mouseY);
  }
    script = "you will see more things happening here.";
  } else if (click == 7) {
    script = "For example...";
  } else if (click == 8) {
    script = "You can check the weather here.";
  } else if (click == 9) {
    script="";
    text("In Lakemoor it is " + weatherChi.current_observation.weather + ".", 0, height / 2 -66);
    text("In Brooklyn it is " + weatherNY.current_observation.weather + ".", 0, height / 2 -44);
    text("In Lakemoor it is " + int(weatherChi.current_observation.temp_f) + " degrees.", 0, height / 2 + 44);
   text("In Brooklyn it is " + int(weatherNY.current_observation.temp_f) + " degrees.", 0, height / 2 + 66);
   text("(It is " + (int(weatherNY.current_observation.temp_f)-int(weatherChi.current_observation.temp_f)) + " degrees warmer in Brooklyn.)", 0, height/2 + 88*2-22);
  } else if (click == 10) {
    script = "(That's real-time data coming in.)";
  } else if (click == 11) {
    script = "It's not much for now.";
  } else if (click == 12) {
    textSize(44);
    script = "";
    fill(255, 0, 0);
    text("MERRY CHRISTMAS!", 0, height / 2 + 25);
    fill(0, 0, 255);
    text("HAPPY HANUKKAH!", 0, height / 2 - 25);
  } 
  
  text(script, 0, height / 2);
  console.log(click);
}


function mousePressed() {
  if (click == 12) {
    click = 0;
  } else {
    click++;
  }
}