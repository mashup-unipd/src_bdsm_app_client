(function(){
    'use strict';

    /**
     * Name: about.routes.js
     * Author: Carnovalini Filippo
     * Mail: facoch42@gmail.com
     * Desc: modulo che gestisce il routing dell'about
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
    var AboutRoutes = function($stateProvider) {

        $stateProvider
            .state('about',{
                templateUrl:'views/public/about.html',
                url:'/about',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'app',
                            files:[
                                'scripts/controllers/public/about/about.ctrl.js'
                            ]
                        });
                    }
                }
            });

    };

    angular
        .module('app.public.about.routes', [
            'ui.router'
        ])

        .config(['$stateProvider', AboutRoutes]);

})();
