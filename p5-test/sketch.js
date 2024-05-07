function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    console.log("PRESSED");
    fill(0);
  } else {
    fill(100);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
