var weatherNY;
var weatherChi;
var forecastChi;

var r, g, b;

var place;

var click;
var script = " ";

//TREE
var treeX = 100;
var treeY = 250;

//year
var yearNum;
// month number
var monthNum;
// month string
var monthName;
// date number
var date;
// weekday name
var weekdayName;
//chicago hour
var chiHour;
//chicago current weather icon
var chiIcon;

//image assets
var outsideLaser;


//menorah 
//image
var menorah;
var candleH;
var candleMelt;


function preload() {
  var urlchi = 'https://api.wunderground.com/api/e9e7ffff3e289a8b/conditions/q/IL/Lakemoor.json';
  var urlny = 'https://api.wunderground.com/api/e9e7ffff3e289a8b/conditions/q/NY/Brooklyn.json';
  var urlForecastChi = 'https://api.wunderground.com/api/e9e7ffff3e289a8b/forecast/q/IL/Lakemoor.json';
  var urlHourlyChi = 'https://api.wunderground.com/api/e9e7ffff3e289a8b/hourly/q/IL/Lakemoor.json';

/*
  //image assets
  outsideLaser = loadImage("../assets/outside.jpg");
  menorah = loadImage("../assets/menorah.png");
*/

  weatherNY = loadJSON(urlny);
  weatherChi = loadJSON(urlchi);
  forecastChi = loadJSON(urlForecastChi);
  hourlyChi = loadJSON(urlHourlyChi);

}


function setup() {
  createCanvas(500, 500);

  place = "introduction";

  click = 0;

  candleH = 50;
  candleMelt = 92;


  //chiIcon = loadImage(weatherChi.current_observation.icon_url);


  //current year
  yearNum = hourlyChi.hourly_forecast[0].FCTTIME.year;
  // month number
  monthNum = hourlyChi.hourly_forecast[0].FCTTIME.mon;
  // month string
  monthName = hourlyChi.hourly_forecast[0].FCTTIME.month_name;
  // date number
  date = hourlyChi.hourly_forecast[0].FCTTIME.mday;
  // weekday name
  weekdayName = hourlyChi.hourly_forecast[0].FCTTIME.weekday_name;
  //chicago hour
  chiHour = hourlyChi.hourly_forecast[0].FCTTIME.hour;


  console.log("year: " + yearNum + " month: " + monthNum + " month name: " + monthName + " date: " + date + " hour: " + chiHour + " weekday name: " + weekdayName);

  textAlign(LEFT, CENTER);


  //console.log(forecastChi);
  //console.log(forecastChi.forecast);
  //console.log(hourlyChi.hourly_forecast[0].FCTTIME);
  // console.log(weatherChi);
  console.log(weatherChi.current_observation.icon_url);

}


function draw() {
  if (place == "introduction") {
    intro();
  } else if (place == "menu") {
    menu();
  } else if (place == "livingroom") {
    livingroom();
  } else if (place == "kitchen") {
    kitchen();
  } else if (place == "outside") {
    outside();
  }
  //console.log(place);
}



function mousePressed() {
  //if (click == 12) {
  //menu();
  // } else {
  click++;
  // }
  r = random(255);
  g = random(255);
  b = random(255);
}

function intro() {
  place = "introduction";
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

    for (var i = 0; i < width; i += 10) { 
      line(mouseX, i, i, mouseY);
    }
    script = "you will see more things happening here.";
  } else if (click == 7) {
    script = "For example...";
  } else if (click == 8) {
    script = "You can check the weather here.";
  } else if (click == 9) {
    script = "";
    //text("In Lakemoor it is " + weatherChi.current_observation.weather + ".", 0, height / 2 - 66);
    //text("In Lakemoor, it looks like", 0, height / 2 - 152);
    // image(chiIcon, 100, height/2-130);
    //text("In Brooklyn, it looks like", 0, height / 2 - 66);
    text("In Lakemoor it is " + weatherChi.current_observation.weather + ".", 0, height / 2 - 66);
    text("In Brooklyn it is " + weatherNY.current_observation.weather + ".", 0, height / 2 - 44);
    text("In Lakemoor it is " + int(weatherChi.current_observation.temp_f) + " degrees.", 0, height / 2 + 44);
    text("In Brooklyn it is " + int(weatherNY.current_observation.temp_f) + " degrees.", 0, height / 2 + 66);
    text("(It is " + (int(weatherNY.current_observation.temp_f) - int(weatherChi.current_observation.temp_f)) + " degrees warmer in Brooklyn.)", 0, height / 2 + 88 * 2 - 22);
  } else if (click == 10) {
    script = "(That's real-time data coming in.)";
  } else if (click == 11) {
    script = "It's not much for now.";
  } else if (click == 12) {
    textSize(44);
    script = "";
    fill(r, g, b);
    //  text("MERRY CHRISTMAS!", 0, height / 2 + 25);
    text("Happy " + weekdayName + "!", 0, height / 2 + 25);
    fill(0, 0, 255);
    text("HAPPY HANUKKAH!", 0, height / 2 - 25);
  } else if (click == 13) {
    place = "menu";
  }

  text(script, 0, height / 2);
  //console.log(click);
}

function menu() {
  background(255);
  fill(0);
  textSize(44);
  text("press a key:", 0, height / 2 - 22);
  textSize(22);
  text("(1) living room", 0, height / 2 + 22);
  text("(2) kitchen", 0, height / 2 + 44);
  text("(3) outside", 0, height / 2 + 66);
  text("(4) start over", 0, height / 2 + 88);
  if (keyIsPressed) {
    if (key == '1') {
      livingroom();
    } else if (key == '2') {
      kitchen();
    } else if (key == '3') {
      outside();
    } else if (key == '4') {
      setup();
    }
  }
  //reset menorah candles
  candleH = 50;
  candleMelt = 92;

}

