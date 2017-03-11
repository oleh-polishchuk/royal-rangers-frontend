(() => {

    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$httpProvider', '$logProvider', '$locationProvider'];
    function config($httpProvider, $logProvider, $locationProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
        $httpProvider.defaults.withCredentials = true;

        // Configure application logs messages
        $logProvider.debugEnabled(true);

        // Configure prefix for hash part
        $locationProvider.hashPrefix('');
    }
})();
