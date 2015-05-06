(function(){
    'use strict';

    /**
     * Name: insert-recipe.routes.js
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
    var AdminConfigRoutes = function($stateProvider) {

        $stateProvider

            .state('dashboard.new-recipe',{
                templateUrl:'views/admin/new-recipe.html',
                url:'/new-recipe',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'app',
                            files:[
                                'scripts/controllers/admin/recipe_config/insert-recipe.ctrl.js'
                            ]
                        });
                    }
                }
            });
    };


    angular
        .module('app.admin.insert-recipe.routes', [
            'ui.router'
        ])

        .config(['$stateProvider', AdminConfigRoutes]);

})();
