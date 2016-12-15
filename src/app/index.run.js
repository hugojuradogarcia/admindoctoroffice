(function() {
  'use strict';

  angular
    .module('doctorOffice')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
