(function () {
  'use strict';

  angular
    .module('alcPlatform.reports')
    .directive('atLabourcostReport', atLabourcostReport);

  function atLabourcostReport() {
    return {
      scope: {},
      templateUrl: 'src/js/apps/platform/reports/at-labourcost-report/at-labourcost-report.html'
      //template: 'at-labourcost-report'
    }
  }

}());
