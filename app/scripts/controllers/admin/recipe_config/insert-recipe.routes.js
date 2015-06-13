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
     * 0.0.2	2015-05-12	Tesser Paolo	inserimento js relativi al model delle recipe
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
										login: function(authService){
											authService.isNotLogged();
										},

                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad
													.load({
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
