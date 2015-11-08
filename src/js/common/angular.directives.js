"use strict";

/******************************************************************************************

Angular Directives for use in common apps

******************************************************************************************/

require("./directives/spinnything.js");
require("./directives/clicktoggle.js");

var app = angular.module("alchemytec.directives", [
	"alchemytec.spinnything",
	"alchemytec.clicktoggle"
]);

require('./directives/at-sortable/at-sortable-manager.directive');
require('./directives/at-sortable/at-sortable-column.directive');
