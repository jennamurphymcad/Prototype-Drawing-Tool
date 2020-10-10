//var slider;
//var pos;
let slider
let button
val = 255
lval = 0

function setup() {
 canvas = createCanvas(1000, 1000);
 frameRate(24);


  canvas.parent('main');

  p1 = createP('Slider 1');
  p1.parent('menu');
  slider1 = createSlider(0, 255, 100).class('slider');
   // slider.position(20,130);
  slider1.parent('menu');

  p2 = createP('Slider 2');
  p2.parent('menu');
  slider2 = createSlider(0, 255, 120).class('slider');
   // slider2.position(20,160);
  slider2.parent('menu');

  p3 = createP('Slider 3');
  p3.parent('menu');
  slider3 = createSlider(0, 255, 120).class('slider');
   // slider3.position(20,190);
  slider3.parent('menu');

  p4 = createP('Slider 4');
  p4.parent('menu');
  slider4 = createSlider(0, 255, 120).class('slider');
   // slider4.position(20,220);
  slider4.parent('menu');

  p5 = createP('Slider 5');
  p5.parent('menu');
  slider5 = createSlider(0, 255, 120).class('slider');
   // slider5.position(20,250);
  slider5.parent('menu');

  p6 = createP('Slider 6');
  p6.parent('menu');
  slider6 = createSlider(0, 255, 120).class('slider');
   // slider6.position(20,280);
   slider6.parent('menu');

   angleMode(DEGREES);

   button = createButton('Save Image');
   button.parent('menu');
   // button.position(20, 400);
   button.mousePressed(downloadPNG);

   button = createButton('Invert');
   button.parent('top');
   // button.position(19,19);
   button.mousePressed(changeBG);
}


function downloadPNG() {
  saveCanvas();
}

function changeBG() {
  val = 0;
  lval = 255;

  // background(val);
}

function draw() {
  clear();
  translate(width/2, height/2);
  background(val);

for (x = 2; x <= slider1.value()*2.5; x = x+ 3)
  for (y = 0; y <= 300; y = y +10) {

    noFill();
    beginShape();
    stroke(lval);
    strokeWeight(.06);
    vertex(200, slider2.value()*1.5);
    quadraticVertex(x/6, y/PI, slider3.value(), slider4.value());
    endShape();
    beginShape();
    strokeWeight(.03);
    vertex(10, slider5.value());
    quadraticVertex(x/PI, y/HALF_PI, 30, 20);
    endShape();
    beginShape();
    strokeWeight(0.05);
    vertex(100, slider6.value()*1.5);
    quadraticVertex(x, y, 300, 200);
    endShape();
    rotate(x);
    // noLoop();

}

  }



//  pos = pos + slider.value();
//  pos2 = pos2 + slider2.value();
