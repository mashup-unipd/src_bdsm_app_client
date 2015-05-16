(function(){
    'use strict';

    /**
     * Name: about.routes.js
     * Author: Carnovalini Filippo
     * Mail: facoch42@gmail.com
     * Desc: modulo che gestisce il routing della documentazione delle API
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-15  Carnovalini Filippo    codifica modulo
     * -----------------------------------------------------------
     *
     */

    /**
     *
     * @param $stateProvider
     */
    var ApiDocsRoutes = function($stateProvider) {

        $stateProvider
            .state('api-docs',{
                templateUrl:'views/public/api-docs.html',
                url:'/api-docs',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'app',
                            files:[
                                'scripts/controllers/public/api_docs/api-docs.ctrl.js'
                            ]
                        });
                    }
                }
            });

    };

    angular
        .module('app.public.api-docs.routes', [
            'ui.router'
        ])

        .config(['$stateProvider', ApiDocsRoutes]);

})();
