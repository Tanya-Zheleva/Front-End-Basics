import { constants } from './constants.js';

function operator() {
    function createPad(drawer, padWidth, padHeight, x, y, color, isVerical) {
        return {
            rect: drawer.rect(padWidth, padHeight).x(x).y(y).fill(color),
            width: padWidth,
            height: padHeight,
            isVerical: isVerical
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

    function hitsBall(ball, targetBall) {
        let xPow = Math.pow(targetBall.circle.cx() - ball.circle.cx(), 2);
        let yPow = Math.pow(targetBall.circle.cy() - ball.circle.cy(), 2);
        let dist = xPow + yPow;
        let radSum = Math.pow(ball.diameter / 2 + targetBall.diameter / 2, 2);
        let radDiff = Math.pow(ball.diameter / 2 - targetBall.diameter / 2, 2);
    
        return radDiff <= dist && dist <= radSum;
    }

    function movePad(pad, direction, speed) {
        let x = pad.rect.x();
    
        if (x <= 0 && direction === -1) {
            pad.rect.cx(pad.width / 2);
        } else if (x >= constants.width - pad.width && direction === 1) {
            pad.rect.x(constants.width - pad.width);
        } else {
            pad.rect.dx(direction * speed);
        }
    }    

    function createScore(drawer, type, offsetX, offsetY) {
        return {
            points: 0,
            text: drawer.text(`${type} Score: 0`).font(constants.scoreFont).move(constants.width - offsetX, offsetY)
        };
    }

    function checkSideCollisions(ball, pauseGame) {
        if (ball.velY > 0 && ball.circle.cy() >= constants.height) {
            if (ball.circle.attr('fill') === 'red') {
                pauseGame();
            }
        }
    
        if ((ball.velY < 0 && ball.circle.cy() < 0) || (ball.velY > 0 && ball.circle.cy() >= constants.height)) {
            ball.velY = -ball.velY;
        }
    
        if ((ball.velX < 0 && ball.circle.cx() <= 0) || (ball.velX > 0 && ball.circle.cx() >= constants.width)) {
            ball.velX = -ball.velX;
        }
    }    

    function checkCollisions(ball, objects, pad,  score) {
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

    return {
        createPad,
        createBall,
        animatePad,
        hitsPad,
        hitsBall,
        movePad,
        createScore,
        checkSideCollisions,
        checkCollisions
    };
}

export {operator};
