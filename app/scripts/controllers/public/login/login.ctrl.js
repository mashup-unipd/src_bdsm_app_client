(function(){
  'use strict';

  /**
   * Name: app/scripts/controllers/public/login/login.ctrl.js
   * Author: MashUp
   * Mail: info@mashup-unipd.it
   * Desc: controller that manage system authentication in the login page
   *
   * Modify
   * Version  Date        Author          Desc
   * ==========================================================
   * 0.0.1    2015-04-04  Tesser Paolo    code module
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

  var LoginCtrl = function(authService){

      var vm = this;

	  vm.credentials = {
      	email: '',
      	pwd: ''
	  };

	  vm.login = login;

	  /////////////////////

	  /**
	   * This function check if the User credentials it's correct
	   * TODO (test): should execute going to success, credentials must be empty
	   * @param cred : object with credentials about User that want login in the system
	   */
	  function login( cred ){
		  // TODO: set User if credentials are correct
		  authService.login(cred);
	  }

  };


  LoginCtrl.$inject = ['authService'];

  angular
      .module('app')
      .controller('LoginCtrl', LoginCtrl);

})();
