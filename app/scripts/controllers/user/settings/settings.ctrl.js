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
     */

    /**
     * @ngdoc function
     * @name app.controller:SettingsCtrl
     * @description
     * # SettingsCtrl
     * Controller of the app
     */

	// TODO: insert UserModel/Service as param to retrie value for sone fields
    var SettingsCtrl = function () {

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
		 * TODO
		 */
        function saveEdit(){
            console.log('Modifiche salvate');
			// TODO: calls service

        }

		/**
		 * TODO
		 */
		function checkOldPassword( pwdToCheck ){
			// TODO: calls authService that check if old pwd insert is correct

		}

		/**
		 * TODO
		 */
		function matchNewPassword(){

		}

    };

    SettingsCtrl.$inject = []; // TODO: inject UserModel/Service

    angular.module('app').controller('SettingsCtrl', SettingsCtrl);

})();
