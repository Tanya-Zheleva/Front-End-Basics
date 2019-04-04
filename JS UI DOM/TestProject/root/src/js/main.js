'use strict';

import {

    width,
    height,
    padWidth,
    padHeight,
    padXOffset,
    padYOffset,
    floatingHeight,
    floatingWidth,
    floatingOffsetX,
    floatingOffsetY,
    verticalPadHeight,
    verticalPadWidth,
    verticalPadXOffset,
    verticalPadYOffset,
    wallHeight,
    wallWidth,
    wallXOffset,
    wallYOffset,
    wallTopHeight,
    wallTopWidth,
    wallTopXOffset,
    wallTopYOffset,
    scoreXOffset,
    scoreYOffset,
    topScoreXOffset,
    ballDiameter,
    testVel,
    rightArrowCode,
    leftArrowCode,
    gameOverX,
    gameOverY,
    scoreFont,
    gameOverFont

} from './constants.js';

function createPad(drawer, padWidth, padHeight, x, y, color) {
    return {
        rect: drawer.rect(padWidth, padHeight).x(x).y(y).fill(color),
        width: padWidth,
        height: padHeight
    };
}

function createBall(drawer, x, y, diameter, velX, velY, color) {
    return {
        circle: drawer.circle(diameter).center(x, y).fill(color),
        diameter: diameter,
        velX: velX,
        velY: velY
    };
}

function animatePad(pad, dx, dy, animationType, duration) {
    pad.rect.animate(duration, animationType).move(dx, dy).loop(true, true);
}

function hitsPad(ball, pad) {
    let yStart = pad.rect.y();
    let yEnd = pad.rect.y() + pad.height;
    let xStart = pad.rect.x();
    let xEnd = pad.rect.x() + pad.width;

    return (ball.circle.cy() >= yStart && ball.circle.cy() <= yEnd) && (ball.circle.cx() >= xStart && ball.circle.cx() <= xEnd);
}

function movePad(pad, direction, speed) {
    let x = pad.rect.x();

    if (x <= 0 && direction === -1) {
        pad.rect.cx(pad.width / 2);
    } else if (x >= width - pad.width && direction === 1) {
        pad.rect.x(width - pad.width);
    } else {
        pad.rect.dx(direction * speed);
    }
}

function createScore(drawer, type, offsetX, offsetY) {
    return {
        points: 0,
        text: drawer.text(`${type} Score: 0`).font(scoreFont).move(width - offsetX, offsetY)
    };
}

function checkCollisions(ball, objects, score) {
    if (hitsPad(ball, objects.leftWall) || hitsPad(ball, objects.rigthWall)) {
        ball.velY = -ball.velY;
    }

    if (hitsPad(ball, objects.leftTopWall) || hitsPad(ball, objects.rightTopWall)) {
        ball.velX = -ball.velX;
    }

    if (hitsPad(ball, objects.floatingPaddle)) {
        ball.velY = -ball.velY;
    }

    if (hitsPad(ball, objects.leftVerticalPad) || hitsPad(ball, objects.rightVerticalPad)) {
        ball.velX = -ball.velX;
    }

    if (hitsPad(ball, objects.paddle)) {
        score.points++;
        ball.velY = -ball.velY;
    }

    if (hitsBall(ball, objects.bonusBall1)) {
        ball.velY = -ball.velY;
    }

    if (hitsBall(ball, objects.bonusBall2)) {
        ball.velY = - ball.velY;
    }

    if (hitsBall(ball, objects.bonusBall3)) {
        ball.velY = - ball.velY;
    }
}

function hitsBall(ball, targetBall) {
    let xPow = Math.pow(targetBall.circle.cx() - ball.circle.cx(), 2);
    let yPow = Math.pow(targetBall.circle.cy() - ball.circle.cy(), 2);
    let dist = xPow + yPow;
    let radSum = Math.pow(ball.diameter / 2 + targetBall.diameter / 2, 2);
    let radDiff = Math.pow(ball.diameter / 2 - targetBall.diameter / 2, 2);

    return radDiff <= dist && dist <= radSum;
}

function checkSideCollisions(ball, pauseGame) {
    if (ball.velY > 0 && ball.circle.cy() >= height) {
        if (ball.circle.fill() === 'red') {
            pauseGame();
        }
    }

    if ((ball.velY < 0 && ball.circle.cy() < 0) || (ball.velY > 0 && ball.circle.cy() >= height)) {
        ball.velY = -ball.velY;
    }

    if ((ball.velX < 0 && ball.circle.cx() <= 0) || (ball.velX > 0 && ball.circle.cx() >= width)) {
        ball.velX = -ball.velX;
    }
}

