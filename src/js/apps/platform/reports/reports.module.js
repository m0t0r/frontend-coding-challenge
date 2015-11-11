(function () {
  'use strict';

  angular
    .module('alcPlatform.reports', ['ngAnimate'])
    .run(runBlock);

  runBlock.$inject = ['appsections', 'navigation'];

  function runBlock(appsections, navigation) {
    // Add app button
    appsections.add({
      title: "Reports",
      icon: "app-reports",
      app: "report-labour-cost",
      accesslist: [ "reports" ]
    });

    navigation.add({
      reports: {
        pagetitle: "Reports",
        mainheading: "Labour cost report",
        labourreport: {
          title: "Labour cost report", icon: null,
          app: "report-labour-cost", command: null,
          action: false, back: false
        }
      }
    });
  }
}());
