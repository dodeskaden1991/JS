let snaked = ""
let game;
let boost = 0;

let snake = {
    body: ['10-7', '10-6', '10-5'],
    position: 'right',
    do: () => {
        for (let i of snake.body) {
            snaked = document.getElementById(i);
            snaked.classList = "snakeMove"
        }
    },
    clear: () => {
        for (let i of snake.body) {
            snaked = document.getElementById(i);
            snaked.classList = "snake"
        }
        snaked = document.getElementById(snake.price);
        snaked.classList = "snake";
    },
    ball: () => {

        let x = Math.floor(Math.random() * 16);
        let y = Math.floor(Math.random() * 21);
        let currentBall = `${y}-${x}`;
        while (snake.body.includes(currentBall)) {
            x = Math.floor(Math.random() * 16);
            y = Math.floor(Math.random() * 21);
            currentBall = `${y}-${x}`;
        }
        snaked = document.getElementById(currentBall);
        snaked.classList = "snakeBall"
        snake.price = currentBall
    },
    price: "",
    score: 0,
    life: true
}

function start() {
    let button = document.getElementById("button");
    let power = document.getElementById("power").value;

    if (!power) { power = null }
    boost = power ?? 100;

    button.hidden = true;
    snake.ball();
    gameSpeed = 200 / (boost / 100);
    game = setInterval(move, gameSpeed);
}

window.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 37:
            snake.position = "left";
            break;
        case 39: snake.position = "right";
            break;
        case 38:
            snake.position = "up";
            break;
        case 40:
            snake.position = "down";
            break;
    }
});


window.addEventListener("touchstart", function (event) {

    let touch = event.touches[0];

    let startX = touch.pageX;
    let startY = touch.pageY;

    let touchId = touch.identifier;

    let swipe = {
        id: touchId,
        start: { x: startX, y: startY },
        end: null,
        direction: null
    };

    window.swipe = swipe;
});


window.addEventListener("touchmove", function (event) {

    let changedTouches = event.changedTouches;
    for (let i = 0; i < changedTouches.length; i++) {
        let touch = changedTouches[i];

        if (touch.identifier === window.swipe.id) {

            window.swipe.end = { x: touch.pageX, y: touch.pageY };

            let deltaX = window.swipe.end.x - window.swipe.start.x;
            let deltaY = window.swipe.end.y - window.swipe.start.y;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {

                if (deltaX > 0) {

                    window.swipe.direction = "right";
                    snake.position = window.swipe.direction;
                } else {

                    window.swipe.direction = "left";
                    snake.position = window.swipe.direction;
                }
            } else {

                if (deltaY > 0) {

                    window.swipe.direction = "down";
                    snake.position = window.swipe.direction;
                } else {

                    window.swipe.direction = "up";
                    snake.position = window.swipe.direction;
                }
            }
        }
    }
});


window.addEventListener("touchend", function (event) {

    let changedTouches = event.changedTouches;

    for (let i = 0; i < changedTouches.length; i++) {

        let touch = changedTouches[i];

        if (touch.identifier === window.swipe.id) {

            if (window.swipe.direction) {

                snake.position = window.swipe.direction;
            }

            window.swipe = null;
        }
    }
});

function move() {
    var audioContext = new AudioContext();
    var oscillator = audioContext.createOscillator();
    oscillator.type = `sawtooth`
    oscillator.frequency.value = 80;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(function () {
        oscillator.stop();
    }, 50);

    snake.do();

    let currentScore = document.getElementById("result")
    let copySnake = snake.body;
    let trash = copySnake.pop();
    snaked = document.getElementById(trash);
    snaked.classList = "snake"
    let newSnake = copySnake[0].split("-").map(Number);

    switch (snake.position) {
        case "left":
            newSnake[1]--;
            if (newSnake[1] < 1) {
                snake.life = false;
                break;
            }
            newSnake = newSnake.join("-");
            if (copySnake.includes(newSnake)) {
                snake.life = false;
                break;
            }
            if (newSnake == snake.price) {
                copySnake.push(trash)
                snake.score += 10 * (boost / 100);
                currentScore.textContent = `Score: ${snake.score}`;
                snake.ball();
            }
            copySnake.unshift(newSnake);
            snake.body = copySnake;
            snake.do();
            break;
        case "right":
            newSnake[1]++;
            if (newSnake[1] > 15) {
                snake.life = false;
                break;
            }
            newSnake = newSnake.join("-");
            if (copySnake.includes(newSnake)) {
                snake.life = false;
                break;
            }
            if (newSnake == snake.price) {
                copySnake.push(trash);
                snake.score += 10 * (boost / 100);
                currentScore.textContent = `Score: ${snake.score}`;
                snake.ball();
            }
            copySnake.unshift(newSnake);
            snake.body = copySnake;
            snake.do();
            break;
        case "up":
            newSnake[0]--;
            if (newSnake[0] < 1) {
                snake.life = false;
                break;
            }
            newSnake = newSnake.join("-");
            if (copySnake.includes(newSnake)) {
                snake.life = false;
                break;
            }
            if (newSnake == snake.price) {
                copySnake.push(trash);
                snake.score += 10 * (boost / 100);
                currentScore.textContent = `Score: ${snake.score}`;
                snake.ball();
            }
            copySnake.unshift(newSnake);
            snake.body = copySnake;
            snake.do();
            break;
        case "down":
            newSnake[0]++;
            if (newSnake[0] > 20) {
                snake.life = false;
                break;
            }
            newSnake = newSnake.join("-");
            if (copySnake.includes(newSnake)) {
                snake.life = false;
                break;
            }
            if (newSnake == snake.price) {
                copySnake.push(trash);
                snake.score += 10 * (boost / 100);
                currentScore.textContent = `Score: ${snake.score}`;
                snake.ball();
            }
            copySnake.unshift(newSnake);
            snake.body = copySnake;
            snake.do();
            break;
    }
    if (snake.life == false) {
        currentScore.textContent = `Game Over. Your Score: ${snake.score}`;
        clearInterval(game);
        game = null;
        let button = document.getElementById("button");
        button.hidden = false;
        snake.clear();
        snake.body = ['10-7', '10-6', '10-5'];
        snake.score = 0;
        snake.position = "right";
        snake.price = "";
        snake.life = true;
    }
}
