//var slider;
//var pos;
let slider
let button
val = 255
lval = 0
tranVal = 0
let chk1;
let chk2;
let chk3;
let r, g, b, r2, g2, b2, r3, g3, b3;

// var albumBucketName = 'drawingtoolgallerybucket';
// var bucketRegion = "us-east-2";
// var IdentityPoolId = "us-east-2:3196ef8e-9de3-4f73-a386-4a2d587c10ac";

function setup() {


 canvas = createCanvas(1000, 1000);
 // console.log(canvas.elt);
 frameRate(5);
 angleMode(DEGREES);

  canvas.parent('main');

  r= random(255);
  g= random(255);
  b= random(255);

  h2Canvas = createElement('h2', 'Background Color');
  // ps = createP('Background Color');
  h2Canvas.parent('backgroundColor');
  Stanbutton = createButton('White');
  Stanbutton.addClass('Button');
  Stanbutton.addClass('ButtonActive');
  Stanbutton.parent('backgroundColor');
  // button.position(19,19);
  Stanbutton.mousePressed(changeBGstandard);

  Invbutton = createButton('Black');
  Invbutton.addClass('Button');
  Invbutton.parent('backgroundColor');
  // button.position(19,19);
  Invbutton.mousePressed(changeBG);


  // Sliders!
  h2Canvas2 = createElement('h2', 'Set For Loop Condition');
  h2Canvas2.parent('ForLoop');
  valueDisplayer1 = createP();
  valueDisplayer1.parent('ForLoop');
  // valueDisplayer1 = createP();
  // valueDisplayer1. = createP();
  // p1.parent('ForLoop');
  slider1 = createSlider(0, 255, 100).class('slider');
   // slider.position(20,130);
  slider1.parent('ForLoop');

  // valueDisplayer1 = createP();

  //checkbox highlighters - random color generator
  chk1 = select("#box1").elt;
  chk2 = select("#box2").elt;
  chk3 = select("#box3").elt;

  chk1.onchange = function() {

  // we only want to change things if the box was turned on
  // so we check like this
  if (chk1.checked) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

chk2.onchange = function() {
  if (chk2.checked) {
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
  }
}

chk3.onchange = function() {
  if (chk3.checked) {
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
  }
}

  h2Canvas3 = createElement('h2', 'Quadratic Vertex 1');
  h2Canvas3.parent('QV1');
  p2 = createP('y anchor point');
  p2.parent('QV1');
  slider2 = createSlider(0, 255, 120).class('slider');
   // slider2.position(20,160);
  slider2.parent('QV1');
  // valueDisplayer2 = createP();
  // valueDisplayer2.parent('menu');

  p3 = createP('x-coordinate for the anchor point');
  p3.parent('QV1');
  slider3 = createSlider(0, 255, 120).class('slider');
   // slider3.position(20,190);
  slider3.parent('QV1');
  // valueDisplayer3 = createP();
  // valueDisplayer3.parent('menu');

  p4 = createP('y-coordinate for the anchor point');
  p4.parent('QV1');
  slider4 = createSlider(0, 255, 120).class('slider');
   // slider4.position(20,220);
  slider4.parent('QV1');
  // valueDisplayer4 = createP();
  // valueDisplayer4.parent('menu');

  h2Canvas3 = createElement('h2', 'Quadratic Vertex 2');
  h2Canvas3.parent('QV2');
  p5 = createP('y anchor point');
  p5.parent('QV2');
  slider5 = createSlider(0, 255, 120).class('slider');
   // slider5.position(20,250);
  slider5.parent('QV2');
  // valueDisplayer5 = createP();
  // valueDisplayer5.parent('menu');
  h2Canvas4 = createElement('h2', 'Quadratic Vertex 3');
  h2Canvas4.parent('QV3');
  p6 = createP('y anchor point');
  p6.parent('QV3');
  slider6 = createSlider(0, 255, 120).class('slider');
   // slider6.position(20,280);
   slider6.parent('QV3');
   // valueDisplayer6 = createP();
   // valueDisplayer6.parent('menu');

   h2Canvas5 = createElement('h2', 'Transform');
   h2Canvas5.parent('transform');
   p7 = createP('Rotate X');
   p7.parent('transform');
   slider7 = createSlider(1, 20, 1).class('slider');
    // slider6.position(20,280);
    slider7.parent('transform');
    // valueDisplayer7 = createP();
    // valueDisplayer7.parent('menu');

    // p8 = createP('Rotate Y');
    // p8.parent('menu');
    // slider8 = createSlider(0, 300, 0).class('slider');
    //  // slider6.position(20,280);
    // slider8.parent('menu');



   // Buttons!


   pt = createP('Translate');
   pt.parent('transform');
   TranButtonOff = createButton('Off');
   TranButtonOff.parent('transform');
   TranButtonOff.addClass('ButtonActive');
   TranButtonOff.addClass('Button');
   // button.position(20, 400);
   TranButtonOff.mousePressed(translateOff);

   TranButtonOn = createButton('On');
   TranButtonOn.parent('transform');
   // TranButtonOn.addClass('ButtonActive');
   TranButtonOn.addClass('Button');
   // button.position(20, 400);
   TranButtonOn.mousePressed(translateOn);

     p9 = createP('Translate');
     p9.parent('transform');
     slider9 = createSlider(0, 5, tranVal).class('slider');
     // slider6.position(20,280);
     slider9.parent('transform');
     // valueDisplayer9 = createP();
     // valueDisplayer9.parent('menu');
     p9.hide();
     slider9.hide();

   Savebutton = createButton('Save Image');
   Savebutton.parent('save');
   Savebutton.addClass('Button');
   // button.position(20, 400);
   Savebutton.mousePressed(downloadPNG);

   // Savebutton = createButton('Reset Canvas');
   // Savebutton.parent('save');
   // Savebutton.addClass('Button');
   // // button.position(20, 400);
   // Savebutton.mousePressed(resetCanvas);

   // Savebutton = createButton('Add to Gallery');
   // Savebutton.parent('menu');
   // Savebutton.addClass('Button');
   // // button.position(20, 400);
   // Savebutton.mousePressed(galleryRun);

}

function downloadPNG() {
  saveCanvas();
}

// function resetCanvas() {
//   reset();
// }

// function galleryRun() {
//   /**
//  * Start Here with the mousepressed event or some other event handler
//  */
//   canvas.elt.toBlob(
//     function (blobFile) {
//       console.log(blobFile);
//       addToAlbum(blobFile, "album1");
//     },
//     "PNG",
//     1
//   );
// }

// function addToAlbum(file, albumName) {
//   var albumPhotosKey = encodeURIComponent(albumName) + "/";
//   var fileName = "imageat" + Date.now() + ".png";
//   var photoKey = albumPhotosKey + fileName;
//
//   // Use S3 ManagedUpload class as it supports multipart uploads
//   var upload = new AWS.S3.ManagedUpload({
//     params: {
//       Bucket: "drawingtoolgallerybucket",
//       Key: photoKey,
//       Body: file,
//       ACL: "public-read"
//     }
//   });
//
//   var promise = upload.promise();
//
//   promise.then(
//     function (data) {
//       //alert("Successfully uploaded photo.");
//       console.log("photo loading success");
//       viewAlbum(albumName);
//     },
//     function (err) {
//       console.log("error loading photo", err.message);
//       //return alert("There was an error uploading your photo: ", err.message);
//     }
//   );
//
// }


// chk1.onchange = function() {
//   if (chk1.checked) {
//     stroke(23, 240, 6);
//   }
// }

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

    if(chk1.checked){
      stroke(r, g, b);
    }
    strokeWeight(.06);
    vertex(200, slider2.value()*1.5);
    quadraticVertex(x/6, y/PI, slider3.value(), slider4.value());
    endShape();
    beginShape();
    stroke(lval);
    if(chk2.checked){
      stroke(r2, g2, b2);
    }
    strokeWeight(.03);
    vertex(10, slider5.value());
    quadraticVertex(x/PI, y/HALF_PI, 30, 20);
    endShape();
    beginShape();
      stroke(lval);
      if(chk3.checked){
        stroke(r3, g3, b3);
      }
    strokeWeight(0.05);
    vertex(100, slider6.value()*1.5);
    quadraticVertex(x, y, 300, 200);
    endShape();
    rotate(x*slider7.value()*3);
    translate(slider9.value()*tranVal, slider9.value()*tranVal);



    }
      valueDisplayer1.html('for (x = 2; x <=' + slider1.value() + ' * 2.5; x = x+ 3)');

  }

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


//  pos = pos + slider.value();
//  pos2 = pos2 + slider2.value();
