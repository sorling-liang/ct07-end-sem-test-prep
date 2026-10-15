// ct07
let bg;
let birdImg;
function preload() {
    bg = loadImage("assets/background.png");
    birdImg = loadImage("assets/bird.png");
}
function setup() {
    new Canvas(400,600);
    bird = new Sprite();
    bird.img = birdImg;
}
function draw() {
    image(bg, 0,0, width, height);
}
