'use strict';
(function () {
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };
  var generateWizardObject = function () {
    //  Генерируем элемент для массива магов
    var obj = {};
    obj.name = window.constants.WIZARDS_NAMES[window.utils.generateRandomNumber(0, window.constants.WIZARDS_NAMES.length)] + ' ' + window.constants.WIZARDS_SECOND_NAMES[window.utils.generateRandomNumber(0, window.constants.WIZARDS_NAMES.length)];
    obj.coatColor = window.constants.COATS_COLORS[window.utils.generateRandomNumber(0, window.constants.COATS_COLORS.length)];
    obj.eyesColor = window.constants.EYES_COLORS[window.utils.generateRandomNumber(0, window.constants.EYES_COLORS.length)];
    return obj;
  };

  var createWizards = function (quantity) {
    //  Создаем магов
    var players = [];
    for (var i = 0; i < quantity; i++) {
      players.push(generateWizardObject());
    }
    return players;
  };

  var players = createWizards(window.constants.PLAYERS_QUANTITIY);
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');


  var fragment = document.createDocumentFragment();

  for (var i = 0; i < players.length; i++) {
    fragment.appendChild(renderWizard(players[i]));
  }

  similarListElement.appendChild(fragment);
})();
