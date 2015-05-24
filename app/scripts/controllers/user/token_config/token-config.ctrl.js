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
     * 0.0.1    2015-05-08  Tesser Paolo    		code module
     * -----------------------------------------------------------
     * 0.0.2	2015-05-15	Carnovalini Filippo		insert model ApiDocs
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

    var TokenConfigCtrl = function (userService, ApiDocsModel) {

        var vm = this;

        vm.accessToken = ''; // TODO: search if token it's just associated to a User
		checkIfAccessTokenIsAssigned();
		vm.getAccessToken = getAccessToken;
		vm.deleteAccessToken = deleteAccessToken;
		vm.restServices = ApiDocsModel;
		//////////////

		var idUser = '355464364634634'; // TODO: retries with a service or in localStorage

		/**
		 * This function retries a token from back-end API with a service method
		 * TODO (test): should accessToken attribute must be not empty if
		 * TODO (test): should accessToken attribute must be length like descript in Analisi dei Requisiti document
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
		 * TODO (test): should accessToken attribute must be empty after a successful operation
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
		 * TODO
		 * TODO (test): should accessToken attribute must be empty if token has never been generated
		 * TODO (test): should accessToken attribute mustn't be empty if token has been generated
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

    TokenConfigCtrl.$inject = ['userService','ApiDocsModel'];

    angular
		.module('app')
		.controller('TokenConfigCtrl', TokenConfigCtrl);

})();
