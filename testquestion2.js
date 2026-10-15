// ct07
// square can react to keyboard space key to jump
// gravity pull it down
let player;
function setup() {
    new Canvas(400,600);
    player = new Sprite(30,30);
    player.x = width/2;
    player.y = 15;
    world.gravity.y = 10;
}
function draw() {
    clear();
    fill("skyblue");
    rect(0,0,width,height);
    if (kb.presses("space")) {
        player.vel.y = -8;
    }
}