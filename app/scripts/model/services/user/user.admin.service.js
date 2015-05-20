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

			// TODO: now it's a stub, change with a back-end API call (GET)
			var list = [
				{
					id: '12345678894436',
					mail: 'info@mashup.unipd.it',
					type: 'Admin'
				},
				{
					id: '123453462494436',
					mail: 'facoch42@gmail.com',
					type: 'User'
				}
			];

			return list;

		}

		/**
		 * TODO
		 * TODO (test):
		 * @param idUser : id of the User that we want change account permissions
		 */
		function editUserPermissions( idUser ){
			// TODO
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