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
			isLogged: isLogged
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
		 */
		function register( credentials ){
			// TODO: use ng-auth
			// example: $auth.submitRegistration();
		}

		/**
		 * TODO
		 */
		function isLogged(){
			// TODO: use ng-auth
			// example: $auth.validateUser();
		}

	}

	authService.$inject = ['$location', '$auth'];

	angular
		.module('app.auth.services.module')
		.factory('authService', authService);

})();