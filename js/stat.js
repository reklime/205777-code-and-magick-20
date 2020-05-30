'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_HEIGHT = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_COLOR = '#000';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderText = function (ctx, printTexts, posX, posY, maxWidth) {
  ctx.fillText(printTexts, posX, posY, maxWidth);
};

var getRandomSaturation = function (saturationRange) {
  return Math.floor(Math.random() * Math.floor(saturationRange)) + '%';
};
var renderRect = function (ctx, posX, posY, rectWidth, rectHeight) {
  ctx.fillRect(posX, posY, rectWidth, rectHeight);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var fontSize = '16px';
  var fontFamily = 'PT Mono';

  ctx.font = fontSize + fontFamily;
  ctx.fillStyle = TEXT_COLOR;

  renderText(ctx, 'Ура вы победили!', 120, 40);
  renderText(ctx, 'Список результатов', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = BAR_HEIGHT * times[i] / maxTime;
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(200, ' + getRandomSaturation(100) + ', 50%)';
    }

    var rectX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var rectY = CLOUD_Y + CLOUD_HEIGHT - TEXT_HEIGHT - FONT_GAP - barHeight - GAP;

    renderRect(ctx, rectX, rectY, BAR_WIDTH, barHeight);

    ctx.fillStyle = TEXT_COLOR;
    var namesX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var namesY = CLOUD_Y + CLOUD_HEIGHT - FONT_GAP;
    renderText(ctx, players[i], namesX, namesY, BAR_WIDTH);

    var scoresX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var scoresY = CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HEIGHT - FONT_GAP - barHeight - GAP;
    renderText(ctx, Math.round(times[i]), scoresX, scoresY, BAR_WIDTH);
  }
};

