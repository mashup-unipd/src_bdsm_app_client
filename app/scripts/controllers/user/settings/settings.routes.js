(function(){
    'use strict';

    /**
     * Name: app/scripts/controller/settings/settings.routes.js
     * Author: MashUp
     * Mail: info@mashup-unipd.it
     * Desc: modulo che gestisce il routing della pagine delle impostazioni personali dell'utente
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
