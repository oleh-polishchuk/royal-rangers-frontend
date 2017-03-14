(() => {

    'use strict';

    angular
        .module('app')
        .config(AppSegment);

    AppSegment.$inject = ['$routeSegmentProvider', '$routeProvider'];
    function AppSegment($routeSegmentProvider, $routeProvider) {
        $routeSegmentProvider.options.autoLoadTemplates = true;
        $routeProvider.otherwise({redirectTo: '/library'});
    }
})();