(function(){
  'use strict';

  /**
   * Name: app/scripts/controllers/public/login/login.ctrl.js
   * Author: MashUp
   * Mail: info@mashup-unipd.it
   * Desc: controller che gestisce le operazioni di autenticazione al sistema
   *
   * Modify
   * Version  Date        Author          Desc
   * ==========================================================
   * 0.0.1    2015-04-04  Tesser Paolo    codifica modulo
   * -----------------------------------------------------------
   *
   */

  /**
   * @ngdoc function
   * @name app.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the app
   */

  // TODO: insert Auth Service as param
  var LoginCtrl = function($stateParams, $location){

    //captured 'this' because may change its context */
    var vm = this; // like View Model

    vm.credentials = {
      email: 'info@mashup-unipd.it',
      pwd: ''
    };

    vm.login = login;

    /**
     *
     * @param credentials : object with credentials about User that want login in the system
     */
    function login( credentials ){

        console.log('OK');
        console.log('Email: ' + credentials.email);
        console.log('Pwd: ' + credentials.pwd);

        if (credentials.email === 'info@mashup-unipd.it' && credentials.pwd === 'pwd')
            $location.path('/dashboard/home');


    }

  };


  LoginCtrl.$inject = ['$stateParams', '$location']; // TODO: inject Auth Service

  angular
      .module('app')
      .controller('LoginCtrl', LoginCtrl);

})();
