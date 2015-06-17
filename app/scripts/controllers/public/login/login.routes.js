(function(){
    'use strict';

    /**
     * Name: login.routes.js
     * Author: Tesser Paolo
     * Mail: p.tesser921@gmail.com
     * Desc: modulo che gestisce il routing più esterno dell'applicazione, differenzia tra utente autenticato e non,
     *       inglobando i moduli per gestire tutte le viste degli Utente autenticati e degli amministratori
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-09  Tesser Paolo    codifica modulo
     * -----------------------------------------------------------
     *
     */

    /**
     *
     * @param $stateProvider
     */
    var LoginConfigRoutes = function($stateProvider) {

        $stateProvider
            .state('login',{
                templateUrl:'views/public/login.html',
                url:'/login',
                resolve: {
										sign: function(authService){
											authService.isLogged();
										},

                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'app',
                            files:[
                                'scripts/controllers/public/login/login.ctrl.js'
                            ]
                        });
                    }
                }
            });

    };

    angular
        .module('app.public.login.routes', [
            'ui.router',
						'app.auth.services.module'
        ])

        .config(['$stateProvider', LoginConfigRoutes]);

})();
