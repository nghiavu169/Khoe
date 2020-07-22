const keys = [];

const player = {
    x: 652,
    y: 655,
    width: 96,
    height: 95,
    frameX: 0,
    frameY: 3,
    speed: 20,
    moving: false
};

let playerSprite = new Image();
playerSprite.src = "images/phoenix.png";
let background = new Image();
background.src = "images/sky.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    player.moving = true;
});

window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];
    player.moving = false;
});
let countbullet = 0;
function movePlayer() {
    /*if (keys[38] && player.y > 0) {
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }*/if (keys[32]){
        countbullet++;
        bullets[countbullet] = new Bullet(player_x - 5.5,player_y - 30);
    }
    if (keys[37] && player.x > 0) {
        player.x -= player.speed;
        player.frameY = 3;
        player.moving = true;
    }
    /*if (keys[40] && player.y < canvas.height - player.height) {
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
    }*/
    if (keys[39] && player.x < canvas.width - player.width) {
        player.x += player.speed;
        player.frameY = 3;
        player.moving = true;
    }
}




function handlePlayerFrame() {
    if (player.frameX < 3 && player.moving) player.frameX++;
    else player.frameX = 0;
}