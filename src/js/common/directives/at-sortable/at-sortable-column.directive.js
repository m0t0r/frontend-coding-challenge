(function () {
  'use strict';

  angular
    .module('alchemytec.directives')
    .directive('atSortableColumn', atSortableColumn);

  function atSortableColumn() {
    return {
      require: '^atSortableManager',
      scope: {
        column: '@atSortableColumn',
        default: '@'
      },
      link: atSortableColumnLinkFn
    };

    function atSortableColumnLinkFn(scope, el, attrs, atSortableMngCtrl) {
      var icon = el.find('.icon');
      scope.order = null;

      if(scope.default) {
        atSortableMngCtrl.sortBy(el);
        scope.$apply();
      }

      el.bind('click', function() {
        atSortableMngCtrl.sortBy(el);
        scope.$apply();
      });

      scope.toggleChevronClass = function() {
        if(scope.order === 'asc') {
          icon.removeClass('chevron-up');
          icon.addClass('chevron-down');
        } else {
          icon.removeClass('chevron-down');
          icon.addClass('chevron-up');
        }
      };

      scope.removeChevronClass = function() {
        icon.removeClass('chevron-up');
        icon.removeClass('chevron-down');
      };
    }
  }

}());
