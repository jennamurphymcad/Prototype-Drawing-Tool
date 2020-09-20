//var slider;
//var pos;
let slider

function setup() {
 createCanvas(1500, 1200);
   angleMode(DEGREES);
   slider = createSlider(0, 255, 120);
   slider.position(20,130);
   slider2 = createSlider(0, 255, 120);
   slider2.position(20,160);
   slider3 = createSlider(0, 255, 120);
   slider3.position(20,190);
   slider4 = createSlider(0, 255, 120);
   slider4.position(20,220);
   slider5 = createSlider(0, 1, 1);
   slider5.position(20,250);
   slider6 = createSlider(0, 255, 120);
   slider6.position(20,280);
   button = createButton('Save Image');
   button.position(20, 400);
   button.mousePressed(downloadPNG);
//   pos = 0.0;
//   inc = 3.0
//   pos2 = 0.0;
  // inc2 = 7.0
}

function downloadPNG() {
  saveCanvas();

}

function draw() {
  clear();
  text('for loop control', slider.x + slider.width, 60);
  text('vertex shape1', slider2.x + slider2.width, 90);
  text('vertex shape2', slider3.x  + slider3.width, 120);
  text('vertex shape3', slider4.x  + slider4.width, 120);


  translate(width/2, height/2);

//  var mySinVal = sin(pos);
//  var mySinVal2 = sin(pos2)

//  amplified = mySinVal * 50;
//  amplified2 = mySinVal2 *50;

//  for (x = 0; x <= 360; x = x+ 10) {

//    curve(0, 10, 50, amplified2, amplified, 10, 10, 10)
//    rotate(x);

for (x = 2; x <= slider4.value()*3; x = x+ 3)
  for (y = 0; y <= 600; y = y +10) {
    noFill();
    beginShape();
    strokeWeight(slider5.value()/3);
    vertex(slider.value(), slider2.value()*2);
    quadraticVertex(x/6, y/PI, slider3.value(), slider6.value());
    endShape();
    beginShape();
    strokeWeight(.07);
    vertex(10, 30);
    quadraticVertex(x/PI, y/HALF_PI, 40, 20);
    endShape();
    beginShape();
    strokeWeight(0.05);
    vertex(200, 100);
    quadraticVertex(x, y, 400, 10);
    endShape();
    rotate(x);

}

  }

//  pos = pos + slider.value();
//  pos2 = pos2 + slider2.value();
