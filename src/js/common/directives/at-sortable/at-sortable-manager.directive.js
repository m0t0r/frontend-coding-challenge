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
        controller: atSortableManagerCtrl
      };

      atSortableManagerCtrl.$inject = ['$scope', '$element'];

      function atSortableManagerCtrl($scope, $element) {
        var ctrl = this, previousColumn, columns = [], unbindWatcher;

        // once sort data is loaded check on default column and sort it
        unbindWatcher = $scope.$watch('sortData', function(isSortDataLoaded) {
          if(isSortDataLoaded) {
            _.each(columns, function(column) {
              if(!!column.isolateScope().default) {
                ctrl.sortBy(column);
              }
            });

            columns.length = 0;
            unbindWatcher();
          }
        });

        this.registerColumn = function(column) {
          columns.push(column);
        };

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

          // add/remove separator for 'frozen' rows
          if(column.isolateScope().freezeValue) {
            if ($element.find('tbody tr.separator').length === 0) {
              angular.element($element.find('tbody tr')[0]).after('<tr class="separator"></tr>');
            }
          } else {
            angular.element($element.find('tbody tr.separator')).remove();
          }

          column.isolateScope().toggleChevronClass();
          previousColumn = column;
        };

        function toggleSortOrder(column) {
          if(column.isolateScope().order === 'asc') {
            $scope.sortData = sort(column).reverse();
            column.isolateScope().order = 'desc';
          } else {
            $scope.sortData = sort(column);
            column.isolateScope().order = 'asc';
          }

          if(column.isolateScope().freezeValue) {
            freezeRow(column);
          }
        }

        function sort(column) {
          return _.sortBy($scope.sortData, function(row) {
            if (typeof row[column.isolateScope().column] === 'string') {
              return row[column.isolateScope().column].toLowerCase();
            } else {
              return row[column.isolateScope().column];
            }
          });
        }

        function freezeRow(column) {
          var index, row;

          index  = _.findIndex($scope.sortData, function(row) {
            return row[column.isolateScope().column] == column.isolateScope().freezeValue;
          });

          row = $scope.sortData[index];
          $scope.sortData.splice(index, 1);
          $scope.sortData.unshift(row);
        }
      }
    }
}());
