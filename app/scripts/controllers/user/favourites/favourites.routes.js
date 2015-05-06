(function(){
    'use strict';

    /**
     * Name: recipe.routes.js
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
    var FavouritesConfigRoutes = function($stateProvider) {

        $stateProvider
            .state('dashboard.favourites',{
                templateUrl:'views/user/favourites.html',
                url:'/favourites',
                controller:'FavouritesCtrl',
                resolve: {
                    loadMyFiles: function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name:'chart.js',
                            files:[
                                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                                'bower_components/angular-chart.js/dist/angular-chart.css'
                            ]
                        }),
                            $ocLazyLoad.load({
                                name:'app',
                                files:['scripts/controllers/user/favourites/favourites.ctrl.js']
                            });
                    }
                }
            });
    };


    angular
        .module('app.user.favourites.routes', [
            'ui.router'
        ])

        .config(['$stateProvider', FavouritesConfigRoutes]);

})();
