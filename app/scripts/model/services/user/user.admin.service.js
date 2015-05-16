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
	 * # AuthService
	 * Factory in the app.user.services.module
	 */


	function userAdminService(){

		var factory = {
			// TODO: insert public function
		};

		return factory;

		///////////////

		// TODO: implemente private and public functions

	}


	userAdminService.$inject = [];

	angular
		.module('app.auth.services.module')
		.factory('userService', userAdminService);


})();