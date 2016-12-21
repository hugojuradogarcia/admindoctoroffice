'use strict';

angular
    .module('doctorOffice')
    .controller('RegisterController', RegisterController)
    .config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .backgroundPalette('grey')
        .dark();

});

function RegisterController( $scope, $mdDialog ){

    $scope.arrayAddress = [];
    $scope.status = '  ';
    $scope.customFullscreen = false;

    $scope.arrayAddress.push({
        "question": "Dirección del consultorio completa 1",
        "name": "address1"
    });



    $scope.addAddress = function(){

        var countAddress = $scope.arrayAddress.length + 1;

        $scope.arrayAddress.push({
            "question": "Dirección del consultorio completa " + countAddress,
            "name": "address" + countAddress
        });
    };


    /*$scope.showAdvanced = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'app/template/dialogSchedule.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
            .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
    };*/

    $scope.gridOptions = {
        data: [], //required parameter - array with data
        //optional parameter - start sort options
        sort: {
            predicate: 'companyName',
            direction: 'asc'
        }
    };

    $scope.week = [
        {"day": "Lunes",
         "hour_init": "",
         "hour_final": "",
         "enable": false},
        {"day": "Martes",
         "hour_init": "",
         "hour_final": "",
         "enable": false},
        {"day": "Miercoles",
         "hour_init": "",
         "hour_fina l": "",
         "enable": false},
        {"day": "Jueves",
         "hour_init": "",
         "hour_final": "",
         "enable": false},
        {"day": "Viernes",
         "hour_init": "12:00:00",
         "hour_final": "",
         "enable": false},
        {"day": "Sábado",
         "hour_init": "",
         "hour_final": "",
         "enable": false},
        {"day": "Domingo",
         "hour_init": "",
         "hour_final": "",
         "enable": false}
    ];

    /*function DialogController($scope, $mdDialog) {        
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };

        $scope.selected = [];

        $scope.query = {
            order: 'name',
            limit: 5,
            page: 1
        };

        function success(desserts) {
            $scope.desserts = desserts;
        }

        $scope.getDesserts = function () {
            $scope.promise = $nutrition.desserts.get($scope.query, success).$promise;
        };



    }*/
}




