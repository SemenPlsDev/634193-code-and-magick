'use strict';

// Прописывем переменные
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var PLAYER_COATS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');


// Прописывем функции для обработчиков событий
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};


// Добавляем обработчики событий
setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});


setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});


// функция генерации случайных данных
var getRandomValue = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

// Находим объект PLAYER
var setupPlayer = document.querySelector('.setup-player');


// Функция изменения цвета в зависимости от тега
var colorChange = function (target, colors) {
  if (target.tagName === 'use') {
    target.style.fill = getRandomValue(colors);
  }

  if (target.tagName === 'DIV') {
    target.parentNode.style.backgroundColor = getRandomValue(colors);
  }
};

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

// Прописываем функцию для элемента
var runSetupPopup = function () {
  setupPlayer.addEventListener('click', wizardSetupChange);
};

// Запуск функции для элемента
runSetupPopup();


