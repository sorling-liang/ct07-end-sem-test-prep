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
}
function draw() {
    background("skyblue");
    circle(ballX,50,50);
    ballX += velX;
}