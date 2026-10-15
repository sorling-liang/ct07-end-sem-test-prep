// ct06
// bouncing ball left right then all 4 edges
let ballX, ballY;
let velX, velY;
function setup() {
    createCanvas(400,600);
    noStroke();
    ballX = 50;
    ballY = 50;
    velX = 2;
    velY = 3;
}
function draw() {
    background("skyblue");
    circle(ballX,ballY,50);
    ballX += velX;
    ballY 
    if (ballX > width) {
        velX *= -1;
    }
    if (ballX < 0) {
        velX *= -1;
    }
}