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
		 * This function retries the list of the users register to the system
		 *
		 */
		function getListOfUsers(){
			return dataManagerService.getRestCall('users');
		}

		/**
		 * TODO
		 * TODO (test): should return a promise
		 * @param idUser : id of the User that we want change account permissions
		 */
		function editUserPermissions( idUser , permission){
			return dataManagerService.postRestCall('users/' + idUser + '/permission', permission);
		}

		/**
		 * TODO [opzionale]
		 * @param idUser : id of the User that we want delete account
		 */
		function deleteUserAccount( idUser ){
			// TODO change with a back-end API call (DELETE)

		}

	}


	userAdminService.$inject = ['dataManagerService'];

	angular
		.module('app.user.services.module')
		.factory('userAdminService', userAdminService);


})();