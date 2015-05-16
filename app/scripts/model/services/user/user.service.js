(function() {

	'use strict';

	/**
	 * Name: app/scripts/model/services/user/user.service.js
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
	 * # userService
	 * Factory in the app.user.services.module
	 */


	function userService(){

		var factory = {
			// TODO: insert public function
		};

		return factory;

		///////////////

		// TODO: implemente private and public functions
	}


	userService.$inject = [];

	angular
		.module('app.auth.services.module')
		.factory('userService', userService);


})();