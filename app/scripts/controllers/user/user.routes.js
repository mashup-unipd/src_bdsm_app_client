(function(){
    'use strict';

    /**
     * Name: user.routes.js
     * Author: Tesser Paolo
     * Mail: p.tesser921@gmail.com
     * Desc: modulo che gestisce il routing più esterno dell'applicazione, differenzia tra utente autenticato e non,
     *       inglobando i moduli per gestire tutte le viste degli Utente autenticati e degli amministratori
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-04-04  Tesser Paolo    code module
     * -----------------------------------------------------------
     * 0.0.2	2015-05-13	Tesser Paolo	removed module angular-touch that breaks ng-click directive
	 * -----------------------------------------------------------
     */

    /**
     *
     * @param $stateProvider
     */
    var UserConfigRoutes = function($stateProvider) {

        $stateProvider

            .state('dashboard', {
                abstract: true,
                templateUrl: '../../../views/user/home.html',
                resolve: {
                    loadMyFiles: function($ocLazyLoad){
                        return $ocLazyLoad.load(
                            {
                                name:'app',
                                files:[
									'scripts/controllers/user/menu_second/menu-second.ctrl.js',
                                    'scripts/directives/header/header.js',
                                    'scripts/directives/header/header-notification/header-notification.js',
									'scripts/directives/header/header-notification/header-notification.ctrl.js',
                                    'scripts/directives/sidebar/sidebar.js',
                                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                                ]
                            }),
                            $ocLazyLoad.load(
                                {
                                    name:'toggle-switch',
                                    files:['bower_components/angular-toggle-switch/angular-toggle-switch.min.js',
                                        'bower_components/angular-toggle-switch/angular-toggle-switch.css'
                                    ]
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngAnimate',
                                    files:['bower_components/angular-animate/angular-animate.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngCookies',
                                    files:['bower_components/angular-cookies/angular-cookies.js']
                                }),
                            $ocLazyLoad.load(
                                {
									name:'ngResource',
                                    files:['bower_components/angular-animate/angular-animate.js']
                                }),
                            $ocLazyLoad.load(
                                {
                                    name:'ngSanitize',
                                    files:['bower_components/angular-sanitize/angular-sanitize.js']
                                }),
							$ocLazyLoad.load({
									name:'chart.js',
									files:[
										'bower_components/angular-chart.js/dist/angular-chart.min.js',
										'bower_components/angular-chart.js/dist/angular-chart.css'
									]
							});
                    }
                }
            })

    };


    angular
        .module('app.user.routes', [
            'ui.router',
            'app.user.recipe.routes', /* modulo che gestisce il routing delle recipe */
            'app.user.metrics.routes', /* modulo che gestisce il routing delle metriche, figlio delle recipe */
            'app.user.compare.routes', /* modulo che gestisce il routing dei confronti, figlio delle recipe */
            'app.user.favourites.routes', /* modulo che gestisce il routing dei favourites */
            'app.user.settings.routes', /* modulo che gestisce il routing delle impostazioni di profilo  */
            'app.user.token-config.routes', /* modulo che gestisce il routing della pagine che fornisce un token per le API  */
            'app.user.recipe-request.routes' /* modulo che gestisce il routing della pagina di richiesta di nuove Recipe */
        ])

        .config(['$stateProvider', UserConfigRoutes]);

})();
