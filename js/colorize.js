'use strict';

(function () {
  var PLAYER_COATS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];


  // --------------------------------------------------------------------------------------------------
  // Находим объект PLAYER
  var setupPlayer = document.querySelector('.setup-player');


  // --------------------------------------------------------------------------------------------------
  // Функция изменения цвета в зависимости от тега
  var colorChange = function (target, colors) {
    if (target.tagName === 'use') {
      target.style.fill = window.getRandomValue(colors);
    }

    if (target.tagName === 'DIV') {
      target.parentNode.style.backgroundColor = window.getRandomValue(colors);
    }
  };


  // --------------------------------------------------------------------------------------------------
  // Проверка объекта
  var wizardSetupChange = function (evt) {
    var target = evt.target; // где был клик?

    if (target.classList.contains('wizard-coat')) {
      colorChange(target, PLAYER_COATS);
    }

    if (target.classList.contains('wizard-eyes')) {
      colorChange(target, EYES_COLORS);
    }
    if (target.classList.contains('setup-fireball')) {
      colorChange(target, FIREBALL_COLORS);
    }
  };


  // --------------------------------------------------------------------------------------------------
  // Прописываем функцию для элемента
  var runSetupPopup = function () {
    setupPlayer.addEventListener('click', wizardSetupChange);
  };

  runSetupPopup();
})();
