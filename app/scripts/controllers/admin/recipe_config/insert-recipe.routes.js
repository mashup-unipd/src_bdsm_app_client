(function(){
    'use strict';

    /**
     * Name: app/scripts/controllers/admin/recipe_config/insert-recipe.routes.js
     * Author: MashUp
     * Mail: p.tesser921@gmail.com
     * Desc: modulo che gestisce il routing per la pagina di inserimento di nuove Recipe
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
    var InsertRecipeRoutes = function($stateProvider) {

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

        .config(['$stateProvider', InsertRecipeRoutes]);

})();
