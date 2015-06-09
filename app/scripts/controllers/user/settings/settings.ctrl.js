(function () {
	'use strict';

	/**
	 * Name: app/scripts/controllers/user/settings/settings.ctrl.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1  2015-05-01  Tesser Paolo  code module
	 * -----------------------------------------------------------
	 * 0.0.2	2015-05-13	Tesser Paolo	add function for check pwd
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc function
	 * @name app.controller:SettingsCtrl
	 * @description
	 * # SettingsCtrl
	 * Controller of the app
	 */

	var SettingsCtrl = function (authService) {

		var vm = this;

		var cred = authService.getAccountInformation();
		var username = cred.username;
		var email = cred.email;

		vm.settings = {
			username: username,
			email: email,
			oldPassword: '',
			newPassword: '',
			confirmNewPassword: ''
		};

		vm.confirmDeletePwd = '';

		vm.saveEditSuccess = false;
		vm.confirmDeleteAccountSuccess = false;

		vm.saveEdit = saveEdit;
		vm.deleteAccount = deleteAccount;
		vm.confirmDeleteAccount = confirmDeleteAccount;
		vm.cancelDeleteAccount = cancelDeleteAccount;
		vm.matchNewPassword = matchNewPassword;

		/////////////////

		// store values before something change, to check then if User done a modifies
		var oldSettings = {
			username: username,
			email: email,
			oldPassword: '',
			newPassword: '',
			confirmNewPassword: ''
		};

		/**
		 * This function saves the account's modifies with a call to authService
		 * TODO (test): should
		 *
		 */
		function saveEdit(){

			if (checkModifyFields(vm.settings)){

				var credToChange = {
					oauth_token: authService.getAccountInformation().oauth_token,

					username: vm.settings.username,
					email: vm.settings.email,
					pwd: vm.settings.oldPassword,
					pwd_new: vm.settings.newPassword,
					pwd_repeat: vm.settings.confirmNewPassword
				};

				authService.updateSettingsAccount(credToChange)
					.then(function(){
						vm.saveEditSuccess = true;

						var cred = authService.getAccountInformation();
						var username = cred.username;
						var email = cred.email;

						// reset password values and visualize those news
						vm.settings = {
							username: username,
							email: email,
							oldPassword: '',
							newPassword: '',
							confirmNewPassword: ''
						};

					});

			} else {

			}

		}

		/**
		 * TODO
		 * TODO (test):
		 */
		function deleteAccount(){
			vm.saveEditSuccess = false;
			vm.confirmDeleteAccountSuccess = true;
		}

		/**
		 * TODO
		 * TODO (test):
		 */
		function confirmDeleteAccount(){

			var info = {
				oauth_token: authService.getAccountInformation().oauth_token,
				pwd: vm.confirmDeletePwd
			};

			authService.deleteAccount(info);
		}

		/**
		 * TODO
		 * TODO (test):
		 */
		function cancelDeleteAccount(){
			vm.confirmDeleteAccountSuccess = false;
		}

		/**
		 * This function checks if old password is correct with a call to authService
		 * TODO (test):
		 * @param settings
		 * @return {bool}
		 */
		function checkModifyFields( settings ){
			return true;

			if (settings.oldPassword !== '' || settings.newPassword !== '' || settings.confirmNewPassword !== '' || settings.username !== oldSettings.username
				|| settings.email !== oldSettings.email){

				// TODO
				return true;

			} else {
				return false;
			}

		}

		/**
		 * This function checks if new password insert match with confirm new password
		 * @returns {bool} : true if new password it's equal to confirm new password else false
		 */
		function matchNewPassword(newPwd, newConfirmPwd){
			return newPwd === newConfirmPwd;
		}


		};

		SettingsCtrl.$inject = ['authService'];

		angular.module('app').controller('SettingsCtrl', SettingsCtrl);

})();
