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
			getFavourites: getFavourites,
			addFavourite: addFavourite
		};

		return factory;

		///////////////

		// TODO: implement private and public functions

		/**
		 * TODO
		 * TODO (test):
		 * @param idUser
		 */
		function getFavourites( idUser ){

			// TODO: it musts returns an array of object
		}

		/**
		 * TODO: add some params to identify the type of graph that's we want save
		 * TODO (test):
		 * @param idUser
		 */
		function addFavourite( idUser ){

		}
	}


	userService.$inject = []; // TODO: inject managerDataService and maybe UserModel

	angular
		.module('app.auth.services.module')
		.factory('userService', userService);


})();