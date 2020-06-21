'use strict';

(function () {
  window.colorize = function (element, colors, inputEl) {
    element.addEventListener('click', function () {
      var color = window.utils.generateRandomNumber(0, colors.length);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = colors[color];
      } else {
        element.style.fill = colors[color];
      }
      inputEl.value = colors[color];
    });
  };
})();
