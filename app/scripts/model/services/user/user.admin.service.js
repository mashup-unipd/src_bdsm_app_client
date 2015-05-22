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


	function userAdminService(dataManagerService){

		var factory = {
			getListOfUsers: getListOfUsers,
			editUserPermissions: editUserPermissions,
			deleteUserAccount: deleteUserAccount
		};

		return factory;

		///////////////


		/**
		 * TODO
		 */
		function getListOfUsers(){
			return dataManagerService.getRestCall('users');
		}

		/**
		 * TODO
		 * TODO (test):
		 * @param idUser : id of the User that we want change account permissions
		 */
		function editUserPermissions( idUser ){
			console.log('Permessi modificati per l\'account' + idUser);
			// TODO change with a back-end API call (PUT)
			// here return in a promise
		}

		/**
		 * TODO
		 * TODO (test):
		 * @param idUser : id of the User that we want delete account
		 */
		function deleteUserAccount( idUser ){
			console.log('Account ' + idUser + ' rimosso');
			// TODO change with a back-end API call (DELETE)

		}

	}


	userAdminService.$inject = ['dataManagerService'];

	angular
		.module('app.user.services.module')
		.factory('userAdminService', userAdminService);


})();