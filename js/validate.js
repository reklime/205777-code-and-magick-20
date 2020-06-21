'use strict';

(function () {
  var MIN_WIZARD_NAME_LENGTH = 2;
  var MAX_WIZARD_NAME_LENGTH = 25;
  var wizardNameInput = document.querySelector('.setup-user-name'); // Инпут с именем персонажа

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
})();
