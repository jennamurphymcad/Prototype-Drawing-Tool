//var slider;
//var pos;
let slider

function setup() {
 canvas = createCanvas(1000, 1000);


  canvas.parent('main');

  p1 = createP('Slider 1');
  p1.parent('menu');
  slider = createSlider(0, 255, 120).class('slider');
   // slider.position(20,130);
  slider.parent('menu');

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
  slider5 = createSlider(0, 1, 1).class('slider');
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
  background(254, 249, 243);
  translate(width/2, height/2);


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
