//Задаем переменные
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var barWidth = 40;
var TEXT_HEIGHT = CLOUD_HEIGHT - 20;
var MAX_BAR = 150;
var HEIGHT_BAR = 230;
var names = ['Вы', 'Ваня', 'Катя', 'Олег'];
var times = [2900, 2000, 1500, 2800];

//Задаем функцию отрисовки облака
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

//Задаем функцию нахождения максимального элемента
var getMaxElement = function(arr){
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

//Задаем функцию отриcовки статистики
window.renderStatistics = function(ctx, names, time) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = "#000";
  ctx.font = "PT 16pt Mono";
  ctx.fillText("Ура вы победили!", 115, 40);
  ctx.fillText("Список результатов: ", 115, 60);



  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + barWidth + (BAR_GAP + barWidth) * i, TEXT_HEIGHT );
    ctx.fillRect(CLOUD_X + barWidth + (BAR_GAP + barWidth) * i , HEIGHT_BAR, barWidth, (-MAX_BAR * times[i]) / maxTime);

      if(names[i] = ['Вы']) {
        ctx.fillStyle = ctx.fillStyle = 'rgba(255, 0, 0, 1)';

      } else {
        ctx.fillStyle = 'rgb(50, 21, 179)';
        ctx.globalAlpha = 0.9*Math.random();
      }
    }
  };







