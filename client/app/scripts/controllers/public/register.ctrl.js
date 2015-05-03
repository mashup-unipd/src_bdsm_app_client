(function(){
  'use strict';

  /**
   * Name: register.ctrl.js
   * Author: Tesser Paolo
   * Mail: p.tesser921@gmail.com
   * Desc: controller che gestisce le operazioni di autenticazione al sistema
   *
   * Modify
   * Version  Date        Author          Desc
   * ==========================================================
   * 0.0.1    2015-04-06  Tesser Paolo    codifica modulo
   * -----------------------------------------------------------
   *
   */

  /**
   * @ngdoc function
   * @name clientApp.controller:RegisterCtrl
   * @description
   * # RegisterCtrl
   * Controller of the clientApp
   */

  var RegisterCtrl = function(){

    var vm = this;
    vm.credentials = {
      username: '',
      mail: '',
      pwd: '',
      confirmPwd: ''
    };

    vm.register = register;

    function register(){
      console.log("OK");

      console.log("Registrazione effettuata con successo!");
    }

  };

  RegisterCtrl.$inject = [];

  angular.module('sbAdminApp').controller('RegisterCtrl', RegisterCtrl);

})();
