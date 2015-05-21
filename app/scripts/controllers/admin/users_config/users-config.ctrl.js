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
	 *
	 */


	/**
	 * @ngdoc function
	 * @name app.controller:UsersConfigCtrl
	 * @description
	 * # UsersConfigCtrl
	 * Controller of the app
	 */

	var UsersConfigCtrl = function(userAdminService, $q){

		var vm = this;

		vm.usersList = [];
		getUsers(); // active function for retry all users when ctrl is loaded
		vm.editPermissions = editPermissions;
		vm.deleteAccount = deleteUserAccount;

		///////////////////

		/**
		 * This function retries all users from a user service
		 * TODO (test):
		 * @returns {*}
		 */
		function getUsers(){

			var listUsers = userAdminService.getListOfUsers();
			console.log(listUsers);

			if (typeof listUsers.then === 'undefined'){
				listUsers.forEach(function(element){
					vm.usersList.push(element);
				});
			} else {
				// it's a promise
				listUsers
					.then(function(data){
						var arrayUsers = data.items;
						arrayUsers.forEach(function(element){
							vm.usersList.push(element);
						});
					});
			}

		}

		/**
		 *
		 * @param idUser
		 * @param permission
		 */
		function editPermissions( idUser, permission ){
			userAdminService.editUserPermissions(idUser);
			console.log('Changed permission for a ' + permission);
		}

		/**
		 *
		 * @param idUser
		 * @param index
		 */
		function deleteUserAccount( idUser, index ){
			userAdminService.deleteUserAccount(idUser);
			// vm.usersList

		}

	};

	UsersConfigCtrl.$inject = ['userAdminService', '$q'];

	angular
		.module('app')
		.controller('UsersConfigCtrl', UsersConfigCtrl);

})();
