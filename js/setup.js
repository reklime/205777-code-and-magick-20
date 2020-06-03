'use strict';
var PLAYERS_QUANTITIY = 4;

var WIZARDS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARDS_SECOND_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COATS_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];
var generateRandomNumber = function (min, max) {
  var randomNumber = min + Math.random() * (max - min);
  return Math.floor(randomNumber);
};

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};


var generateWizardObject = function () {
//  Генерируем элемент для массива магов
  var obj = {};
  obj.name = WIZARDS_NAMES[generateRandomNumber(0, WIZARDS_NAMES.length)] + ' ' + WIZARDS_SECOND_NAMES[generateRandomNumber(0, WIZARDS_NAMES.length)];
  obj.coatColor = COATS_COLORS[generateRandomNumber(0, COATS_COLORS.length)];
  obj.eyesColor = EYES_COLORS[generateRandomNumber(0, EYES_COLORS.length)];
  return obj;
};

var createWizards = function () {
//  Создаем магов
  for (var i = 0; i < PLAYERS_QUANTITIY; i++) {
    players.push(generateWizardObject());
  }
};


var setup = document.querySelector('.setup');

var players = [];


var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');

createWizards();

var fragment = document.createDocumentFragment();

for (var i = 0; i < players.length; i++) {
  fragment.appendChild(renderWizard(players[i]));
}

similarListElement.appendChild(fragment);
setup.querySelector('.setup-similar').classList.remove('hidden');
setup.classList.remove('hidden');
