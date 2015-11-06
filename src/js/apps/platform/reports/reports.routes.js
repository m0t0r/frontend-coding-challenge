(function () {
  'use strict';

  angular
    .module('alcPlatform.reports')
    .config(reportsRoutes);

  reportsRoutes.$inject = ['$routeProvider'];

  function reportsRoutes($routeProvider) {
    $routeProvider
      .when('/report-labour-cost', {
        template: '<at-labourcost-report></at-labourcost-report>'
      });
  }

}());
