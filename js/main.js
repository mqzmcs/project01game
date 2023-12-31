const player = new Player();

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowLeft":
            player.moveLeft();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
    }
});

function detectCollision(player, sprite) {

    if (player.positionX < sprite.positionX + sprite.width && player.positionX + player.width > sprite.positionX && player.positionY < sprite.positionY + sprite.height && player.positionY + player.height > sprite.positionY) {
        
        return 1;
    }
    else {

        return 0;
    }
}

const cookieArr = [];
const raindropArr = [];
const poopArr = [];
const heroArr = [];

function spawnSprite(spriteType) {

    if (spriteType === "cookie") {
        const cookie = new Cookie();
        cookieArr.push(cookie);
    }

    if (spriteType === "raindrop") {
        const raindrop = new Raindrop();
        raindropArr.push(raindrop);
    }

    if (spriteType === "poop") {
        const poop = new Poop();
        poopArr.push(poop);
    }

    if (spriteType === "hero") {
        const hero = new Hero();
        heroArr.push(hero);
    }
}

const counterArr = [];
let counterNegArr = [];
let scoreCount = 0;

function scoreCounter(spriteType) {

    if (spriteType === "cookie") {
        counterArr.push(1);
        scoreCount += counterArr.length;
    }

    if (spriteType === "raindrop") {
        counterNegArr = counterArr.splice(0, 2);
        scoreCount -= counterNegArr.length;
    }

    if (spriteType === "poop") {
        counterNegArr = counterArr.splice(0, 5);
        scoreCount -= counterNegArr.length;
    }

    if (spriteType === "hero") {
        const heroPoints = [1, 1, 1, 1, 1];
        counterArr.push(...heroPoints);
        scoreCount += counterArr.length;
    }
    
    if (scoreCount <= 0 || counterArr.length <= 0) {
        location.assign("./gameover.html");
    }

    if (scoreCount >= 1000 * 1000 && counterArr.length > 100) {
        location.assign("./gamewon.html");
    }
}

function fallSprite(spriteType) {

    if (spriteType === "cookie") {
        cookieArr.forEach((sprite) => {
            sprite.fallDown();
    
            if (detectCollision(player, sprite)) {
                sprite.sprite.remove();

                scoreCounter("cookie");
                document.getElementById("cookie-score").innerText = cookieArr.length;
            }

            if (sprite.positionY === 5) {
                sprite.sprite.remove();
            }
        })
    }

    if (spriteType === "raindrop") {
        raindropArr.forEach((sprite) => {
            sprite.fallDown();
    
            if (detectCollision(player, sprite)) {
                sprite.sprite.remove();

                scoreCounter("raindrop");
                document.getElementById("cookie-score").innerText = counterNegArr.length;
            }

            if (sprite.positionY === 5) {
                sprite.sprite.remove();
            }
        })
    }

    if (spriteType === "poop") {
        poopArr.forEach((sprite) => {
            sprite.fallDown();
    
            if (detectCollision(player, sprite)) {
                sprite.sprite.remove();
                
                scoreCounter("poop");
                document.getElementById("cookie-score").innerText = counterNegArr.length;
            }

            if (sprite.positionY === 5) {
                sprite.sprite.remove();
            }
        })
    }

    if (spriteType === "hero") {
        heroArr.forEach((sprite) => {
            sprite.fallDown();
    
            if (detectCollision(player, sprite)) {
                sprite.sprite.remove();

                scoreCounter("hero");
                document.getElementById("cookie-score").innerText = cookieArr.length;
            }

            if (sprite.positionY === 5) {
                sprite.sprite.remove();
            }
        })
    }

    return scoreCounter;
}

setInterval(function() {
    spawnSprite("cookie");
}, 3 * 1000);

setInterval(function() {
    spawnSprite("raindrop");
}, 600);

setInterval(function() {
    spawnSprite("poop");
}, 5 * 1000);

setInterval(function() {
    spawnSprite("hero");
}, 20 * 1000);


setInterval(function() {
    fallSprite("cookie");
}, 50);

setInterval(function() {
    fallSprite("raindrop");
}, 35);

setInterval(function() {
    fallSprite("poop");
}, 20);

setInterval(function() {
    fallSprite("hero");
}, 25);

document.getElementById("cookie-score").innerText = scoreCount;
