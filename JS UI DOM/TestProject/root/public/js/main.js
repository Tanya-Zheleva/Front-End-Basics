'use strict';

var _constants = require('./constants.js');

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
    var yStart = pad.rect.y();
    var yEnd = pad.rect.y() + pad.height;
    var xStart = pad.rect.x();
    var xEnd = pad.rect.x() + pad.width;

    return ball.circle.cy() >= yStart && ball.circle.cy() <= yEnd && ball.circle.cx() >= xStart && ball.circle.cx() <= xEnd;
}

function movePad(pad, direction, speed) {
    var x = pad.rect.x();

    if (x <= 0 && direction === -1) {
        pad.rect.cx(pad.width / 2);
    } else if (x >= _constants.width - pad.width && direction === 1) {
        pad.rect.x(_constants.width - pad.width);
    } else {
        pad.rect.dx(direction * speed);
    }
}

function createScore(drawer, type, offsetX, offsetY) {
    return {
        points: 0,
        text: drawer.text(type + ' Score: 0').font(_constants.scoreFont).move(_constants.width - offsetX, offsetY)
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
        score.points++;
        ball.velY = -ball.velY;
    }

    if (hitsBall(ball, objects.bonusBall2)) {
        score.points++;
        ball.velY = -ball.velY;
    }

    if (hitsBall(ball, objects.bonusBall3)) {
        score.points++;
        ball.velY = -ball.velY;
    }
}

function hitsBall(ball, targetBall) {
    var xPow = Math.pow(targetBall.circle.cx() - ball.circle.cx(), 2);
    var yPow = Math.pow(targetBall.circle.cy() - ball.circle.cy(), 2);
    var dist = xPow + yPow;
    var radSum = Math.pow(ball.diameter / 2 + targetBall.diameter / 2, 2);
    var radDiff = Math.pow(ball.diameter / 2 - targetBall.diameter / 2, 2);

    return radDiff <= dist && dist <= radSum;
}

function checkSideCollisions(ball, pauseGame) {
    if (ball.velY > 0 && ball.circle.cy() >= _constants.height) {
        if (ball.circle.fill() === 'red') {
            pauseGame();
        }
    }

    if (ball.velY < 0 && ball.circle.cy() < 0 || ball.velY > 0 && ball.circle.cy() >= _constants.height) {
        ball.velY = -ball.velY;
    }

    if (ball.velX < 0 && ball.circle.cx() <= 0 || ball.velX > 0 && ball.circle.cx() >= _constants.width) {
        ball.velX = -ball.velX;
    }
}

function start() {
    var draw = SVG('drawing').size(_constants.width, _constants.height);
    draw.viewbox(0, 0, _constants.width, _constants.height);

    var background = draw.rect(_constants.width, _constants.height).fill('#b7bdc9');
    var score = createScore(draw, 'Current', _constants.scoreXOffset, _constants.scoreYOffset);
    var topScore = createScore(draw, 'Top', _constants.topScoreXOffset, _constants.scoreYOffset);

    var pad = createPad(draw, _constants.padWidth, _constants.padHeight, _constants.padXOffset, _constants.padYOffset, 'blue');
    var floatingPad = createPad(draw, _constants.floatingWidth, _constants.floatingHeight, _constants.floatingOffsetX, _constants.floatingOffsetY, 'orange');
    var leftVerticalPad = createPad(draw, _constants.verticalPadWidth, _constants.verticalPadHeight, _constants.verticalPadXOffset, _constants.verticalPadYOffset, 'orange');
    var rightVerticalPad = createPad(draw, _constants.verticalPadWidth, _constants.verticalPadHeight, _constants.width - _constants.verticalPadXOffset - _constants.verticalPadWidth, _constants.verticalPadYOffset, 'orange');

    var leftWall = createPad(draw, _constants.wallWidth, _constants.wallHeight, _constants.wallXOffset, _constants.wallYOffset, 'green');
    var rigthWall = createPad(draw, _constants.wallWidth, _constants.wallHeight, _constants.width - _constants.wallWidth, _constants.wallYOffset, 'green');
    var leftTopWall = createPad(draw, _constants.wallTopWidth, _constants.wallTopHeight, _constants.wallTopXOffset, _constants.wallTopYOffset, 'green');
    var rightTopWall = createPad(draw, _constants.wallTopWidth, _constants.wallTopHeight, _constants.width - _constants.wallTopWidth - _constants.wallTopXOffset, _constants.wallTopYOffset, 'green');

    animatePad(floatingPad, 600, 130, '<>', 2000);
    animatePad(leftVerticalPad, 70, 200, '<', 1500);
    animatePad(rightVerticalPad, 910, 200, '>', 1500);

    var ball = createBall(draw, _constants.width / 2, _constants.height / 2, _constants.ballDiameter, _constants.testVel, _constants.testVel, 'red');
    var bonusBalls = new Array();
    bonusBalls.push(createBall(draw, _constants.width / 2 - 28, _constants.height / 2 - 50, 26, 300, 300, 'green'));
    bonusBalls.push(createBall(draw, _constants.width / 2, _constants.height / 2 - 50, 26, 350, 350, 'green'));
    bonusBalls.push(createBall(draw, _constants.width / 2 + 28, _constants.height / 2 - 50, 26, 400, 400, 'green'));

    var direction = 0; //1 right, -1 left
    var speed = 5;

    SVG.on(document, 'keydown', function (e) {
        direction = e.keyCode === _constants.rightArrowCode ? 1 : e.keyCode === _constants.leftArrowCode ? -1 : 0;
    });

    SVG.on(document, 'keyup', function (e) {
        direction = 0;
    });

    function update(time) {
        ball.circle.dmove(ball.velX * time, ball.velY * time);
        bonusBalls[0].circle.dmove(bonusBalls[0].velX * time, bonusBalls[0].velY * time);
        bonusBalls[1].circle.dmove(bonusBalls[1].velX * time, bonusBalls[1].velY * time);
        bonusBalls[2].circle.dmove(bonusBalls[2].velX * time, bonusBalls[2].velY * time);

        var allObjects = {
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
        score.text.text('Current Score: ' + score.points);
        topScore.text.text('Top Score: ' + topScore.points);
    }

    var lastTime = void 0;
    var animationFrame = void 0;
    var text = void 0;

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
            append.tspan('Score: ' + score.points).newLine().dx(35);
        }).move(_constants.gameOverX, _constants.gameOverY).font(_constants.gameOverFont);

        score.points = 0;
        ball.circle.animate(120).center(_constants.width / 2, _constants.height / 2 - 260);
        pad.rect.animate(50).cx(_constants.width / 2);
    }

    draw.on('click', function () {
        if (ball.velX === 0 && ball.velY === 0) {
            ball.velX = _constants.testVel;
            ball.velY = _constants.testVel;
            text.clear();
        }
    });
}

start();