function start() {
    let draw = SVG('drawing').size(width, height);
    draw.viewbox(0, 0, width, height);

    let background = draw.rect(width, height).fill('#b7bdc9');
    let score = createScore(draw, 'Current', scoreXOffset, scoreYOffset);
    let topScore = createScore(draw, 'Top', topScoreXOffset, scoreYOffset);

    let pad = createPad(draw, padWidth, padHeight, padXOffset, padYOffset, 'blue');
    let floatingPad = createPad(draw, floatingWidth, floatingHeight, floatingOffsetX, floatingOffsetY, 'orange');
    let leftVerticalPad = createPad(draw, verticalPadWidth, verticalPadHeight, verticalPadXOffset, verticalPadYOffset, 'orange');
    let rightVerticalPad = createPad(draw, verticalPadWidth, verticalPadHeight, width - verticalPadXOffset - verticalPadWidth, verticalPadYOffset, 'orange');

    let leftWall = createPad(draw, wallWidth, wallHeight, wallXOffset, wallYOffset, 'green');
    let rigthWall = createPad(draw, wallWidth, wallHeight, width - wallWidth, wallYOffset, 'green');
    let leftTopWall = createPad(draw, wallTopWidth, wallTopHeight, wallTopXOffset, wallTopYOffset, 'green');
    let rightTopWall = createPad(draw, wallTopWidth, wallTopHeight, width - wallTopWidth - wallTopXOffset, wallTopYOffset, 'green');

    animatePad(floatingPad, 600, 130, '<>', 2000);
    animatePad(leftVerticalPad, 70, 200, '<', 1500);
    animatePad(rightVerticalPad, 910, 200, '>', 1500);

    let ball = createBall(draw, width / 2, height / 2, ballDiameter, testVel, testVel, 'red');
    let bonusBalls = new Array();
    bonusBalls.push(createBall(draw, width / 2 - 28, height / 2 - 50, 26, 300, 300, 'green'));
    bonusBalls.push(createBall(draw, width / 2, height / 2 - 50, 26, 350, 350, 'green'));
    bonusBalls.push(createBall(draw, width / 2 + 28, height / 2 - 50, 26, 400, 400, 'green'));

    let direction = 0; //1 right, -1 left
    let speed = 5;

    SVG.on(document, 'keydown', function (e) {
        direction = e.keyCode === rightArrowCode ? 1 : e.keyCode === leftArrowCode ? -1 : 0;
    });

    SVG.on(document, 'keyup', function (e) {
        direction = 0;
    });

    function update(time) {
        ball.circle.dmove(ball.velX * time, ball.velY * time);
        bonusBalls[0].circle.dmove(bonusBalls[0].velX * time, bonusBalls[0].velY * time);
        bonusBalls[1].circle.dmove(bonusBalls[1].velX * time, bonusBalls[1].velY * time);
        bonusBalls[2].circle.dmove(bonusBalls[2].velX * time, bonusBalls[2].velY * time);

        let allObjects = {
            leftWall: leftWall,
            rigthWall: rigthWall,
            leftTopWall: leftTopWall,
            rightTopWall: rightTopWall,
            leftVerticalPad: leftVerticalPad,
            rightVerticalPad: rightVerticalPad,
            floatingPaddle: floatingPad,
            paddle: pad,
            bonusBall1: bonusBalls[0],
            bonusBall2: bonusBalls[1],
            bonusBall3: bonusBalls[2]
        };

        checkCollisions(ball, allObjects, score);

        checkSideCollisions(ball, pauseGame);
        checkSideCollisions(bonusBalls[0], pauseGame);
        checkSideCollisions(bonusBalls[1], pauseGame);
        checkSideCollisions(bonusBalls[2], pauseGame);

        movePad(pad, direction, speed);
        score.text.text(`Current Score: ${score.points}`);
        topScore.text.text(`Top Score: ${topScore.points}`);
    }

    let lastTime;
    let animationFrame;
    let text;

    function callback(ms) {
        if (lastTime) {
            update((ms - lastTime) / 1000);
        }

        lastTime = ms;
        animationFrame = requestAnimationFrame(callback);
    }

    callback();

    function pauseGame() {
        ball.velY = 0;
        ball.velX = 0;

        if (score.points > topScore.points) {
            topScore.points = score.points;
        }

        text = draw.text(function (append) {
            append.tspan("Game over!").newLine();
            append.tspan(`Score: ${score.points}`).newLine().dx(35);
        }).move(gameOverX, gameOverY).font(gameOverFont);

        score.points = 0;
        ball.circle.animate(120).center(width / 2, height / 2 - 260);
        pad.rect.animate(50).cx(width / 2);
    }

    draw.on('click', function () {
        if (ball.velX === 0 && ball.velY === 0) {
            ball.velX = testVel;
            ball.velY = testVel;
            text.clear();
        }
    });
}

start();