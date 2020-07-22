let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1400;
canvas.height = 750;

let live = 3;
let game_over = false;
let a = setInterval(endGame,30);

let fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}
let b ;
function animate() {
    b = requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY,
            player.width, player.height, player.x, player.y, player.width, player.height);
        movePlayer();
        drawEnemy(bOss,boss.width * boss.frameX,0,boss.width,boss.height,boss.x,boss.y,boss.width,boss.height);
        moveBoss();
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Live: ' + live,0,20);
        ctx.stroke();
        ctx.closePath();

        for (let i = 0; i < 30; i++) {
            drawEnemy(enemys[i].img,enemys[i].width*enemys[i].frameX,0,enemys[i].width,enemys[i].height,enemys[i].x,enemys[i].y,enemys[i].width,enemys[i].height);
            enemys[i].changeFrameX();
            enemys[i].randomMove();
            enemys[i].eatEnemy();
            enemys[i].gotShooted();
        }
        handlePlayerFrame();
        handleBossFrame();
        fireBall();
        ctx.drawImage(fireball,bullet.x,bullet.y,bullet.width,bullet.height);


    }
}
startAnimating(20);

function endGame() {
    if (live === 0){
        clearInterval(a);
        cancelAnimationFrame(b);
        game_over = true;
        alert('Game Over!');
    }
}