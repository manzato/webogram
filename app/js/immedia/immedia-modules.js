'use strict';

(function() {
  angular.module('immediaServices', ['ngStorage']);
  angular.module('immediaControllers', ['ngStorage','immediaServices']);
})();
