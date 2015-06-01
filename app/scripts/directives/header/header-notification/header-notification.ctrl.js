(function(){
	'use strict';

	/**
	 * Name: app/scripts/directives/header/header-notification/header-notification.ctrl.js
	 * Author: MashUp
	 * Mail: info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-04-06  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 * 0.0.2		2015-05-13  Tesser Paolo		insert service for authentication
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc function
	 * @name app.controller:HeaderNotificationCtrl
	 * @description
	 * # HeaderNotificationCtrl
	 * Controller of the app
	 *
	 */

	var HeaderNotificationCtrl = function(authService){

		var vm = this;

		vm.logout = logout;

		/////////////////


		function logout(){
			authService.logout();
		}

	};

	HeaderNotificationCtrl.$inject = ['authService'];

	angular
		.module('app')
		.controller('HeaderNotificationCtrl', HeaderNotificationCtrl);

})();
