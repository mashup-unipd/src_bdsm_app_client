(function(){

	'use strict';

	/**
	 * Name: app/scripts/model/services/auth/auth.service.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-13  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc service
	 * @name app.auth.services.module.AuthService
	 * @description
	 * # AuthService
	 * Factory in the app.auth.services.module
	 */


	function authService($location, $auth){

		// use module reveal pattern when it's not necessary update primitive values
		var factory = {
			login: login,
			register: register,
			deleteAccount: deleteAccount,
			isLogged: isLogged,
			updateSettingsAccount: updateSettingsAccount
		};

		return factory;

		///////////////

		/**
		 * TODO
		 * @param credentials
		 */
		function login( credentials ){
			// TODO: use ng-auth
			// example: $auth.submitLogin();

			if (credentials.email === 'info@mashup-unipd.it' && credentials.pwd === 'pwd'){
				$location.path('/recipe');
			}

		}

		/**
		 * TODO
		 * @param credentials
		 */
		function register( credentials ){

			var registerCallPromise = $auth.submitRegistration(credentials);

			return registerCallPromise;

		}


		function deleteAccount(){
			console.log('Deleted');
			$location.path('/login');
		}

		/**
		 * TODO
		 */
		function isLogged(){
			// TODO: use ng-auth
			// example: $auth.validateUser();
		}

		/**
		 * TODO
		 * @param credToChange
		 */
		function updateSettingsAccount(credToChange){
			// $auth.updateAccount(credToChange);
		}

	}

	authService.$inject = ['$location', '$auth'];

	angular
		.module('app.auth.services.module')
		.factory('authService', authService);

})();