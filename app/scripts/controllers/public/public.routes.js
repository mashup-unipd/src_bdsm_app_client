(function(){
  'use strict';

  /**
   * Name: app/scripts/controllers/public/public.routes.js
   * Author: MashUp
   * Mail: info@mashup-unipd.it
   * Desc: modulo che gestisce il routing più esterno dell'applicazione, differenzia tra utente autenticato e non,
   *       inglobando i moduli per gestire tutte le viste degli Utente autenticati e degli amministratori
   *
   * Modify
   * Version  Date        Author          Desc
   * ==========================================================
   * 0.0.1    2015-04-04  Tesser Paolo    code module
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

      $urlRouterProvider.otherwise('/login');

    };


  angular
      .module('app.public.routes', [
          'ui.router',
          'app.public.login.routes',
          'app.public.register.routes',
          'app.public.about.routes',
          'app.public.api-docs.routes',
					'app.auth.services.module'
      ])

      .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', PublicConfigRoutes]);

})();
