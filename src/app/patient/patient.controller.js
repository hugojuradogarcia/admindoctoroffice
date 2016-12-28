
'use strict';

angular
    .module( 'doctorOffice' )
    .controller( 'PatientController', PatientController )

function PatientController( $scope ){

    $scope.patientDischarge = new Date();
    $scope.maritalStatus = ["Soltero", "Casado"];
    
}