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


		vm.saveEdit = saveEdit;
		vm.deleteAccount = deleteAccount;
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
		 * @param settings
		 *
		 */
		function saveEdit(settings){


			if (checkModifyFields(settings)){
				var credToChange = {
					email: vm.newPassword,
					username: vm.email
				};

				authService.updateSettingsAccount(credToChange);
				console.log('Modifiche salvate');
			}

				}

		/**
		 * TODO
		 * TODO (test):
		 */
		function deleteAccount(){
			authService.deleteAccount();
		}

		/**
		 * This function checks if old password is correct with a call to authService
		 * TODO (test):
		 * @param settings
		 * @return {bool}
		 */
		function checkModifyFields( settings ){

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
