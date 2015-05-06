(function(){
  'use strict';

  /**
   * Name: login.ctrl.js
   * Author: Tesser Paolo
   * Mail: p.tesser921@gmail.com
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
   * @name clientApp.controller:LoginCtrl
   * @description
   * # LoginCtrl
   * Controller of the clientApp
   */

  var LoginCtrl = function($stateParams, $location){

    /* captured 'this' because may change its context */
    var vm = this; /* like View Model */

    vm.credentials = {
      email: 'info@mashup-unipd.it',
      pwd: ''
    };

    vm.login = login;

    /**
     *
     * @param credentials
     */
    function login( credentials ){

        console.log('OK');
        console.log('Email: ' + credentials.email);
        console.log('Pwd: ' + credentials.pwd);

        if (credentials.email === 'info@mashup-unipd.it' && credentials.pwd === 'pwd')
            $location.path('/dashboard/home');


    }

  };


  LoginCtrl.$inject = ['$stateParams', '$location'];

  angular
      .module('app')
      .controller('LoginCtrl', LoginCtrl);

})();
