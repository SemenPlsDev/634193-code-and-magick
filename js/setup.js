'use strict';

//Объявляем массивы переменных
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColor = ['rgb(101, 137, 164)',
                 'rgb(241, 43, 107)',
                 'rgb(146, 100, 161)',
                 'rgb(56, 159, 117)',
                 'rgb(215, 210, 55)',
                 'rgb(0, 0, 0)]'];

var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];


//функция генерации случайных данных
var getRandomValue = function (arr){
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


// Массив из объектов со случайно сгенерированными данными
var wizards = [
  {
    name: getRandomValue(WIZARD_NAMES) + ' ' + getRandomValue(WIZARD_SURNAMES),
    coatColor: getRandomValue(coatColor),
    eyesColor:getRandomValue(eyesColor)
  },
  {
    name: getRandomValue(WIZARD_NAMES) + ' ' + getRandomValue(WIZARD_SURNAMES),
    coatColor: getRandomValue(coatColor),
    eyesColor:getRandomValue(eyesColor)
  },
  {
    name: getRandomValue(WIZARD_NAMES) + ' ' + getRandomValue(WIZARD_SURNAMES),
    coatColor: getRandomValue(coatColor),
    eyesColor:getRandomValue(eyesColor)
  },
  {
    name: getRandomValue(WIZARD_NAMES) + ' ' + getRandomValue(WIZARD_SURNAMES),
    coatColor: getRandomValue(coatColor),
    eyesColor:getRandomValue(eyesColor)
  }
];




