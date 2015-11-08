describe('round filter', function() {
  var roundFilter;

  beforeEach(function() {
    angular.mock.module('alchemytec.filters');

    angular.mock.inject(function($filter) {
      roundFilter = $filter('round');
    })
  });

  it('should be able to round up to tens in default case', function() {

    expect(roundFilter(93.77162629757785)).toBe(93.8);
  });

  it('should be able to round up to provided proportion', function() {

    expect(roundFilter(48.15766, 100)).toBe(48.16);
  });

  it('should be able to round down to provided proportion', function() {

    expect(roundFilter(44.0936, 10)).toBe(44.1);
  });

  it('should be able to truncate rounded whole number according to the proportion', function() {

    expect(roundFilter(4815766, 10, true)).toBe(481577);
    expect(roundFilter(4815766, 100, true)).toBe(48158);
  });
});
