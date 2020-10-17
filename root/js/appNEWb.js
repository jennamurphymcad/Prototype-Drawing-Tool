//var slider;
//var pos;
let slider
let button
val = 255
lval = 0
tranVal = 0

function setup() {
 canvas = createCanvas(1000, 1000);
 // frameRate(24);
 angleMode(DEGREES);

  canvas.parent('main');

  // Sliders!
  p1 = createP('Slider 1');
  p1.parent('menu');
  slider1 = createSlider(0, 255, 100).class('slider');
   // slider.position(20,130);
  slider1.parent('menu');
  // valueDisplayer1 = createP();
  // valueDisplayer1.parent('menu');


  p2 = createP('Slider 2');
  p2.parent('menu');
  slider2 = createSlider(0, 255, 120).class('slider');
   // slider2.position(20,160);
  slider2.parent('menu');
  // valueDisplayer2 = createP();
  // valueDisplayer2.parent('menu');

  p3 = createP('Slider 3');
  p3.parent('menu');
  slider3 = createSlider(0, 255, 120).class('slider');
   // slider3.position(20,190);
  slider3.parent('menu');
  // valueDisplayer3 = createP();
  // valueDisplayer3.parent('menu');

  p4 = createP('Slider 4');
  p4.parent('menu');
  slider4 = createSlider(0, 255, 120).class('slider');
   // slider4.position(20,220);
  slider4.parent('menu');
  // valueDisplayer4 = createP();
  // valueDisplayer4.parent('menu');

  p5 = createP('Slider 5');
  p5.parent('menu');
  slider5 = createSlider(0, 255, 120).class('slider');
   // slider5.position(20,250);
  slider5.parent('menu');
  // valueDisplayer5 = createP();
  // valueDisplayer5.parent('menu');

  p6 = createP('Slider 6');
  p6.parent('menu');
  slider6 = createSlider(0, 255, 120).class('slider');
   // slider6.position(20,280);
   slider6.parent('menu');
   // valueDisplayer6 = createP();
   // valueDisplayer6.parent('menu');

   p7 = createP('Rotate X');
   p7.parent('menu');
   slider7 = createSlider(1, 20, 1).class('slider');
    // slider6.position(20,280);
    slider7.parent('menu');
    // valueDisplayer7 = createP();
    // valueDisplayer7.parent('menu');

    // p8 = createP('Rotate Y');
    // p8.parent('menu');
    // slider8 = createSlider(0, 300, 0).class('slider');
    //  // slider6.position(20,280);
    // slider8.parent('menu');



   // Buttons!

   Stanbutton = createButton('Standard');
   Stanbutton.addClass('Button');
   Stanbutton.addClass('ButtonActive');
   Stanbutton.parent('top');
   // button.position(19,19);
   Stanbutton.mousePressed(changeBGstandard);

   Invbutton = createButton('Invert');
   Invbutton.addClass('Button');
   Invbutton.parent('top');
   // button.position(19,19);
   Invbutton.mousePressed(changeBG);

   TranButtonOff = createButton('Translate Off');
   TranButtonOff.parent('menu');
   TranButtonOff.addClass('ButtonActive');
   TranButtonOff.addClass('Button');
   // button.position(20, 400);
   TranButtonOff.mousePressed(translateOff);

   TranButtonOn = createButton('Translate On');
   TranButtonOn.parent('menu');
   // TranButtonOn.addClass('ButtonActive');
   TranButtonOn.addClass('Button');
   // button.position(20, 400);
   TranButtonOn.mousePressed(translateOn);

     p9 = createP('Translate');
     p9.parent('menu');
     slider9 = createSlider(0, 5, tranVal).class('slider');
     // slider6.position(20,280);
     slider9.parent('menu');
     // valueDisplayer9 = createP();
     // valueDisplayer9.parent('menu');
     p9.hide();
     slider9.hide();


   Savebutton = createButton('Save Image');
   Savebutton.parent('menu');
   Savebutton.addClass('Button');
   // button.position(20, 400);
   Savebutton.mousePressed(downloadPNG);
}



function downloadPNG() {
  saveCanvas('img');
}

function changeBGstandard() {
  val = 255;
  lval = 0;
  Stanbutton.addClass('ButtonActive');
  Invbutton.removeClass('ButtonActive');

  // background(val);
}

function changeBG() {
  val = 0;
  lval = 255;
  Invbutton.addClass('ButtonActive');
  Stanbutton.removeClass('ButtonActive');
  // background(val);
}

function translateOff() {
    tranVal = 0;
    TranButtonOff.addClass('ButtonActive');
    TranButtonOn.removeClass('ButtonActive');
    p9.hide();
    slider9.hide();
}

function translateOn() {
    // tranVal = 3;

    TranButtonOn.addClass('ButtonActive');
    TranButtonOff.removeClass('ButtonActive');



    p9.show();
    slider9.show();
    tranVal = slider9.value();
}



  // tranVal = slider9.value();
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
    rotate(x*slider7.value()*3);

    translate(slider9.value()*tranVal, slider9.value()*tranVal);

    // valueDisplayer1.html('The value is '+slider1.value());
    // valueDisplayer2.html('The value is '+slider2.value());
    // valueDisplayer3.html('The value is '+slider3.value());
    // valueDisplayer4.html('The value is '+slider4.value());
    // valueDisplayer5.html('The value is '+slider5.value());
    // valueDisplayer6.html('The value is '+slider6.value());
    // valueDisplayer7.html('The value is '+slider7.value());
    // // valueDisplayer8.html('The value is '+slider1.value());
    // valueDisplayer9.html('The value is '+slider9.value());
    // rotate(y*slider8.value());
    // noLoop();

    }
  }



//  pos = pos + slider.value();
//  pos2 = pos2 + slider2.value();
