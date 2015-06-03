(function () {
	'use strict';

	/**
	 * Name: app/scripts/controller/token_config/token-config.ctrl.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          		Desc
	 * ==========================================================
	 * 0.0.1  2015-05-08  Tesser Paolo    		code module
	 * -----------------------------------------------------------
	 * 0.0.2	2015-05-15	Carnovalini Filippo	insert model ApiDocs
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc function
	 * @name app.controller:TokenConfigCtrl
	 * @description
	 * # TokenConfigCtrl
	 * Controller of the app
	 */

	var TokenConfigCtrl = function (authService, userService, ApiDocsModel) {

		var vm = this;

		vm.accessToken = '';
		checkIfAccessTokenIsAssigned();
		vm.getAccessToken = getAccessToken;
		vm.deleteAccessToken = deleteAccessToken;
		vm.restServices = ApiDocsModel.getRest();

		//////////////

		var idUser = authService.getAccountInformation().username;

		/**
		 * This function retries a token from back-end API with a service method
		 * @return {String} : access token
		 */
		function getAccessToken(){
			/*
			userService.getAccessToken(idUser)
				.then(function(data){
					vm.accessToken = data;
				});
			*/

			vm.accessToken = userService.getAccessToken(idUser);
		}

		/**
		 * This function delete a token from back-end API with a service method
		 */
		function deleteAccessToken(){
			/*
			userService.deleteAccessToken(idUser)
				.then(function(){
					vm.accessToken = '';
				});
			*/

			vm.accessToken = '';
		}

		/**
		 * This function check if an access token is already created and associated to an user
		 */
		function checkIfAccessTokenIsAssigned(){
			/*
			 userService.getAccessToken(idUser)
				.then(function(data){
					vm.accessToken = data;
				});
			 */
			vm.accessToken = '';
		}


	};

	TokenConfigCtrl.$inject = ['authService', 'userService','ApiDocsModel'];

	angular
	.module('app')
	.controller('TokenConfigCtrl', TokenConfigCtrl);

})();
