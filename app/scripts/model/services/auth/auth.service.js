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
			isAdmin: isAdmin,
			updateSettingsAccount: updateSettingsAccount,
			getAccountInformation: getAccountInformation
		};

		return factory;

		///////////////

		/**
		 * This function call ng-auth service to submit information about login operation
		 * @param credentials
		 */
		function login( credentials ){

			var loginCallPromise = $auth.submitLogin(credentials);

			loginCallPromise
				.then(function(resp){

						// TODO: change
						if (resp.oauth_token !== undefined){
							// save some account's information
							localStorageService.set('cred', resp);
							// save token information
							localStorageService.set('token', resp.oauth_token);
							// redirect to Home page
							$location.path('/recipe');
						}

				})
				.catch(function(resp){

				});

			return loginCallPromise;

		}

		/**
		 * This function call ng-auth service to submit information about registration operation
		 * @param credentials
		 */
		function register( credentials ){
			return $auth.submitRegistration(credentials);
		}

		/**
		 * This function TODO
		 * TODO (test)
		 */
		function deleteAccount(){
			console.log('Deleted');
			$location.path('/login');
		}

		/**
		 * This function TODO
		 * TODO (test):
		 */
		function isLogged(){
			// TODO: use ng-auth
			// example: $auth.validateUser();
		}


		/**
		 *
		 */
		function isAdmin(){
			return localStorageService.get('cred').permission === 'admin'

		}

		/**
		 * This function TODO
		 * TODO (test):
		 * @param credToChange
		 */
		function updateSettingsAccount(credToChange){
			// $auth.updateAccount(credToChange);
		}


		/**
		 * This function retries user's account informations from localStorage
		 * TODO (test):
		 * @returns {*}
		 */
		function getAccountInformation(){
			return localStorageService.get('cred');
		}

		/**
		 * This function call ng-auth service to remove cookies with access data and localStorage data created
		 * TODO (test):
		 */
		function logout(){

			$auth.signOut()

				.then(function() {
					// remove all data from localStorage when something exit to the system
					localStorageService.clearAll();
					$location.path('/login');
				})

				.catch(function(resp) {
					// handle error response
				});

		}

	}

	authService.$inject = ['$location', '$auth', 'localStorageService'];

	angular
		.module('app.auth.services.module')
		.factory('authService', authService);

})();