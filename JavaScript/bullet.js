let player_x = player.x + player.width / 2 ;
let player_y = player.y + player.height / 2;
let Bullet = function (x,y) {
    this.img = new Image();
    this.img.src = 'images/fireball.png';
    this.width = 10;
    this.height = 20;
    this.x = x;
    this.y = y;
    this.speed = 20;
};

let bullets = [];




function fireBall() {
    for (let i = 0; i < bullets.length; i++){
    if (bullets[i].y < 0){
        player_x = player.x + player.width / 2 ;
        bullets[i].x = player_x - 5.5;
        bullets[i].y = player_y - 30;
    }
    bullets[i].y -= bullets[i].speed;
}}


/*let bullet = new Bullet(player_x - 5.5,player_y - 30);
let bulletImg = new Image();
bulletImg.src = 'images/fireball.png';

function fireBall() {
    if (bullet.y < 0){
        player_x = player.x + player.width / 2 ;
        bullet.x = player_x - 5.5;
        bullet.y = player_y - 30;
    }
    bullet.y -= bullet.speed;
}*/
