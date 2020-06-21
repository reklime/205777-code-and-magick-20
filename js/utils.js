'use strict';
window.utils = (function () {
  var generateRandomNumber = function (min, max) {
    var randomNumber = min + Math.random() * (max - min);
    return Math.floor(randomNumber);
  };
  return {
    generateRandomNumber: generateRandomNumber
  };
})();
