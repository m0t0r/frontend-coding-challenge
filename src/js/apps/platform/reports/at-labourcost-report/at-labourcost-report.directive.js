(function () {
  'use strict';

  angular
    .module('alcPlatform.reports')
    .directive('atLabourcostReport', atLabourcostReport);

  atLabourcostReport.$inject = ['$rootScope', 'restalchemy', 'navigation'];
  function atLabourcostReport($rootScope, $restalchemy, $navigation) {
    return {
      replace: true,
      scope: {},
      templateUrl: 'src/js/apps/platform/reports/at-labourcost-report/at-labourcost-report.html',
      controller: atLabourcostReportCtrl,
      controllerAs: 'vm',
      bindToController: true
    };

    function atLabourcostReportCtrl() {
      var vm = this;

      $navigation.select({
        forward: "reports",
        selected: "labourreport"
      });

      // Initialise the REST api
      var rest = $restalchemy.init({ root: $rootScope.config.api.labourstats.root });
      rest.api = $rootScope.config.api.labourstats;

      rest.at(rest.api.costs).get().then(function(costdata) {
        vm.costdata = _.union(costdata[0].directContractors, costdata[0].providers);
        vm.sortBy('name');
      });
      
      vm.sortBy = function(fieldName) {
          vm.costdata = _.sortBy(vm.costdata , fieldName);
      };
    }
  }

}());
