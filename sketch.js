var sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune, stars; //define the var for the textures
var radius = 80; //define the sun radius

function preload(){ //load the textures and the font
  sun = loadImage("assets/sun.jpg");
  mercury = loadImage("assets/mercury.jpg");
  venus = loadImage("assets/venus.jpg");
  earth = loadImage("assets/earth.jpg");
  mars = loadImage("assets/mars.jpg");
  jupiter = loadImage("assets/jupiter.jpg");
  saturn = loadImage("assets/saturn.jpg");
  uranus = loadImage("assets/uranus.jpg");
  neptune = loadImage("assets/neptune.jpg");
  stars = loadImage("assets/stars.jpg");
  bambino = loadFont('assets/Bambino.otf');
}

function setup() { //create a canvas that recognizes 3D
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);


  //insert the text
  textAlign(CENTER);
  fill(255);
  textFont(bambino);
  textSize(15)
  text("The sun went off! Move the mouse to light the Solar System from different points!", 0, height/2 - 50);

//create the ambient light
  ambientLight(50, 50, 100);

//create a directional light that moves with the mouse
  var dirX = (mouseX / width - 0.5) * 2;
  var dirY = (mouseY / height - 0.5) * 2;
  directionalLight(255, 255, 255, dirX, dirY, -0.1);

//define the appearence of every 3D shape
  noStroke();

//allign the system with the center of the page
  translate(radius/4, -radius/4);

  push();
  fill(255);
  torus(107, 0.2); //orbit mercury
  torus(125, 0.2); //orbit venus
  torus(145, 0.2); //orbit earth
  torus(165, 0.2); //orbit mars
  torus(190, 0.2); //orbit jupiter
  torus(225, 0.2); //orbit saturn
  torus(245, 0.2); //orbit uranus
  torus(265, 0.2); //orbit neptune
  pop();

//create the sun
  push();
  rotateY(frameCount * 0.005);
  texture(sun);
  sphere(radius);
  pop();

//create mercury
  rotateZ(frameCount * 0.0025);
  push();
  texture(mercury);
  translate(107, 0, 0);
  sphere(2);
  pop();

//create venus
  rotateZ(frameCount * 0.003);
  push();
  texture(venus);
  translate(125, 0, 0);
  sphere(4);
  pop();

//create earth
  rotateZ(frameCount * 0.004);
  push();
  texture(earth);
  translate(145, 0, 0);
  sphere(4);
  pop();

//create mars
  rotateZ(frameCount * 0.005);
  push();
  texture(mars);
  translate(165, 0, 0);
  sphere(3.5);
  pop();

//create jupiter
  rotateZ(frameCount * 0.0055);
  push();
  texture(jupiter);
  translate(190, 0, 0);
  sphere(15);
  pop();

//create saturn
  rotateZ(frameCount * 0.0057);
  push();
  texture(saturn);
  translate(225, 0, 0);
  sphere(13);
  pop();

//create uranus
  rotateZ(frameCount * 0.0059);
  push();
  texture(uranus);
  translate(245, 0, 0);
  sphere(6);
  pop();

//create neptune
  rotateZ(frameCount * 0.006);
  push();
  texture(neptune);
  translate(265, 0, 0);
  sphere(6);
  pop();
}

//let the window respond to resizing
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
