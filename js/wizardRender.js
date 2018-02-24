'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'green', 'yellow'];
  var WIZARDS_COUNT = 4;

  // Добавляем обьекты
  var wizardID = function () {
    return window.getRandomValue(WIZARD_NAMES) + ' ' + window.getRandomValue(WIZARD_SURNAMES);
  };

  // Функция отрицовки волшебника
  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').textContent = wizard.Eyescolor;

    return wizardElement;
  };

  // Создаем массив в глобальном обьекте window
  window.wizards = [];
  for (i = 0; i < WIZARDS_COUNT; i++) {
    window.wizards.push({
      name: wizardID(),
      coatColor: window.getRandomValue(WIZARD_COATCOLOR),
      eyesColor: window.getRandomValue(WIZARD_EYESCOLOR)
    });
  }

  // Добавляем фрагмент в DOM
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < window.wizards.length; i++) {
    fragment.appendChild(renderWizard(window.wizards[i]));
  }
  window.setup.querySelector('.setup-similar-list').appendChild(fragment);
})();
