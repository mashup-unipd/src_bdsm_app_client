(function(){
    'use strict';

    /**
     * Name: settings.routes.js
     * Author: Tesser Paolo
     * Mail: p.tesser921@gmail.com
     * Desc: modulo che gestisce il routing più esterno dell'applicazione, differenzia tra utente autenticato e non,
     *       inglobando i moduli per gestire tutte le viste degli Utente autenticati e degli amministratori
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-04  Tesser Paolo    codifica modulo
     * -----------------------------------------------------------
     *
     */

    /**
     *
     * @param $stateProvider
     */
    var SettingsConfigRoutes = function($stateProvider) {

        $stateProvider
            .state('dashboard.settings',{
                url:'/settings',
                controller: 'SettingsCtrl',
                templateUrl:'views/user/settings.html',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'app',
                            files:[
                                'scripts/controllers/user/settings/settings.ctrl.js'
                            ]
                        });
                    }
                }
            });
    };


    angular
        .module('app.user.settings.routes', [
            'ui.router'
        ])

        .config(['$stateProvider', SettingsConfigRoutes]);

})();
