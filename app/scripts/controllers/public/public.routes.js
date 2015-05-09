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
   * @param $ocLazyLoadProvider
   */
  var PublicConfigRoutes = function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

      $ocLazyLoadProvider.config({
          debug: false,
          events: true
      });

      $urlRouterProvider.otherwise('/recipe');


    };


  angular
      .module('app.public.routes', [
          'ui.router',
          'app.public.login.routes',
          'app.public.register.routes'
      ])

      .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', PublicConfigRoutes]);

})();
