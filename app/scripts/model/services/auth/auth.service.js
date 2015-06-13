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
			isNotLogged: isNotLogged,
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
		 * This function call ng-auth service to destroy personal account and redirect to login page
		 * @param info : info about user that wants delete his/her personal's account
		 * TODO (test):
		 */
		function deleteAccount(info){

			$auth.destroyAccount(info)
				.then(function(){
					$location.path('/login');
				});
		}

		/**
		 * This function see if user is effectivly logged in the system, if not it redirects to login page
		 *
		 */
		function isNotLogged(){
			if (localStorageService.get('cred').oauth_token === undefined){
				$location.path('/login');
			}
		}

		/**
		 * This function see if user is effectivly logged in the system, if is logged, block login and register page
		 *
		 */
		function isLogged(){
			if (localStorageService.get('cred') !== undefined){
				$location.path('/recipe');
			}
		}


		/**
		 * This function checks if an user is an administrator
		 * @return {bool} : true if user is an admin, else false
		 */
		function isAdmin(){
			return localStorageService.get('cred').permission === 'admin'

		}

		/**
		 * This function updates account's settings with a call to ng-auth service
		 * TODO (test): should return a promise
		 * @param credToChange
		 * @return {*}
		 */
		function updateSettingsAccount(credToChange){

			var updateAccountPromise = $auth.updateAccount(credToChange);

			updateAccountPromise
				.then(function(resp){
					localStorageService.set('cred', resp.data);
				});

			return updateAccountPromise;
		}


		/**
		 * This function retries user's account informations from localStorage
		 * TODO (test): should return data in a determinate format
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

			// set token to pass at the function
			var idUser = {
				'oauth_token': localStorageService.get('token')
			};

			$auth.signOut(idUser)
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

	authService.$inject = ['$location', '$auth', 'localStorageService', '$window'];

	angular
		.module('app.auth.services.module')
		.factory('authService', authService);

})();