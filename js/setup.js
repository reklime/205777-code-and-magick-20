'use strict';
window.setup = (function () {


  var setup = document.querySelector('.setup');
  setup.querySelector('.setup-similar').classList.remove('hidden');

  // setup.classList.remove('hidden');

  // tasc constants
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');
 

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


  window.colorize(wizardCoat, window.constants.COATS_COLORS, wizardCoatInput);
  window.colorize(wizardEyes, window.constants.EYES_COLORS, wizardEyesInput);
  window.colorize(fireball, window.constants.FIREBALL_COLORS, fireballInput);

})();
