(function () {
    'use strict';

    /**
     * Name: app/scripts/controller/settings/settings.ctrl.js
     * Author: MashUp
     * Mail. info@mashup-unipd.it
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-01  Tesser Paolo    code module
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

        vm.username = 'mashup';
        vm.email = 'info@mashup-unipd.it';
		vm.oldPassword = '';
		vm.newPassword = '';
		vm.confirmNewPassword = '';

        vm.saveEdit = saveEdit;
		vm.matchNewPassword = matchNewPassword;

		/////////////////


		/**
		 * This function saves the account's modifies with a call to authService
		 */
        function saveEdit(){
            console.log('Modifiche salvate');

			if (vm.oldPassword !== '' && vm.newPassword !== '' && vm.confirmNewPassword !== ''){

				if (checkOldPassword()){
					authService.updateSettingsAccount();
					// TODO: it could be possible use a function that update only pwd settings if changes
				}

			}

        }

		/**
		 * This function checks if old password is correct with a call to authService
		 */
		function checkOldPassword( pwdToCheck ){
			// TODO: calls authService that check if old pwd insert is correc
			return true; // TODO: change with the response from authService
		}

		/**
		 * This function checks if new password insert match with confirm new password
		 * @returns {bool} : true if new password it's equal to confirm new password else false
		 */
		function matchNewPassword(){
			return true; // TODO: change with some of logic
		}


		// TODO: function to check if user had modify some fields and so it's necessaty enabled save button
    };

    SettingsCtrl.$inject = ['authService'];

    angular.module('app').controller('SettingsCtrl', SettingsCtrl);

})();
