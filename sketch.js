//Change the color and size to change the confetti design

var circleSize = {
  x : 400,
  y : 400,
  d1 : 20,
  d2 : 20

}


function setup() {
   createCanvas(windowWidth, windowHeight);
  background('#F2F2F2');
  gui = new Gui();
  let gui_setup = new dat.GUI();
  
  gui_setup.add(gui, 'circleDiameter', 20, 100). step(1);
  
  gui_setup.add(gui, 'colorRed', 200, 242). step(1);
  
  gui_setup.add(gui, 'colorGreen', 60, 82). step(1);
  
  gui_setup.add(gui, 'colorBlue', 90, 112). step(1);

  gui_setup.add(gui,"opacity", 50,150);
  
 
  
  fill (242, 82, 112);
  noStroke();
  frameRate(2);
}

function draw() {
  theCircles();
  Gui();
}

function theCircles() {
  circleSize.x = random (0,windowWidth);
  circleSize.y = random (0,windowHeight);

  
  ellipse (circleSize.x, circleSize.y, gui.circleDiameter);
  
  
  fill(gui.colorRed,gui.colorGreen,gui.colorBlue,gui.opacity);
  noStroke();
  
  
}

function Gui(){
  this.colorRed = 242;
  this.colorBlue = 112;
  this.colorGreen = 82;
  this.circleDiameter = 50;
  this.opacity = 150;
   
}