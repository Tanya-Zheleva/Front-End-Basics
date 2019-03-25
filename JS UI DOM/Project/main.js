'use strict';

//const Utils = require('./constants.js');
//let util = new Utils();

//console.log(util.width);

// import {test} from './constants';
// test();

const width = 1000;
const height = 600;

const paddleWidth = 200;
const paddleHeight = 12;
const paddleXOffset = width / 2 - paddleWidth / 2;
const paddleYOffset = height - 30;

const floatingWidth = 150;
const floatingHeight = 12;
const floatingOffsetX = 200;
const floatingOffsetY = 130;

const verticalPadWidth = 15;
const verticalPadHeight = 150;
const verticalPadXOffset = 70;
const verticalPadYOffset = 50;

const wallWidth = 350;
const wallHeight = 30;
const wallXOffset = 0;
const wallYOffset = 420;

const wallTopWidth = 30;
const wallTopHeight = 120;
const wallTopXOffset = 320;
const wallTopYOffset = 300;

const scoreWidthOffset = 150;
const scoreHeightOffset = 10;

const ballRadius = 22;
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

function hitsTriangle(x, y, coords) {
    let OA = Math.sqrt((coords.x1 - x) * (coords.x1 - x) + (coords.y1 - y) * (coords.y1 - y));
    let OB = Math.sqrt((coords.x2 - x) * (coords.x2 - x) + (coords.y2 - y) * (coords.y2 - y));
    let OC = Math.sqrt((coords.x3 - x) * (coords.x3 - x) + (coords.y3 - y) * (coords.y3 - y));

    let AB = Math.sqrt((coords.x2 - coords.x1) * (coords.x2 - coords.x1) + (coords.y2 - coords.y1) * (coords.y2 - coords.y1));
    let CA = Math.sqrt((coords.x1 - coords.x3) * (coords.x1 - coords.x3) + (coords.y1 - coords.y3) * (coords.y1 - coords.y3));
    let BC = Math.sqrt((coords.x3 - coords.x2) * (coords.x3 - coords.x2) + (coords.y3 - coords.y2) * (coords.y3 - coords.y2));

    console.log((OA + OB + OC));
    console.log((AB + BC + CA));

    return (OA + OB + OC) < (AB + BC + CA);
}

function start() {
    let draw = SVG('drawing').size(width, height);
    draw.viewbox(0, 0, width, height);

    let background = draw.rect(width, height).fill('lightgray');
    let points = 0;
    let score = draw.text(`Score: ${points}`).font(scoreFont).move(width - scoreWidthOffset, scoreHeightOffset);

    let paddle = createPaddle(draw, paddleWidth, paddleHeight, paddleXOffset, paddleYOffset, 'blue');
    let floatingPaddle = createPaddle(draw, floatingWidth, floatingHeight, floatingOffsetX, floatingOffsetY, 'green');
    let leftVerticalPad = createPaddle(draw, verticalPadWidth, verticalPadHeight, verticalPadXOffset, verticalPadYOffset, 'orange');
    let rightVerticalPad = createPaddle(draw, verticalPadWidth, verticalPadHeight, width - verticalPadXOffset - verticalPadWidth, verticalPadYOffset, 'orange');

    let leftWall = createPaddle(draw, wallWidth, wallHeight, wallXOffset, wallYOffset, 'purple');
    let rigthWall = createPaddle(draw, wallWidth, wallHeight, width - wallWidth, wallYOffset, 'purple');
    let leftTopWall = createPaddle(draw, wallTopWidth, wallTopHeight, wallTopXOffset, wallTopYOffset, 'purple');
    let rightTopWall = createPaddle(draw, wallTopWidth, wallTopHeight, width - wallTopWidth - wallTopXOffset, wallTopYOffset, 'purple');

    floatingPaddle.animate(2000, '<>').move(600, 130).loop(true, true);
    leftVerticalPad.animate(1500, '<').move(70, 200).loop(true, true);
    rightVerticalPad.animate(1500, '>').move(910, 200).loop(true, true);

    let ball = draw.circle(ballRadius).center(width / 2, height / 2).fill('red');
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

    // let triangle = draw.polygon('200,0 500,0, 300,100').fill('yellow');
    // //let triangle2 = draw.polygon('800,0 500,0, 700,100').fill('yellow');

    // let pointsCorrdinates = triangle.array().value;

    // let coords = {
    //     x1: pointsCorrdinates[0][0],
    //     y1: pointsCorrdinates[0][1],
    //     x2: pointsCorrdinates[1][0],
    //     y2: pointsCorrdinates[1][1],
    //     x3: pointsCorrdinates[2][0],
    //     y3: pointsCorrdinates[2][1],
    // }

    // console.log(coords);

    function update(time) {
        ball.dmove(velX * time, velY * time);

        let ballX = ball.cx();
        let ballY = ball.cy();

        // let hitsTopTriangle = hitsTriangle(ballX, ballY, coords);
        // if (hitsTopTriangle) {
        //     velY = -velY;
        // }

        let hitsLeftWall = hitsPaddle(ballX, ballY, leftWall.y(), leftWall.y() + wallHeight, leftWall.x(), leftWall.x() + wallWidth);
        let hitsRightWall = hitsPaddle(ballX, ballY, rigthWall.y(), rigthWall.y() + wallHeight, rigthWall.x(), rigthWall.x() + wallWidth);
        
        if (hitsLeftWall || hitsRightWall) {
            velY += 10;
            velY = -velY;
        }

        let hitsLeftTop = hitsPaddle(ballX, ballY, leftTopWall.y(), leftTopWall.y() + wallTopHeight, leftTopWall.x(), leftTopWall.x() + wallTopWidth);
        let hitsRightTop = hitsPaddle(ballX, ballY, rightTopWall.y(), rightTopWall.y() + wallTopHeight, rightTopWall.x(), rightTopWall.x() + wallTopWidth);

        if (hitsLeftTop || hitsRightTop) {
            velY += 10;
            velX = -velX;
        }

        let hitsHorizontal = hitsPaddle(ballX, ballY, floatingPaddle.y(), floatingPaddle.y() + floatingHeight, floatingPaddle.x(), floatingPaddle.x() + floatingWidth);

        if (hitsHorizontal) {
            velY += 50;
            velY = -velY;
        }

        let hitsLeft = hitsPaddle(ballX, ballY, leftVerticalPad.y(), leftVerticalPad.y() + verticalPadHeight, leftVerticalPad.x(), leftVerticalPad.x() + verticalPadWidth);
        let hitsRight = hitsPaddle(ballX, ballY, rightVerticalPad.y(), rightVerticalPad.y() + verticalPadHeight, rightVerticalPad.x(), rightVerticalPad.x() + verticalPadWidth);

        if (hitsLeft || hitsRight) {
            velX += 15;
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
        points = 0;

        ball.animate(120).center(width / 2, height / 2 - 260);
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