(function(){
  'use strict';

  /**
   * Name: app/scripts/controllers/public/register/register.ctrl.js
   * Author: MashUp
   * Mail: info@mashup-unipd.it
   * Desc: controller che gestisce le operazioni di autenticazione al sistema
   *
   * Modify
   * Version  Date        Author          Desc
   * ==========================================================
   * 0.0.1    2015-04-06  Tesser Paolo    code module
   * -----------------------------------------------------------
   *
   */

  /**
   * @ngdoc function
   * @name app.controller:RegisterCtrl
   * @description
   * # RegisterCtrl
   * Controller of the app
   *
   */

  // TODO: insert User model, Auth service as params
  var RegisterCtrl = function(){

	  var vm = this;

	  vm.credentials = {
		  username: '',
		  mail: '',
		  pwd: '',
		  confirmPwd: ''
	  };
	  vm.matchPwd = false;
	  vm.register = register;

	  /////////////////

	  /**
	   * This function check the value passed and call Auth service to register a new User
	   * @param cred : credentials insert by a User not authenticated
	   */
	  function register( cred ){
		  console.log("Inizio procedura di registrazione.");

		  // TODO: check if the two password match
		  console.log(cred.username);
		  console.log(cred.mail);

		  console.log("Registrazione effettuata con successo!");
    	}

  };

  RegisterCtrl.$inject = []; // TODO: inject User model, Auth service

  angular.module('app').controller('RegisterCtrl', RegisterCtrl);

})();
