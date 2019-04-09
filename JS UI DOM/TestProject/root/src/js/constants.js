const width = 1000;
const height = 600;
const padWidth = 200;
const padXOffset = width / 2 - padWidth / 2;
const padYOffset = height - 30;

const scoreFont = {
    size: 35,
    family: 'New Times Roman',
    fill: 'white'
};

const gameOverFont = {
    size: 55,
    family: 'New Times Roman',
    fill: 'red',
};

let constants = {
    width: 1000,
    height: 600,
    padWidth: 200,
    padHeight: 12,
    padXOffset: padXOffset,
    padYOffset: padYOffset,
    floatingWidth: 150,
    floatingHeight: 12,
    floatingOffsetX: 200,
    floatingOffsetY: 130,
    verticalPadWidth: 15,
    verticalPadHeight: 150,
    verticalPadXOffset: 70,
    verticalPadYOffset: 50,
    wallWidth: 350,
    wallHeight: 30,
    wallXOffset: 0,
    wallYOffset: 420,
    wallTopWidth: 30,
    wallTopHeight: 120,
    wallTopXOffset: 320,
    wallTopYOffset: 300,
    scoreXOffset: 250,
    scoreYOffset: 10,
    topScoreXOffset: 980,
    ballDiameter: 22,
    testVel: 300,
    rightArrowCode: 39,
    leftArrowCode: 37,
    gameOverX: 380,
    gameOverY: 160,
    scoreFont: scoreFont,
    gameOverFont: gameOverFont
}

export {constants}