(function () {
    'use strict';

    /**
     * Name: app/scripts/controller/token_config/token-config.ctrl.js
     * Author: MashUp
     * Mail. info@mashup-unipd.it
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-08  Tesser Paolo    code module
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

    var TokenConfigCtrl = function (userService) {

        var vm = this;

        vm.accessToken = ''; // TODO: search if token it's just associated to a User
		vm.getAccessToken = getAccessToken;
		vm.deleteAccessToken = deleteAccessToken;

		//////////////

		var idUser = '355464364634634'; // TODO: retries with a service or in localStorage

		/**
		 * This function retries a token from back-end API with a service method
		 * TODO (test):
		 * @return {String} : access token
		 */
		function getAccessToken(){
			vm.accessToken = userService.getAccessToken(idUser);
		}

		/**
		 * This function delete a token from back-end API with a service method
		 * TODO (test):
		 */
		function deleteAccessToken(){
			userService.deleteAccessToken(idUser);
			vm.accessToken = '';
		}
    };

    TokenConfigCtrl.$inject = ['userService'];

    angular
		.module('app')
		.controller('TokenConfigCtrl', TokenConfigCtrl);

})();
