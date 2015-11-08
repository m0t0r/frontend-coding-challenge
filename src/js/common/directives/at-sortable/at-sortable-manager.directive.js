(function () {
  'use strict';

  angular
    .module('alchemytec.directives')
    .directive('atSortableManager', atSortableManager);

    function atSortableManager() {
      return {
        scope: {
          sortData: '='
        },
        controller: atSortableManagerCtrl,
        controllerAs: 'manage',
        bindToController: true
      };

      function atSortableManagerCtrl() {
        var manage = this, previousColumn;

        this.sortBy = function(column) {
          if(previousColumn === column) {
            toggleSortOrder(column);
          } else {
            column.isolateScope().order = 'desc';
            toggleSortOrder(column);
            if (previousColumn) {
              previousColumn.isolateScope().removeChevronClass();
            }
          }

          function toggleSortOrder(column) {
            if(column.isolateScope().order === 'asc') {
              manage.sortData = _.sortBy(manage.sortData, column.isolateScope().column).reverse();
              column.isolateScope().order = 'desc';
            } else {
              manage.sortData = _.sortBy(manage.sortData, column.isolateScope().column);
              column.isolateScope().order = 'asc';
            }
          }
          column.isolateScope().toggleChevronClass();
          previousColumn = column;
        }
      }
    }
}());
