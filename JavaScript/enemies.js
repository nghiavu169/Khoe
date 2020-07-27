let Enemy = function(x,y,frameX,frameY){
    this.hp = 1;
    this.img = 0;
    this.x = x;
    this.y = y;
    this.xcenter = 0;
    this.ycenter = 0;
    this.width = 32;
    this.height = 48;
    this.isGhost = false;
    this.frameX = frameX;
    this.frameY = frameY;
    this.speed = 20;
    this.changeFrameX = function () {
        if (this.frameX < 3) this.frameX++;
        else this.frameX = 0;
    }
    this.randomMove = function () {
        let selectCase = Math.floor(Math.random()*4)
        switch (selectCase) {
            case 0:
                if (this.y <= 50) {
                    this.y += this.speed
                } else {
                    this.y -= this.speed;
                    this.frameY = 3;
                }
                break;
            case 1:
                if (this.x <= 0){
                    this.x += this.speed;
                } else {
                    this.x -= this.speed;
                    this.frameY = 1;
                }
                break;
            case 2:
                if (this.y >= canvas.height - this.height){
                    this.y -= this.speed;
                } else {
                    this.y += this.speed;
                    this.frameY = 0;
                }
                break;
            case 3:
                if (this.x >= canvas.width - this.width){
                    this.x -= this.speed;
                } else{
                    this.x += this.speed;
                    this.frameY = 2;
                }
                break;
        }
    }
    this.eatEnemy = function () {
        if (this.isGhost) return;
        let player_x = player.x + player.width / 2;
        let player_y = player.y + player.height / 2;
        this.xcenter = this.x + this.width / 2;
        this.ycenter = this.y + this.height / 2;
        if (Math.abs(this.xcenter - player_x) < (this.width + player.width) / 2
            && Math.abs(this.ycenter - player_y) < (this.height + player.height) / 2)
        {
            this.isGhost = true;
            this.width = 0;
            this.height = 0;
            live--;
        }
    }
    this.gotShooted = function () {
        if (this.isGhost) return;
        for (let i = 0; i < bullets.length; i++) {
            if (bullets[i].status) continue;
        let bullet_x = bullets[i].x + bullets[i].width / 2;
        let bullet_y = bullets[i].y + bullets[i].height / 2;
        if (Math.abs(this.xcenter - bullet_x) < (this.width + bullets[i].width) / 2
            && Math.abs(this.ycenter - bullet_y) < (this.height + bullets[i].height) / 2 )
        {
            this.hp --;
            score += 20;
            bullets[i].status = true;
            if (this.hp === 0){
            this.isGhost = true;
            this.width = 0;
            this.height = 0;
            }
        }
        }
    }
}



let enemys = [];
for (let i = 0; i < 30; i++) {
    enemys[i] = new Enemy(Math.random()*1368,Math.random()*300,0,0);
    enemys[i].img = new Image();
    enemys[i].img.src = 'images/silverbat.png';
}



function drawEnemy(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}