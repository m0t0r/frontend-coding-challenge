(function () {
  'use strict';

  angular
    .module('alchemytec.filters')
    .filter('round', roundFilter);
  
  function roundFilter() {
    return function(input, proportion, truncate) {
      proportion = proportion || 10;

      if(truncate) {
        return Math.round(input / proportion);
      }

      return Math.round(input * proportion) / proportion;
    }
  }

}());
