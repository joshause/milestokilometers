(function() {

  'use strict';

  var MilesToKilometers = require('../milestokilometers.js');

  describe('milestokilometers.js', function() {

    it('is a thing', function() {
      expect(MilesToKilometers).toBeDefined();
    });

    describe('.get()', function() {

      it('returns number of kilometers for number of miles given', function() {

        var mtk = new MilesToKilometers();
        var input = 1;
        var output = 1.60934;

        expect(
          mtk.get(input)
        ).toEqual(
          output
        );

      });

    });

  });

})();
