let r = 100; //radius
function setup() {
  // put setup code here
  createCanvas(800, 800);
  background(100);
  

}

function draw() {
  // put drawing code here
  
  let x = mouseX;
  let y = mouseY;
  background(x % 255, 255 - y % 255, 0);
//transforming circle into a square
  if(x > width / 2){
    rect(x - r/2, y - r/2, r, r);
  } else{
    fill(x % 255, y % 255, 30);
    ellipse(x, y, r);
  }

  // Howto draw a polygon..
  //TWO_PI = 2 times pi----6.2831...
  let vertices = map(mouseX, r, width - r, 4, 10);
  let start = 1;
  beginShape();
    for (let i = start; i < vertices; i++){
    let angle = map(i, start, vertices, 0, TWO_PI);
    let posX = r * cos(angle) + x;
    let posY = r * sin(angle) + y;
  vertex(posX, posY);
  }
  endShape();

  fill(30, 100, 25);
  strokeWeight(0);

}

function windowResized(){
  //resizeCanvas(innerWidth, innerHeight);
  resizecanvas();

}




