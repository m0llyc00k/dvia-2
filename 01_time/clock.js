

let xpos = 1;
let ypos = 0;

function setup() {
  createCanvas(800, 600);
}
function draw() {
  background(0);
  stroke(255);
  strokeWeight(2);
  firstWorm();

  minuteEllipse();
  hourEllipse()
  
}

 function firstWorm () {
  ellipse(400 + sin(xpos) * second()*2, 540, 60, 60);
  ellipse(400 + sin(xpos) * second()*3, 530, 60, 60);
  ellipse(400 + sin(xpos) * second()*3.5, 520, 60, 60);
  ellipse(400 + sin(xpos) * second()*4, 510, 60, 60);
  ellipse(400 + sin(xpos) * second()*4.5, 500, 60, 60);
  ellipse(400 + sin(xpos) * second()*5, 490, 60, 60);
  ellipse(400 + sin(xpos) * second()*5.5, 480, 60, 60);
  ellipse(400 + sin(xpos) * second()*5.5, 470, 60, 60);
  ellipse(400 + sin(xpos) * second()*6, 460, 60, 60);
  ellipse(400 + sin(xpos) * second()*6, 450, 60, 60);
  ellipse(400 + sin(xpos) * second()*5.5, 440, 60, 60);
  ellipse(400 + sin(xpos) * second()*5.5, 430, 60, 60);
  ellipse(400 + sin(xpos) * second()*5, 420, 60, 60);
  ellipse(400 + sin(xpos) * second()*4.5, 410, 60, 60);
  ellipse(400 + sin(xpos) * second()*4, 400, 60, 60);
  ellipse(400 + sin(xpos) * second()*3.5, 390, 60, 60);
  ellipse(400 + sin(xpos) * second()*3, 380, 60, 60);
  ellipse(400 + sin(xpos) * second()*2, 370, 60, 60);
  fill(255, 0, 100,100);
  xpos += 0.01;
 }

//   function secondWorm () {
//   ellipse(200 + sin(xpos) * second()*2, 550, 75, 75);
//   ellipse(200 + sin(xpos) * second()*3, 540, 75, 75);
//   ellipse(200 + sin(xpos) * second()*3.5, 530, 75, 75);
//   ellipse(200 + sin(xpos) * second()*4, 520, 75, 75);
//   ellipse(200 + sin(xpos) * second()*4.5, 510, 75, 75);
//   ellipse(200 + sin(xpos) * second()*5, 500, 75, 75);
//   ellipse(200 + sin(xpos) * second()*5.5, 490, 75, 75);
//   ellipse(200 + sin(xpos) * second()*6, 480, 75, 75);
//   ellipse(200 + sin(xpos) * second()*5.5, 470, 75, 75);
//   ellipse(200 + sin(xpos) * second()*5, 460, 75, 75);
//   ellipse(200 + sin(xpos) * second()*4.5, 450, 75, 75);
//   ellipse(200 + sin(xpos) * second()*4, 440, 75, 75);
//   ellipse(200 + sin(xpos) * second()*3.5, 430, 75, 75);
//   ellipse(200 + sin(xpos) * second()*3, 420, 75, 75);
//   ellipse(200 + sin(xpos) * second()*2, 410, 75, 75);
//   fill(255,100,0,100);
  
// }
 
//   function thirdWorm () {
//   ellipse(600 + sin(xpos) * second()*2, 550, 60, 60);
//   ellipse(600 + sin(xpos) * second()*3, 540, 60, 60);
//   ellipse(600 + sin(xpos) * second()*3.5, 530, 60, 60);
//   ellipse(600 + sin(xpos) * second()*4, 520, 60, 60);
//   ellipse(600 + sin(xpos) * second()*4.5, 510, 60, 60);
//   ellipse(600 + sin(xpos) * second()*5, 500, 60, 60);
//   ellipse(600 + sin(xpos) * second()*5.5, 490, 60, 60);
//   ellipse(600 + sin(xpos) * second()*6, 480, 60, 60);
//   ellipse(600 + sin(xpos) * second()*5.5, 470, 60, 60);
//   ellipse(600 + sin(xpos) * second()*5, 460, 60, 60);
//   ellipse(600 + sin(xpos) * second()*4.5, 450, 60, 60);
//   ellipse(600 + sin(xpos) * second()*4, 440, 60, 60);
//   ellipse(600 + sin(xpos) * second()*3.5, 430, 60, 60);
//   ellipse(600 + sin(xpos) * second()*3, 420, 60, 60);
//   ellipse(600 + sin(xpos) * second()*2, 410, 60, 60);
//   fill(255, 0, 100, 100);
//   xpos += 0.01;
// }
  
  
  function minuteEllipse () {
  ellipse(400 + sin(xpos) * minute(), 300, second(), second());
  ellipse(200 + sin(xpos) * minute(), 300, second(), second());
  ellipse(600 + sin(xpos) * minute(), 300, second(), second());
  fill(255, 200, 0, 100);
  xpos += 0.03;
  }
  
  function hourEllipse () {
  ellipse(400 + sin(xpos) * hour(), 125, minute(), minute());
  fill(255, 0, 100, 100);
  xpos += 0.03;
  }