/*
function livingroom() {
  background(255);

  //TREE 
  fill(0);
  noStroke();
  rect(treeX + 45, treeY + 70, 10, 50);
  //fill(mouseX, mouseY, 0);
  //triangle(treeX - 30, treeY + 70, treeX + 50, treeY - 20, treeX + 130, treeY + 70);
  for (var i = -30; i <= 130; i += 2) {
    stroke(random(255), random(255), random(255));
    line(treeX + 50, treeY - 20, treeX + i, treeY + random(70, 75));
  }
  for (var i = -20; i <= 120; i += 3) {
    stroke(random(255), random(255), random(255));
    line(treeX + 50, treeY - 35, treeX + i, treeY + random(35, 40));
  }
  for (var i = 0; i <= 100; i += 3) {
    stroke(random(255), random(255), random(255));
    line(treeX + 50, treeY - 50, treeX + i, treeY + random(0, 5));
  }


  if (mouseIsPressed) {
    place = "menu";
  } else {
    place = "livingroom";
  }
}

function kitchen() {
  background(255);
  image(menorah, width / 2, height / 2, 243, 275);

  console.log(chiHour);
  console.log(date);

  fill(255, 0, 0);

  //candle display by day
  if (date == '26') {
    rect(width / 2 + 185, height / 2 - candleH, 8, candleMelt); //3
    rect(width / 2 + 209, height / 2 - candleH, 8, candleMelt); //2
    rect(width / 2 + 231, height / 2 - candleH, 8, candleMelt); //1
    rect(width / 2 + 117, height / 2 - candleH - 18, 8, candleMelt); //middle
  } else if (date == '27') {
    rect(width / 2 + 117, height / 2 - candleH - 18, 8, candleMelt); //middle
    rect(width / 2 + 160, height / 2 - candleH, 8, candleMelt); //4
    rect(width / 2 + 185, height / 2 - candleH, 8, candleMelt); //3
    rect(width / 2 + 209, height / 2 - candleH, 8, candleMelt); //2
    rect(width / 2 + 231, height / 2 - candleH, 8, candleMelt); //1
  } else if (date == '28') {
    rect(width / 2 + 75, height / 2 - candleH, 8, candleMelt); //5
    rect(width / 2 + 117, height / 2 - candleH - 18, 8, candleMelt); //middle
    rect(width / 2 + 160, height / 2 - candleH, 8, candleMelt); //4
    rect(width / 2 + 185, height / 2 - candleH, 8, candleMelt); //3
    rect(width / 2 + 209, height / 2 - candleH, 8, candleMelt); //2
    rect(width / 2 + 231, height / 2 - candleH, 8, candleMelt); //1
  } else if (date == '29') {
    rect(width / 2 + 50, height / 2 - candleH, 8, candleMelt); //6
    rect(width / 2 + 75, height / 2 - candleH, 8, candleMelt); //5
    rect(width / 2 + 117, height / 2 - candleH - 18, 8, candleMelt); //middle
    rect(width / 2 + 160, height / 2 - candleH, 8, candleMelt); //4
    rect(width / 2 + 185, height / 2 - candleH, 8, candleMelt); //3
    rect(width / 2 + 209, height / 2 - candleH, 8, candleMelt); //2
    rect(width / 2 + 231, height / 2 - candleH, 8, candleMelt); //1
  } else if (date == '30') {
    rect(width / 2 + 25, height / 2 - candleH, 8, candleMelt); //7
    rect(width / 2 + 50, height / 2 - candleH, 8, candleMelt); //6
    rect(width / 2 + 75, height / 2 - candleH, 8, candleMelt); //5
    rect(width / 2 + 117, height / 2 - candleH - 18, 8, candleMelt); //middle
    rect(width / 2 + 160, height / 2 - candleH, 8, candleMelt); //4
    rect(width / 2 + 185, height / 2 - candleH, 8, candleMelt); //3
    rect(width / 2 + 209, height / 2 - candleH, 8, candleMelt); //2
    rect(width / 2 + 231, height / 2 - candleH, 8, candleMelt); //1
  } else if (date == '31') {
    rect(width / 2 + 4, height / 2 - candleH, 8, candleMelt); //8
    rect(width / 2 + 25, height / 2 - candleH, 8, candleMelt); //7
    rect(width / 2 + 50, height / 2 - candleH, 8, candleMelt); //6
    rect(width / 2 + 75, height / 2 - candleH, 8, candleMelt); //5
    rect(width / 2 + 117, height / 2 - candleH - 18, 8, candleMelt); //middle
    rect(width / 2 + 160, height / 2 - candleH, 8, candleMelt); //4
    rect(width / 2 + 185, height / 2 - candleH, 8, candleMelt); //3
    rect(width / 2 + 209, height / 2 - candleH, 8, candleMelt); //2
    rect(width / 2 + 231, height / 2 - candleH, 8, candleMelt); //1
  }

  if (chiHour >= 17 && chiHour < 23) {
    if (candleMelt > 0) {
      candleMelt -= 0.1;
      candleH -= 0.1;
    }
  } else {
    candleMelt = 0;
    candleH = 0;
  }




  place = "kitchen";
  if (mouseIsPressed) {
    place = "menu";
  }
}

function outside() {
  image(outsideLaser, 0, 0);
  place = "outside";
  if (mouseIsPressed) {
    place = "menu";
  }
}

*/