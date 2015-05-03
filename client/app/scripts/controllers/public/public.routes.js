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

      $urlRouterProvider.otherwise('/dashboard/home');

      $stateProvider
          /* TODO (p.tesser921@gmail.com): tenere in questo file */
          .state('login',{
              templateUrl:'views/public/login.html',
              url:'/login',
              resolve: {
                  loadMyFiles: function($ocLazyLoad) {
                      return $ocLazyLoad.load({
                          name:'sbAdminApp',
                          files:[
                              'scripts/controllers/public/login.ctrl.js'
                          ]
                      });
                  }
              }
          })
          .state('register',{
              templateUrl:'views/public/register.html',
              url:'/register',
              resolve: {
                  loadMyFiles: function($ocLazyLoad) {
                      return $ocLazyLoad.load({
                          name:'sbAdminApp',
                          files:[
                              'scripts/controllers/public/register.ctrl.js'
                          ]
                      });
                  }
              }
          })

          .state('dashboard', {
              url:'/dashboard',
              templateUrl: 'views/dashboard/main.html',
              resolve: {
                  loadMyFiles: function($ocLazyLoad){
                      return $ocLazyLoad.load(
                          {
                              name:'sbAdminApp',
                              files:[
                                  'scripts/directives/header/header.js',
                                  'scripts/directives/header/header-notification/header-notification.js',
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
                          $ocLazyLoad.load(
                              {
                                  name:'ngTouch',
                                  files:['bower_components/angular-touch/angular-touch.js']
                              });
                  }
              }
          })

          /* TODO (p.tesser921@gmail.com): spostare in un file separato, uno state per ogni file */
          .state('dashboard.home',{
              url:'/home',
              controller: 'MainCtrl',
              templateUrl:'views/dashboard/home.html',
              resolve: {
                  loadMyFiles:function($ocLazyLoad) {
                      return $ocLazyLoad.load({
                          name:'sbAdminApp',
                          files:[
                              'scripts/controllers/user/main.ctrl.js',
                              'scripts/directives/notifications/notifications.js',
                              'scripts/directives/dashboard/stats/stats.js'
                          ]
                      });
                  }
              }
          })
          .state('dashboard.new-recipe',{
              templateUrl:'../views/admin/new-recipe.html',
              url:'/new-recipe',
              resolve: {
                  loadMyFiles: function($ocLazyLoad) {
                      return $ocLazyLoad.load({
                          name:'sbAdminApp',
                          files:[
                              'scripts/controllers/admin/insert-recipe.ctrl.js'
                          ]
                      });
                  }
              }
          })
          .state('dashboard.favourites',{
              templateUrl:'../views/user/favourites.html',
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
                              name:'sbAdminApp',
                              files:['scripts/controllers/user/favourites.ctrl.js']
                          });
                  }
              }
          });
    };


  angular
      .module('app.public.routes', [
          'ui.router',
          'app.settings.routes'

      ])

      .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', PublicConfigRoutes]);

})();
