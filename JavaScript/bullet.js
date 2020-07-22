let player_x = player.x + player.width / 2 ;
let player_y = player.y + player.height / 2;
let Bullet = function (x,y) {
    this.img = 0;
    this.width = 10;
    this.height = 20;
    this.x = x;
    this.y = y;
    this.speed = 20;
    this.isGone = false;
    this.Hit = function () {
        if (this.isGone) return;
        let bullet_x = this.x + this.width / 2;
        let bullet_y = this.y + this.height / 2;
        for (let i = 0; i < 30; i++) {
            if (Math.abs(enemys[i].xcenter - bullet_x) < (enemys[i].width + this.width) / 2
                && Math.abs(enemys[i].ycenter - bullet_y) < (enemys[i].height + this.height) / 2) {
                this.x = player_x - 5.5;
                this.y = player_y - 30;
                this.isGone = true;
            }
        }
    }
};
let bullet = new Bullet(player_x - 5.5,player_y - 30);
let bulletImg = new Image();
bulletImg.src = 'fireball.png';

function fireBall() {
    if (bullet.y < 0){
        player_x = player.x + player.width / 2 ;
        bullet.x = player_x - 5.5;
        bullet.y = player_y - 30;
    }
    bullet.y -= bullet.speed;
}


/*let bullets = [];
for (let i = 0; i < 20; i++) {
    player_x = player.x + player.width / 2 ;
    player_y = player.y + player.height / 2 + 100 *i - 1900;
    bullets[i] = new Bullet(player_x - 5.5,player_y - 30);
    bullets[i].img = new Image();
    bullets[i].img.src = 'images/fireball.png'
}*/

/*function fireBall() {
    for (let i = 0; i < 20; i++){
    if (bullets[i].y < 0){
        player_x = player.x + player.width / 2 ;
        bullets[i].x = player_x - 5.5;
        bullets[i].y = player_y - 30;
    }
    bullets[i].y -= bullets[i].speed;
}}*/