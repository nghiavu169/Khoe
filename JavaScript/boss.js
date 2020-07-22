let boss = {
    x: 652,
    y: 0,
    width: 96,
    height: 96,
    frameX: 0,
    frameY: 0,
    speed: 10,
};


let bOss = new Image();
bOss.src = 'images/bahamut.png'

function moveBoss(){
    if (boss.x < 0){
        boss.speed = -10;
    }
    if (boss.x > canvas.width - boss.width){
        boss.speed = 10;
    }
    boss.x -= boss.speed;
}



function handleBossFrame() {
    if (boss.frameX < 3) boss.frameX++;
    else boss.frameX = 0;
}