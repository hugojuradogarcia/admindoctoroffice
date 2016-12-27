(function() {
    'use strict';

    angular
        .module( 'doctorOffice')
        .config( config )
        .config( translate )
        .config( themeCustom );

    /** @ngInject */
    function config( $logProvider, toastrConfig ) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;
    }

    function translate( $translateProvider ){
        $translateProvider.preferredLanguage('es');
    }
    
    function themeCustom( $mdThemingProvider ){
        // Configure a dark theme with primary foreground yellow

        $mdThemingProvider.theme( 'default' )
        .primaryPalette( 'light-blue' );
        //.backgroundPalette('blue')
    }

})();
