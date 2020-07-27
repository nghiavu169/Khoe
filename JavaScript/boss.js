
let boss = {
    h_p: 0,
    hp: 700,
    x: 652,
    y: 0,
    xCenter: 0,
    yCenter: 0,
    width: 96,
    height: 96,
    frameX: 0,
    frameY: 0,
    speed: 10,
    isGhost: false,
    gotShooted: function () {
        if (this.isGhost) return;
        for (let i = 0; i < bullets.length; i++) {
            let bullet_x = bullets[i].x + bullets[i].width / 2;
            let bullet_y = bullets[i].y + bullets[i].height / 2;
            this.xCenter = this.x + this.width / 2;
            this.yCenter = this.y + this.height / 2;
            if (Math.abs(this.xCenter - bullet_x) < (this.width + bullets[i].width) / 4
                && Math.abs(this.yCenter - bullet_y) < (this.height + bullets[i].height) / 4 )
            {
                this.hp --;
                this.h_p ++;
                score += 20;
                if (this.hp === 0){
                    this.isGhost = true;
                    this.width = 0;
                    this.height = 0;
                }
            }
        }
    }
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