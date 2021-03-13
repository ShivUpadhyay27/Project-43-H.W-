function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  let c = map(mouseX, 0, width, 0, 175);
  let d = map(mouseX, 0, width, 40, 230);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);

  //drawing seconds hand
  push();
  rotate(scAngle);  //rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}