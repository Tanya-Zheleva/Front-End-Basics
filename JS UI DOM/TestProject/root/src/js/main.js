'use strict';

import { constants } from './constants.js';
import {operator} from './dxOperator.js';
const dxOperator = operator();

function start() {
    let draw = SVG('drawing').size(constants.width, constants.height);
    draw.viewbox(0, 0, constants.width, constants.height);

    let background = draw.rect(constants.width, constants.height).fill('#b7bdc9');
    let score = dxOperator.createScore(draw, 'Current', constants.scoreXOffset, constants.scoreYOffset);
    let topScore = dxOperator.createScore(draw, 'Top', constants.topScoreXOffset, constants.scoreYOffset);
    let pad = dxOperator.createPad(draw, constants.padWidth, constants.padHeight, constants.padXOffset, constants.padYOffset, 'blue');

    let floatingPad = dxOperator.createPad(draw, constants.floatingWidth, constants.floatingHeight, constants.floatingOffsetX, constants.floatingOffsetY, 'orange', false);
    let leftVerticalPad = dxOperator.createPad(draw, constants.verticalPadWidth, constants.verticalPadHeight, constants.verticalPadXOffset, constants.verticalPadYOffset, 'orange', true); 
    let rightVeticalX =  constants.width - constants.verticalPadXOffset - constants.verticalPadWidth;
    let rightVerticalPad = dxOperator.createPad(draw, constants.verticalPadWidth, constants.verticalPadHeight, rightVeticalX, constants.verticalPadYOffset, 'orange', true);

    let leftWall = dxOperator.createPad(draw, constants.wallWidth, constants.wallHeight, constants.wallXOffset, constants.wallYOffset, 'green', false);
    let rigthWall = dxOperator.createPad(draw, constants.wallWidth, constants.wallHeight, constants.width - constants.wallWidth, constants.wallYOffset, 'green', false);
    let leftTopWall = dxOperator.createPad(draw, constants.wallTopWidth, constants.wallTopHeight, constants.wallTopXOffset, constants.wallTopYOffset, 'green', true);

    let rightTopX = constants.width - constants.wallTopWidth - constants.wallTopXOffset;
    let rightTopWall = dxOperator.createPad(draw, constants.wallTopWidth, constants.wallTopHeight, rightTopX, constants.wallTopYOffset, 'green', true);

    dxOperator.animatePad(floatingPad, 600, 130, '<>', 2000);
    dxOperator.animatePad(leftVerticalPad, 70, 200, '<', 1500);
    dxOperator.animatePad(rightVerticalPad, 910, 200, '>', 1500);

    let ball = dxOperator.createBall(draw, constants.width / 2, constants.height / 2, constants.ballDiameter, constants.testVel, constants.testVel, 'red');
    let bonusBalls = new Array();

    bonusBalls.push(dxOperator.createBall(draw, constants.width / 2 - 28, constants.height / 2 - 50, 26, 300, 300, 'yellow'));
    bonusBalls.push(dxOperator.createBall(draw, constants.width / 2, constants.height / 2 - 50, 26, 350, 350, 'yellow'));
    bonusBalls.push(dxOperator.createBall(draw, constants.width / 2 + 28, constants.height / 2 - 50, 26, 400, 400, 'yellow'));

    let direction = 0; //1 right, -1 left
    let speed = 5;

    SVG.on(document, 'keydown', function (e) {
        direction = e.keyCode === constants.rightArrowCode ? 1 : e.keyCode === constants.leftArrowCode ? -1 : 0;
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

        let walls = [
            leftWall,
            rigthWall,
            leftTopWall,
            rightTopWall,
            leftVerticalPad,
            rightVerticalPad,
            floatingPad
        ];



        dxOperator.checkCollisions(ball, allObjects, score);

        dxOperator.checkSideCollisions(ball, pauseGame);
        dxOperator.checkSideCollisions(bonusBalls[0], pauseGame);
        dxOperator.checkSideCollisions(bonusBalls[1], pauseGame);
        dxOperator.checkSideCollisions(bonusBalls[2], pauseGame);

        dxOperator.movePad(pad, direction, speed);
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
        }).move(constants.gameOverX, constants.gameOverY).font(constants.gameOverFont);

        score.points = 0;
        ball.circle.animate(120).center(constants.width / 2, constants.height / 2 - 260);
        pad.rect.animate(50).cx(constants.width / 2);
    }

    draw.on('click', function () {
        if (ball.velX === 0 && ball.velY === 0) {
            ball.velX = constants.testVel;
            ball.velY = constants.testVel;
            text.clear();
        }
    });
}

start();