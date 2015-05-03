(function(){
  'use strict';

  /**
   * Name: public.routes.js
   * Author: Tesser Paolo
   * Mail: p.tesser921@gmail.com
   * Desc: modulo che gestisce il routing più esterno dell'applicazione, differenzia tra utente autenticato e non,
   *       inglobando i moduli per gestire tutte le viste degli Utente autenticati e degli amministratori
   *
   * Modify
   * Version  Date        Author          Desc
   * ==========================================================
   * 0.0.1    2015-04-04  Tesser Paolo    codifica modulo
   * -----------------------------------------------------------
   *
   */

  /**
   *
   * @param $stateProvider
   * @param $urlRouterProvider
   */
  var publicConfigRoutes = function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      /* User not authenticated */
      .state('login',{
        url: '/login',
        templateUrl: '../../../views/public/login.html'
        /* controller: 'LoginCtrl as lc' */
      })
      .state('register',{
        url: '/register',
        templateUrl: '../../../views/public/register.html'
        /* controller: 'RegisterCtrl as rc' */
      })

      /* Normal User that is authenticated */
      .state('main',{
        abstract: true,
        views: {
          '':{
            templateUrl: '../../../views/user/index_main.html'
          }

          /* TODO: delete because now we use two directives for header and footer
          'menumain@main': {
            templateUrl: '../../../views/user/menu.html'
          },
          'footermain@main':{
            templateUrl: '../../../views/user/footer_main.html'
          }
          */
        }
      })
      .state('main.admin',{ /* TODO: don't work child state recipeConfigRoute */
        abstract: true
      })
  };


  angular.module('routeApp', ['ui.router','homeRouteApp',
    'chartsRouteApp','settingsRouteApp','recipeRouteApp',
    'recipeConfigRouteApp'])

    .config(['$stateProvider', '$urlRouterProvider', publicConfigRoutes]);

})();
