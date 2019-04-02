import constants from './constants';

console.log(constants.width);

const width = 1000;
const height = 600;

const padWidth = 200;
const padHeight = 12;
const padXOffset = width / 2 - padWidth / 2;
const padYOffset = height - 30;

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

const scoreXOffset = 250;
const scoreYOffset = 10;
const topScoreXOffset = 980;

const ballRadius = 22;
const testVel = 300;

const rightArrowCode = 39;
const leftArrowCode = 37;

const scoreFont = {
    size: 35,
    family: 'New Times Roman',
    fill: 'white'
};

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

function checkCollisions(ball, paddles, score) {
    if (hitsPad(ball, paddles.leftWall) || hitsPad(ball, paddles.rigthWall)) {
        ball.velY = -ball.velY;
    }

    if (hitsPad(ball, paddles.leftTopWall) || hitsPad(ball, paddles.rightTopWall)) {
        ball.velX = -ball.velX;
    }

    if (hitsPad(ball, paddles.floatingPaddle)) {
        ball.velY = -ball.velY;
    }

    if (hitsPad(ball, paddles.leftVerticalPad) || hitsPad(ball, paddles.rightVerticalPad)) {
        ball.velX = -ball.velX;
    }

    if (hitsPad(ball, paddles.paddle)) {
        score.points++;
        ball.velY = -ball.velY;
    }
}

function start() {
    let draw = SVG('drawing').size(width, height);
    draw.viewbox(0, 0, width, height);

    let background = draw.rect(width, height).fill('lightgray');
    let score = createScore(draw, 'Current', scoreXOffset, scoreYOffset);
    let topScore = createScore(draw, 'Top', topScoreXOffset, scoreYOffset);

    let pad = createPad(draw, padWidth, padHeight, padXOffset, padYOffset, 'blue');
    let floatingPad = createPad(draw, floatingWidth, floatingHeight, floatingOffsetX, floatingOffsetY, 'green');
    let leftVerticalPad = createPad(draw, verticalPadWidth, verticalPadHeight, verticalPadXOffset, verticalPadYOffset, 'orange');
    let rightVerticalPad = createPad(draw, verticalPadWidth, verticalPadHeight, width - verticalPadXOffset - verticalPadWidth, verticalPadYOffset, 'orange');

    let leftWall = createPad(draw, wallWidth, wallHeight, wallXOffset, wallYOffset, 'purple');
    let rigthWall = createPad(draw, wallWidth, wallHeight, width - wallWidth, wallYOffset, 'purple');
    let leftTopWall = createPad(draw, wallTopWidth, wallTopHeight, wallTopXOffset, wallTopYOffset, 'purple');
    let rightTopWall = createPad(draw, wallTopWidth, wallTopHeight, width - wallTopWidth - wallTopXOffset, wallTopYOffset, 'purple');

    animatePad(floatingPad, 600, 130, '<>', 2000);
    animatePad(leftVerticalPad, 70, 200, '<', 1500);
    animatePad(rightVerticalPad, 910, 200, '>', 1500);

    let ball = createBall(draw, width / 2, height / 2, ballRadius, testVel, testVel, 'red');
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
        let allPads = {
            leftWall: leftWall,
            rigthWall: rigthWall,
            leftTopWall: leftTopWall,
            rightTopWall: rightTopWall,
            leftVerticalPad: leftVerticalPad,
            rightVerticalPad: rightVerticalPad,
            floatingPaddle: floatingPad,
            paddle: pad
        };

        checkCollisions(ball, allPads, score);
        
        if (ball.velY > 0 && ball.circle.cy() >= height) {
            pauseGame();
        }

        if ((ball.velY < 0 && ball.circle.cy() < 0) || (ball.velY > 0 && ball.circle.cy() >= height)) {
            ball.velY = -ball.velY;
        }

        if ((ball.velX < 0 && ball.circle.cx() <= 0) || (ball.velX > 0 && ball.circle.cx() >= width)) {
            ball.velX = -ball.velX;
        }

        movePad(pad, direction, speed);
        score.text.text(`Current Score: ${score.points}`);
        topScore.text.text(`Top Score: ${topScore.points}`);
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
        ball.velY = 0;
        ball.velX = 0;

        if (score.points > topScore.points) {
            topScore.points = score.points;
        }

        score.points = 0;

        ball.circle.animate(120).center(width / 2, height / 2 - 260);
        pad.rect.animate(50).cx(width / 2);
    }

    draw.on('click', function () {
        if (ball.velX === 0 && ball.velY === 0) {
            ball.velX = testVel;
            ball.velY = testVel;
        }
    });
}

start();