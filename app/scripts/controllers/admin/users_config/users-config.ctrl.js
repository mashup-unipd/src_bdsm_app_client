(function(){
	'use strict';
	/**
	 * Name: app/scripts/controllers/admin/users_config/users-config.ctrl.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-10  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 * 0.0.2	2015-05-14	Tesser Paolo	insert and inject service for user
	 * -----------------------------------------------------------
	 */


	/**
	 * @ngdoc function
	 * @name app.controller:UsersConfigCtrl
	 * @description
	 * # UsersConfigCtrl
	 * Controller of the app
	 */

	var UsersConfigCtrl = function(userAdminService){

		var vm = this;

		vm.usersList = getUsers();

		vm.editPermissions = editPermissions;
		vm.deleteAccount = deleteAccount;

		///////////////////

		/**
		 * This function retries all users from a user service
		 * TODO (test):
		 * @returns {*}
		 */
		function getUsers(){
			return userAdminService.getListOfUsers();
		}

		/**
		 * TODO
		 * TODO (test):
		 */
		function editPermissions(){
			// TODO: call a back-end API (PUT)
		}

		/**
		 * TODO
		 * TODO (test):
		 */
		function deleteAccount(){
			// TODO: call a back-end API (POST)
		}

	};

	UsersConfigCtrl.$inject = ['userAdminService'];

	angular
		.module('app')
		.controller('UsersConfigCtrl', UsersConfigCtrl);

})();
