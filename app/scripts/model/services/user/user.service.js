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
	 * 0.0.2	2015-05-18	Tesser Paolo	insert function for access token
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

	function userService(dataManagerService){

		var factory = {
			getFavourites: getFavourites,
			addFavourite: addFavourite,
			getAccessToken: getAccessToken,
			deleteAccessToken: deleteAccessToken
		};

		return factory;

		///////////////


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

		/**
		 * This function retries an access token generates from the back-end application
		 * TODO (test): should return a promise
		 * @param idUser : id of the user that we want obtained an access token
		 * @return {String} : access token returned
		 */
		function getAccessToken( idUser ){
			return dataManagerService.postCredRestCall('users/token/' + idUser);
		}

		/**
		 * This function deletes an access token from the back-end application
		 * TODO (test): should return a promise
		 * @param idUser : id of the user that we want deleted an access token
		 */
		function deleteAccessToken( idUser ){
			return dataManagerService.deleteCredRestCall('users/token/' + idUser);
		}
	}


	userService.$inject = ['dataManagerService'];

	angular
		.module('app.user.services.module')
		.factory('userService', userService);


})();