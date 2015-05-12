(function(){
    'use strict';

    /**
     * Name: app/scripts/controller/token_config/token-config.routes.js
     * Author: MashUp
     * Mail: info@mashup-unipd.it
     * Desc: modulo che gestisce il routing della pagina che fornisce un token d'accesso per utilizzare le API pubbliche
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-08  Tesser Paolo    codifica modulo
     * -----------------------------------------------------------
     *
     */

    /**
     *
     * @param $stateProvider
     */
    var TokenConfigRoutes = function($stateProvider) {

        $stateProvider
            .state('dashboard.token-config',{
                url:'/token-config',
                controller: 'TokenConfigCtrl',
                templateUrl:'views/user/token-config.html',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'app',
                            files:[
                                'scripts/controllers/user/token_config/token-config.ctrl.js'
                            ]
                        });
                    }
                }
            });
    };


    angular
        .module('app.user.token-config.routes', [
            'ui.router'
        ])

        .config(['$stateProvider', TokenConfigRoutes]);

})();
