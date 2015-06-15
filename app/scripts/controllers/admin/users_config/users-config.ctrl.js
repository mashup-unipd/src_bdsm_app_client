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
	 * 0.0.1  2015-05-10  Tesser Paolo  code module
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
		vm.errorChangePermission = false;

		getUsers(); // active function for retry all users when ctrl is loaded
		vm.editPermissions = editPermissions;
		vm.deleteAccount = deleteUserAccount;

		///////////////////

		var indexActiveUser = 0;

		/**
		 * This function retries all users from a user service
		 *
		 */
		function getUsers(){

			var listUsers = userAdminService.getListOfUsers();
			var localUser = authService.getAccountInformation().email;

			// it's a promise
			listUsers
				.then(function(data){
					var arrayUsers = data.items;
					arrayUsers.forEach(function(element, index){
						if (localUser !== element.email){
							vm.usersList.push(element);
						}else{
							indexActiveUser = index;
						}
					});
				});

		}

		/**
		 *
		 * @param idUser
		 * @param index
		 * @param permission
		 */
		function editPermissions( idUser, index, permission ){

			if(indexActiveUser === index){
				index = index +1;
			}

			var tempNewValue = vm.usersList[index];
			tempNewValue.permission = permission;

			userAdminService.editUserPermissions(idUser, permission, index, tempNewValue)
				.then(function(){
					// change permission for user in the controller user array
					vm.usersList = [];

					userAdminService.getListOfUsers()
						.then(function(data){

							var arrayUsers = data.items;
							var localUser = authService.getAccountInformation().email;
							vm.errorChangePermission = false;

							arrayUsers.forEach(function(element){
								if (localUser !== element.email){
									vm.usersList.push(element);
								}
							});
						});

				}, function(){
					vm.errorChangePermission = true;
				}
			);

		}

		/**
		 * TODO [opzionale]
		 * TODO (test): should usersList array must be length -1 after this method
		 * @param idUser
		 * @param index
		 */
		function deleteUserAccount( idUser, index ){

			if(indexActiveUser === index){
				index = index +1;
			}

			userAdminService.deleteUserAccount(idUser, index)
				.then(function(){
					// remove user in the controller user array
					vm.usersList.splice(index, 1);
				});

		}

	};

	UsersConfigCtrl.$inject = ['userAdminService', 'authService'];

	angular
		.module('app')
		.controller('UsersConfigCtrl', UsersConfigCtrl);

})();
