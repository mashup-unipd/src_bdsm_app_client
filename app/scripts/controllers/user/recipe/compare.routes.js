(function(){
    'use strict';

    /**
     * Name: app/scripts/controllers/recipe/compare.routes.js
     * Author: MashUp
     * Mail: info@mashup-unipd.it
     * Desc: modulo che gestisce il routing della pagina delle metriche di una Recipe
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
    var CompareRoutes = function($stateProvider) {

        $stateProvider

            .state('dashboard.compare',{
                url: 'recipe/compare/:title',
                templateUrl:'views/user/compare.html',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'app',
                            files:[
                                'scripts/controllers/user/recipe/compare.ctrl.js'
                            ]
                        });
                    }
                }
            });
    };


    angular
        .module('app.user.compare.routes', [
            'ui.router',
            'app.user.metrics.charts.routes'
        ])

        .config(['$stateProvider', CompareRoutes]);

})();
