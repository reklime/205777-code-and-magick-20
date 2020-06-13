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

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var MIN_WIZARD_NAME_LENGTH = 2;
var MAX_WIZARD_NAME_LENGTH = 25;

var generateRandomNumber = function (min, max) {
  var randomNumber = min + Math.random() * (max - min);
  return Math.floor(randomNumber);
};

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
  obj.name = WIZARDS_NAMES[generateRandomNumber(0, WIZARDS_NAMES.length)] + ' ' + WIZARDS_SECOND_NAMES[generateRandomNumber(0, WIZARDS_NAMES.length)];
  obj.coatColor = COATS_COLORS[generateRandomNumber(0, COATS_COLORS.length)];
  obj.eyesColor = EYES_COLORS[generateRandomNumber(0, EYES_COLORS.length)];
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


var setup = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');

var players = createWizards(PLAYERS_QUANTITIY);

var fragment = document.createDocumentFragment();

for (var i = 0; i < players.length; i++) {
  fragment.appendChild(renderWizard(players[i]));
}

similarListElement.appendChild(fragment);
setup.querySelector('.setup-similar').classList.remove('hidden');

// setup.classList.remove('hidden');

// tasc constants
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var wizardNameInput = setup.querySelector('.setup-user-name'); // Инпут с именем персонажа

var wizardPic = document.querySelector('.setup-wizard');
var wizardCoat = wizardPic.querySelector('.wizard-coat');
var wizardCoatInput = setup.querySelector('input[name=coat-color]');

var wizardEyes = wizardPic.querySelector('.wizard-eyes');
var wizardEyesInput = setup.querySelector('input[name=eyes-color]');

var fireball = setup.querySelector('.setup-fireball-wrap');
var fireballInput = setup.querySelector('input[name=fireball-color]');

// Создадим функцию проверки в фокусе ли элемент. hasFocus не сработал
var isFocused = function (el) {
  if (document.activeElement === el) {
    return true;
  } else {
    return false;
  }
};


var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && isFocused(wizardNameInput) === false) {
    evt.preventDefault();
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

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

wizardNameInput.addEventListener('invalid', function () {
  if (wizardNameInput.validity.valueMissing) {
    wizardNameInput.setCustomValidity('Обязательное поле');
  } else {
    wizardNameInput.setCustomValidity('');
  }
});

wizardNameInput.addEventListener('input', function () {
  var valueLength = wizardNameInput.value.length;
  if (valueLength < MIN_WIZARD_NAME_LENGTH) {
    wizardNameInput.setCustomValidity('Ещё ' + (MIN_WIZARD_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_WIZARD_NAME_LENGTH) {
    wizardNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_WIZARD_NAME_LENGTH) + ' симв.');
  } else {
    wizardNameInput.setCustomValidity('');
  }
});

wizardCoat.addEventListener('click', function () {
  var rnd = [generateRandomNumber(0, COATS_COLORS.length)];
  wizardCoat.style.fill = COATS_COLORS[rnd];
  wizardCoatInput.value = COATS_COLORS[rnd];
});

wizardEyes.addEventListener('click', function () {
  var rnd = [generateRandomNumber(0, EYES_COLORS.length)];
  wizardEyes.style.fill = EYES_COLORS[rnd];
  wizardEyesInput.value = EYES_COLORS[rnd];
});

fireball.addEventListener('click', function () {
  var rnd = [generateRandomNumber(0, FIREBALL_COLORS.length)];
  fireball.style.background = FIREBALL_COLORS[rnd];
  fireballInput.value = FIREBALL_COLORS[rnd];
});

openPopup();
