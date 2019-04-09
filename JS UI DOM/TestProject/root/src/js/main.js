'use strict';

import { constants } from './constants.js';
import {operator} from './dxOperator.js';
const dxOperator = operator();

function start() {
    let draw = SVG('drawing').size(constants.width, constants.height);
    draw.viewbox(0, 0, constants.width, constants.height);

    let background = draw.rect(constants.width, constants.height).fill(constants.backgroundColor);
    let score = dxOperator.createScore(draw, 'Current', constants.scoreXOffset, constants.scoreYOffset);
    let topScore = dxOperator.createScore(draw, 'Top', constants.topScoreXOffset, constants.scoreYOffset);
    let pad = dxOperator.createPad(draw, constants.padWidth, constants.padHeight, constants.padXOffset, constants.padYOffset, constants.blue);

    let horizontalPad = dxOperator.createPad(draw, constants.horizontalWidth, constants.horizontalHeight, constants.horizontalOffsetX, constants.horizontalOffsetY, constants.orange, false);
    let leftVerticalPad = dxOperator.createPad(draw, constants.verticalPadWidth, constants.verticalPadHeight, constants.verticalPadXOffset, constants.verticalPadYOffset, constants.orange, true); 
    let rightVeticalX =  constants.width - constants.verticalPadXOffset - constants.verticalPadWidth;
    let rightVerticalPad = dxOperator.createPad(draw, constants.verticalPadWidth, constants.verticalPadHeight, rightVeticalX, constants.verticalPadYOffset, constants.orange, true);

    let leftWall = dxOperator.createPad(draw, constants.wallWidth, constants.wallHeight, constants.wallXOffset, constants.wallYOffset, constants.green, false);
    let rigthWall = dxOperator.createPad(draw, constants.wallWidth, constants.wallHeight, constants.width - constants.wallWidth, constants.wallYOffset, constants.green, false);
    let leftTopWall = dxOperator.createPad(draw, constants.wallTopWidth, constants.wallTopHeight, constants.wallTopXOffset, constants.wallTopYOffset, constants.green, true);

    let rightTopX = constants.width - constants.wallTopWidth - constants.wallTopXOffset;
    let rightTopWall = dxOperator.createPad(draw, constants.wallTopWidth, constants.wallTopHeight, rightTopX, constants.wallTopYOffset, constants.green, true);

    dxOperator.animatePad(horizontalPad, 600, 130, '<>', 2000);
    dxOperator.animatePad(leftVerticalPad, 70, 200, '<', 1500);
    dxOperator.animatePad(rightVerticalPad, 910, 200, '>', 1500);

    let ball = dxOperator.createBall(draw, constants.width / 2, constants.height / 2, constants.ballDiameter, constants.testVel, constants.testVel, constants.red, true);
    let balls = new Array();

    balls.push(ball);
    balls.push(dxOperator.createBall(draw, constants.width / 2 - 28, constants.height / 2 - 50, 26, 300, 300, constants.yellow, false));
    balls.push(dxOperator.createBall(draw, constants.width / 2, constants.height / 2 - 50, 26, 350, 350, constants.yellow, false));
    balls.push(dxOperator.createBall(draw, constants.width / 2 + 28, constants.height / 2 - 50, 26, 400, 400, constants.yellow, false));
    balls.push(dxOperator.createBall(draw, constants.width / 2 + 56, constants.height / 2 - 50, 26, 400, 400, constants.yellow, false));


    let direction = 0; //1 right, -1 left
    let speed = 5;

    SVG.on(document, 'keydown', function (e) {
        direction = e.keyCode === constants.rightArrowCode ? 1 : e.keyCode === constants.leftArrowCode ? -1 : 0;
    });

    SVG.on(document, 'keyup', function (e) {
        direction = 0;
    });

    function update(time) {
        balls.forEach(function(item) {
            item.circle.dmove(item.velX * time, item.velY * time);
        });

        let walls = [leftWall, rigthWall, leftTopWall, rightTopWall, leftVerticalPad, rightVerticalPad, horizontalPad];
      
        dxOperator.checkCollisions(pad, walls, balls, score);
        dxOperator.checkSideCollisions(balls, pauseGame);

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
        pad.rect.animate(500, '<>', 250).cx(constants.width / 2);
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