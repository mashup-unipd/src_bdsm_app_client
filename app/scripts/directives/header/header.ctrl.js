(function(){
	'use strict';

	/**
	 * Name: app/scripts/directives/header/header.ctrl.js
	 * Author: MashUp
	 * Mail: info@mashup-unipd.it
	 *
	 * Modify
	 * Version		Date        Author          Desc
	 * ==========================================================
	 * 0.0.1		2015-05-30  Tesser Paolo	code module
	 * -----------------------------------------------------------
	 * 0.0.2		2015-05-30  Tesser Paolo	insert service for authentication
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc function
	 * @name app.controller:HeaderCtrl
	 * @description
	 * # HeaderCtrl
	 * Controller of the app
	 *
	 */

	var HeaderCtrl = function(authService){

		var vm = this;

		vm.isAdmin = false;
		checkIsAdmin();


		/////////////////


		function checkIsAdmin(){
			vm.isAdmin = authService.isAdmin();
		}

	};

	HeaderCtrl.$inject = ['authService'];

	angular
		.module('app')
		.controller('HeaderCtrl', HeaderCtrl);

})();
