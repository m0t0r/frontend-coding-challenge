describe('round filter', function() {
  var roundFilter;

  beforeEach(function () {
    angular.mock.module('alchemytec.filters');

    angular.mock.inject(function($filter) {
      roundFilter = $filter('round');
    })
  });

  it('should be able to round up to hundreds', function() {

    expect(roundFilter(4815766)).toBe(48158);
  });

  it('should be able to round down to hundreds', function() {

    expect(roundFilter(440936)).toBe(4409);
  });
});
