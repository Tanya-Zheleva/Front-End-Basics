'use strict';

const width = 1000;
const height = 600;

const paddleWidth = 200;
const paddleHeight = 12;
const paddleXOffset = width / 2 - paddleWidth / 2;
const paddleYOffset = height - 30;

const floatingPaddleWidth = 220;
const floatingPaddleHeight = 15;
const floatingOffsetX = 150;
const floatingOffsetY = 200;

const verticalPadWidth = 15;
const verticalPadHeight = 150;
const verticalPadXOffset = 30;
const verticalPadYOffset = 100;

const scoreWidthOffset = 150;
const scoreHeightOffset = 10;

const ballRadius = 25;
const testVel = 200;

const scoreFont = {
    size: 38,
    family: 'New Times Roman',
    fill: 'white'
};

function createPaddle(drawer, padWidth, padHeight, x, y, color) {
    return drawer.rect(padWidth, padHeight)
        .x(x)
        .y(y)
        .fill(color);
}

function hitsPaddle(ballX, ballY, yStart, yEnd, xStart, xEnd) {
    return (ballY >= yStart && ballY <= yEnd) && (ballX >= xStart && ballX <= xEnd);
}

function start() {
    let draw = SVG('drawing').size(width, height);
    draw.viewbox(0, 0, width, height);

    let background = draw.rect(width, height)
        .fill('lightgray');

    let points = 0;

    let score = draw.text(`Score: ${points}`).font(scoreFont)
        .move(width - scoreWidthOffset, scoreHeightOffset);

    let paddle = createPaddle(draw, paddleWidth, paddleHeight, paddleXOffset, paddleYOffset, 'blue');
    let floatingPaddle = createPaddle(draw, floatingPaddleWidth, floatingPaddleHeight, floatingOffsetX, floatingOffsetY, 'green');
    let leftVerticalPad = createPaddle(draw, verticalPadWidth, verticalPadHeight, verticalPadXOffset, verticalPadYOffset, 'orange');
    let rightVerticalPad = createPaddle(draw, verticalPadWidth, verticalPadHeight, width - verticalPadXOffset - verticalPadWidth, verticalPadYOffset, 'orange');

    floatingPaddle.animate(3000)
        .move(600, 200)
        .loop(true, true);

    leftVerticalPad.animate(3000)
        .move(30, 400)
        .loop(true, true);

    rightVerticalPad.animate(2000)
    .move(955, 400)
    .loop(true, true);

    let ball = draw.circle(ballRadius)
        .center(width / 2, height / 2)
        .fill('red');

    let velX = testVel;
    let velY = testVel;

    let direction = 0; //1 right, -1 left
    let speed = 5;

    SVG.on(document, 'keydown', function (e) {
        direction = e.keyCode == 39 ? 1 : e.keyCode == 37 ? -1 : 0;
    });

    SVG.on(document, 'keyup', function (e) {
        direction = 0;
    });

    function update(time) {
        ball.dmove(velX * time, velY * time);

        let ballX = ball.cx();
        let ballY = ball.cy();

        let hitsHorizontal = hitsPaddle(ballX, ballY, floatingPaddle.y(), floatingPaddle.y() + floatingPaddleHeight, floatingPaddle.x(), floatingPaddle.x() + floatingPaddleWidth);
        
        if (hitsHorizontal) {
            velY = -velY;
        }

        let hitsLeft = hitsPaddle(ballX, ballY, leftVerticalPad.y(), leftVerticalPad.y() + verticalPadHeight, leftVerticalPad.x(), leftVerticalPad.x() + verticalPadWidth);
        let hitsRight = hitsPaddle(ballX, ballY, rightVerticalPad.y(), rightVerticalPad.y() + verticalPadHeight, rightVerticalPad.x(), rightVerticalPad.x() + verticalPadWidth);

        if (hitsLeft || hitsRight) {
            velX = -velX;
        }

        let hitsMain = hitsPaddle(ballX, ballY, paddle.y(), paddle.y() + paddleHeight, paddle.x(), paddle.x() + paddleWidth);

        if (hitsMain) {
            points++;
            velY = -velY;
        }

        if (velY > 0 && ballY >= height) {
            pauseGame();
        }

        if ((velY < 0 && ballY < 0) || (velY > 0 && ballY >= height)) {
            velY = -velY;
        }

        if ((velX < 0 && ballX <= 0) || (velX > 0 && ballX >= width)) {
            velX = -velX;
        }

        let paddleX = paddle.x();

        if (paddleX <= 0 && direction == -1) {
            paddle.cx(paddleWidth / 2);
        } else if (paddleX >= width - paddleWidth && direction == 1) {
            paddle.x(width - paddleWidth);
        } else {
            paddle.dx(direction * speed)
        }

        score.text(`Score: ${points}`);
    }

    let lastTime;
    let animationFrame;

    function callback(ms) {
        if (lastTime) {
            update((ms - lastTime) / 1000);
        }

        lastTime = ms;
        animationFrame = requestAnimationFrame(callback);
    }

    callback();

    function pauseGame() {
        velY = 0;
        velX = 0;

        ball.animate(100).center(width / 2, height / 2 - 170);
        paddle.animate(50).cx(width / 2);
    }

    draw.on('click', function () {
        if (velX === 0 && velY === 0) {
            velX = testVel;
            velY = testVel;
        }
    });
}

start();
