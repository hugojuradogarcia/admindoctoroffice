(function() {
    'use strict';

    angular
        .module('doctorOffice')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            /*.when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })*/
            .when('/', {
            templateUrl: 'app/register/register.html',
            controller: 'RegisterController',
            controllerAs: 'register'
        })
            .when('/register', {
            templateUrl: 'app/register/register.html',
            controller: 'RegisterController',
            controllerAs: 'register'
        })
            .when('/patient', {
            templateUrl: 'app/patient/patient.html',
            controller: 'PatientController',
            controllerAs: 'patient'
        })
            .when('/report', {
            templateUrl: 'app/report/report.html',
            controller: 'ReportController',
            controllerAs: 'report'
        })
            .otherwise({
            redirectTo: '/'
        });
    }

})();
