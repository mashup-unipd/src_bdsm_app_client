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
	 * 0.0.2	2015-05-18	Tesser Paolo	add logout method
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


	function authService($location, $auth, localStorageService){

		// use module reveal pattern when it's not necessary update primitive values
		var factory = {
			login: login,
			logout: logout,
			register: register,
			deleteAccount: deleteAccount,
			isLogged: isLogged,
			updateSettingsAccount: updateSettingsAccount,
			getAccountInformation: getAccountInformation
		};

		return factory;

		///////////////

		/**
		 * TODO
		 * TODO (test):
		 * @param credentials
		 */
		function login( credentials ){

			var loginCallPromise = $auth.submitLogin(credentials);

			loginCallPromise
				.then(function(resp){
						console.log(resp);
						// TODO: change
						if (resp.oauth_token !== undefined){
							// save some account's information
							localStorageService.set('cred', resp);
							// redirect to Home page
							$location.path('/recipe');
						}

				})
				.catch(function(resp){

				});

			return loginCallPromise;

		}

		/**
		 * TODO
		 * TODO (test):
		 * @param credentials
		 */
		function register( credentials ){

			var registerCallPromise = $auth.submitRegistration(credentials);

			return registerCallPromise;

		}

		/**
		 * TODO
		 * TODO (test)
		 */
		function deleteAccount(){
			console.log('Deleted');
			$location.path('/login');
		}

		/**
		 * TODO
		 * TODO (test):
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


		/**
		 *
		 * @returns {*}
		 */
		function getAccountInformation(){
			return localStorageService.get('cred');
		}

		/**
		 * TODO
		 * TODO (test):
		 */
		function logout(){
			// remove all data from localStorage when something exit to the system
			localStorageService.clearAll();
			$location.path('/login');
		}

	}

	authService.$inject = ['$location', '$auth', 'localStorageService'];

	angular
		.module('app.auth.services.module')
		.factory('authService', authService);

})();