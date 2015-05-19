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
   * 0.0.2	  2015-05-13  Tesser Paolo	  insert service for authentication
   * -----------------------------------------------------------
   */

  /**
   * @ngdoc function
   * @name app.controller:RegisterCtrl
   * @description
   * # RegisterCtrl
   * Controller of the app
   *
   */

  // TODO: insert User model as param (maybe not necessaries)
  var RegisterCtrl = function( $location , authService){

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

		  if (checkMatchPwd(cred.pwd, cred.confirmPwd)){

			  authService.register(cred);

			  // TODO: if it fails do something

		  } else {
			  vm.matchPwd = true;
		  }

    	}

	  /**
	   * TODO: it's possible create a service with this function or something that can be shared with other controllers that do this check
	   * This function check if the value new password match with confirm new password
	   * @param newPwd : new password that User want change
	   * @parama confirmNewPwd : new password that it's used
	   * @returns {boolean} : true if newPwd match confirmNewPwd, else false
	   */
	  function checkMatchPwd(newPwd, confirmNewPwd){
		  return newPwd === confirmNewPwd;
	  }

  };

  RegisterCtrl.$inject = ['$location', 'authService']; // TODO: inject User model

  angular
	  .module('app')
	  .controller('RegisterCtrl', RegisterCtrl);

})();
