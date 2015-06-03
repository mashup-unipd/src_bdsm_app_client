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

  var RegisterCtrl = function(authService){

	  var vm = this;

	  vm.credentials = {
		  username: '',
		  email: '',
		  pwd: '',
		  pwd_repeat: ''
	  };

	  vm.matchPwd = false;
	  vm.registerSuccess = false;
	  vm.registerError = false;

	  vm.register = register;
	  vm.checkMatchPwd = checkMatchPwd;
		vm.checkUsername = checkUsername;
		vm.checkPwd = checkPwd;

	  /////////////////

	  /**
	   * This function check the value passed and call Auth service to register a new User
	   * TODO (test):
	   * @param cred : credentials insert by a User not authenticated
	   */
	  function register( cred ){

		  if (checkMatchPwd(cred.pwd, cred.pwd_repeat)){

			  authService.register(cred)

					.then(function(){
					  vm.registerSuccess = true;

					  // reset values in the form's fields
					  vm.credentials = {
						  username: '',
						  email: '',
						  pwd: '',
						  pwd_repeat: ''
					  };
						vm.matchPwd = false;

				  })

				  .catch(function(){
					  vm.registerError = true;
				  });

		  }

    }

	  /**
	   *
	   * This function check if the value new password match with confirm new password
	   * TODO (test): should return true if passwords matches, else false. Test with a successful example and with a bad example
	   * @param pwd : password that new User wants
	   * @param confirmPwd : password that confirm prec password
	   * @returns {boolean} : true if pwd match confirmPwd, else false
	   */
	  function checkMatchPwd(pwd, confirmPwd){
			// set to true bool if doesn't match
			vm.matchPwd = pwd !== confirmPwd;
		  return pwd === confirmPwd;
	  }

		/**
		 * TODO
		 * TODO (test):
		 * @param username
		 */
		function checkUsername(username){

		}

		/**
		 * TODO
		 * TODO (test):
		 * @param pwd
		 */
		function checkPwd(pwd){

		}


  };

  RegisterCtrl.$inject = ['authService'];

  angular
	  .module('app')
	  .controller('RegisterCtrl', RegisterCtrl);

})();
