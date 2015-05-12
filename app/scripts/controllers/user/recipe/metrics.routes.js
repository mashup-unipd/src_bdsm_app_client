(function(){
    'use strict';

    /**
     * Name: app/scripts/controllers/recipe/metrics.routes.js
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
    var MetricsConfigRoutes = function($stateProvider) {

        $stateProvider

            .state('dashboard.metrics',{
                templateUrl:'views/user/metrics.html',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'app',
                            files:[
                                'scripts/controllers/user/recipe/metrics.ctrl.js'
                            ]
                        });
                    }
                }
            });
    };


    angular
        .module('app.user.metrics.routes', [
            'ui.router'
        ])

        .config(['$stateProvider', MetricsConfigRoutes]);

})();
