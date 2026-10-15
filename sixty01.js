// ct06
// bouncing ball left right then all 4 edges
let ballX, ballY;
let velX, velY;
function setup() {
    createCanvas(400,600);
    noStroke();
    ballX = 50;
    ballY = 50;
    velX = 4;
    velY = 4;
}
function draw() {
    background("skyblue");
    circle(ballX,ballY,50);
    ballX += velX;
    ballY += velY;
    if (ballX > width) {
        velX *= -1;
    }
    if (ballX < 0) {
        velX *= -1;
    }
    if (ballY > height) {
        velY *= -1;
    }
    if (ballY < 0) {
        velY *= -1;
    }
}