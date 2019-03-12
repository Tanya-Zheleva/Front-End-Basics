'use strict';

//const constants = require('./constants.js').default;

function start() {
    const width = 1000;
    const height = 600;

    let draw = SVG('drawing').size(width, height);
    draw.viewbox(0, 0, width, height);

    let background = draw.rect(width, height).fill('lightgray');

    const paddleWidth = 200;
    const paddleHeight = 12;
    const paddleXOffset = width / 2 - paddleWidth / 2;
    const paddleYOffset = height - 30;

    let paddle = draw.rect(paddleWidth, paddleHeight);
    paddle.x(paddleXOffset)
        .y(paddleYOffset)
        .fill('blue');

    const ballSize = 25;

    let ball = draw.circle(ballSize);
    ball.center(width / 2, height / 2)
        .fill('red');

    let velX = Math.random() * 500 - 100;
    let velY = Math.random() * 500 - 100;
    
    function update(time) {
        ball.dmove(velX * time, velY * time);

        let ballX = ball.cx();
        let ballY = ball.cy();

      

        if ((velY < 0 && ballY < 0) || (velY > 0 && ballY >= height)) {
            velY = -velY;
        }

        if ((velX < 0 && ballX <= 0) || (velX > 0 && ballX >= width)) {
            velX = - velX;
        }
    }

    let lastTime;
    let animationFrame;

    function callback(ms) {
        if (lastTime) {
            update((ms-lastTime)/1000);
        }

        lastTime = ms;
        animationFrame = requestAnimationFrame(callback);
    }

    callback();
}

start();
