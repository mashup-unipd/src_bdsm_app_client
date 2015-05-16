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

	// TODO: insert managerDataService as param and maybe UserModel
	function userService(){

		var factory = {
			getFavourites: getFavourites
		};

		return factory;

		///////////////

		// TODO: implement private and public functions

		/**
		 *
		 * @param idUser
		 */
		function getFavourites( idUser ){

			// TODO: it musts returns an array of object
		}
	}


	userService.$inject = []; // TODO: inject managerDataService and maybe UserModel

	angular
		.module('app.auth.services.module')
		.factory('userService', userService);


})();