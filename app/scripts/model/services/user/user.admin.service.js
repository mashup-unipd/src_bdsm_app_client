(function() {

	'use strict';

	/**
	 * Name: app/scripts/model/services/user/user.admin.service.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-14  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc service
	 * @name app.user.services.module.userService
	 * @description
	 * # userAdminService
	 * Factory in the app.user.services.module
	 */


	function userAdminService(){

		var factory = {
			getListOfUsers: getListOfUsers,
			getListOfRecipesRequest: getListOfRecipesRequest
		};

		return factory;

		///////////////

		// TODO: implemente private and public functions

		/**
		 * TODO
		 */
		function getListOfUsers(){


		}

		/**
		 * TODO
		 */
		function getListOfRecipesRequest(){

		}

	}


	userAdminService.$inject = [];

	angular
		.module('app.auth.services.module')
		.factory('userAdminService', userAdminService);


})();