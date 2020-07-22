let player_x = player.x + player.width / 2 ;
let player_y = player.y + player.height / 2;
let bullet ={
    width: 10,
    height: 20,
    x: player_x - 5.5,
    y: player_y - 30,
    speed: 20
};


let fireball = new Image();
fireball.src = 'images/fireball.png';

function fireBall() {
    if (bullet.y < 0){
        player_x = player.x + player.width / 2 ;
        bullet.x = player_x - 5.5;
        bullet.y = player_y - 30;
    }
    bullet.y -= bullet.speed;
}