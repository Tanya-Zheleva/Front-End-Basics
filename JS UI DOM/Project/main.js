'use strict';

const width = 1000;
const height = 600;

const paddleWidth = 200;
const paddleHeight = 12;
const paddleXOffset = width / 2 - paddleWidth / 2;
const paddleYOffset = height - 30;

const scoreWidthOffset = 150;
const scoreHeightOffset = 10;

const ballSize = 25;
const testVel = 200;

function start() {
    let draw = SVG('drawing').size(width, height);
    draw.viewbox(0, 0, width, height);

    let background = draw.rect(width, height)
        .fill('lightgray');

    let points = 0;
    let scoreFont = {
        size: 38,
        family: 'New Times Roman',
        fill: 'white'
    };

    let score = draw.text(`Score: ${points}`).font(scoreFont)
        .move(width - scoreWidthOffset, scoreHeightOffset);

    let paddle = draw.rect(paddleWidth, paddleHeight);
    paddle.x(paddleXOffset)
        .y(paddleYOffset)
        .fill('blue');

    let ball = draw.circle(ballSize);
    ball.center(width / 2, height / 2)
        .fill('red');

    let velX = testVel;
    let velY = testVel
    let paddleXEnd = paddle.x() + paddleWidth;
    let paddleYEnd = paddle.y() - paddleHeight;
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

        if (velY > 0 && ballY >= paddleYEnd && ballX >= paddle.x() && ballX <= paddleXEnd) {
            velY = -velY;
        }

        // if (velY < 0 && ballY >= paddleYEnd && ballX >= paddle.x() && ballX <= paddleXEnd) {
        //     velY = -velY;
        // }

        // if (velY > 0 && ballY >= paddleYEnd && ballX >= paddle.x() && ballX <= paddleXEnd) {
        //     velY = -velY;
        // }

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
}

start();
