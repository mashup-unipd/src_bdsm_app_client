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

	var UsersConfigCtrl = function(userAdminService, authService){

		var vm = this;

		vm.usersList = [];
		getUsers(); // active function for retry all users when ctrl is loaded
		vm.editPermissions = editPermissions;
		vm.deleteAccount = deleteUserAccount;

		///////////////////

		/**
		 * This function retries all users from a user service
		 * TODO (test): should usersList array must be empty if there aren't users, else it must be length
		 */
		function getUsers(){

			var listUsers = userAdminService.getListOfUsers();
			var localUser = authService.getAccountInformation().email;

			// it's a promise
			listUsers
				.then(function(data){
					var arrayUsers = data.items;
					arrayUsers.forEach(function(element){
						if (localUser !== element.email){
							vm.usersList.push(element);
						}
					});
				});

		}

		/**
		 * TODO [opzionale]
		 * TODO (test): should value in the usersList array must be modify after this method
		 * @param idUser
		 * @param index
		 * @param permission
		 */
		function editPermissions( idUser, index, permission ){
			/*
			userAdminService.editUserPermissions(idUser, permission)
				.then(function(){

				});
			*/

			console.log('Changed permission in ' + permission + ' for ' + idUser + ' user.');
			// change permission for user in the controller user array
			vm.usersList[index].permission = permission;
		}

		/**
		 * TODO [opzionale]
		 * TODO (test): should usersList array must be length -1 after this method
		 * @param idUser
		 * @param index
		 */
		function deleteUserAccount( idUser, index ){
			/*
			userAdminService.deleteUserAccount(idUser)
				.then(function(){

				});
			*/

			console.log('Delete account for ' + idUser + ' user.');
			// remove user in the controller user array
			vm.usersList.splice(index, 1);


		}

	};

	UsersConfigCtrl.$inject = ['userAdminService', 'authService'];

	angular
		.module('app')
		.controller('UsersConfigCtrl', UsersConfigCtrl);

})();
