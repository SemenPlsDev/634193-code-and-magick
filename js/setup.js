'use strict';
//--------------------------------------------------------------------------------------------------
// Прописывем переменные

(function () {
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var HIDDEN = 'hidden';

  window.getRandomValue = function (arrayOfData) {
    var elementIndex = getRandomIndexInArray(arrayOfData);

    return arrayOfData[elementIndex];
  };

  var getRandomIndexInArray = function (items) {
    return Math.floor(Math.random() * items.length);
  };

window.setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupOpen = document.querySelector('.setup-open');
var setupClose = window.setup.querySelector('.setup-close');
window.setup.querySelector('.setup-similar').classList.remove(HIDDEN)
//--------------------------------------------------------------------------------------------------
// Прописывем функции для обработчиков событий
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  window.setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  window.setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};


//--------------------------------------------------------------------------------------------------
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


//--------------------------------------------------------------------------------------------------

})();
