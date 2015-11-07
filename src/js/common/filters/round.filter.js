(function () {
  'use strict';

  angular
    .module('alchemytec.filters')
    .filter('round', roundFilter);
  
  function roundFilter() {
    return function(input) {
      return Math.round(input / 100);
    }
  }

}());
