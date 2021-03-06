(() => {

    'use strict';

    angular
        .module('app')
        .controller('LibraryController', LibraryController);

    LibraryController.$inject = ['$log'];
    function LibraryController($log) {
        const vm = this;

        activate();

        ///

        function activate() {
            $log.debug('Init LibraryController ...');
        }
    }
})();