(function() {

  'use strict';

  var MilesToKilometers = function() {};

  MilesToKilometers.prototype.get = function(x) {
    if(typeof x !== "number") {
      return 'invalid input';
    } else {
      return x * 1.60934;
    }
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = MilesToKilometers;
    } else {
      exports.MilesToKilometers = MilesToKilometers;
    }
  } else {
    window.MilesToKilometers = MilesToKilometers;
  }

})();
