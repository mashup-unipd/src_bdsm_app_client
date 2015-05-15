(function(){
    'use strict';

    /**
     * Name: app/scripts/controller/recipe_request/recipe-request.routes.js
     * Author: MashUp
     * Mail: info@mashup-unipd.it
     * Desc: modulo che gestisce il routing della pagina che permette ad un utente di effettuare richieste per
     *       delle nuove Recipe
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
    var RecipeRequestRoutes = function($stateProvider) {

        $stateProvider
            .state('dashboard.recipe-request',{
                url:'/recipe-request',
                controller: 'RecipeRequestCtrl',
                templateUrl:'views/user/recipe-request.html',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'app',
                            files:[
                                'scripts/controllers/user/recipe_request/recipe-request.ctrl.js'
                            ]
                        });
                    }
                }
            });
    };


    angular
        .module('app.user.recipe-request.routes', [
            'ui.router'
        ])

        .config(['$stateProvider', RecipeRequestRoutes]);

})();
