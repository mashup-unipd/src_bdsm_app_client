(function () {
	'use strict';

	/**
	 * Name: app/scripts/controller/about/api-docs.ctrl.js
	 * Author: Carnovalini  Filippo
	 * Mail. facoch42@gmail.com
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-08  Carnovalini Filippo    creazione stub modulo
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc function
	 * @name app.controller:ApiDocsCtrl
	 * @description
	 * # ApiDocsCtrl
	 * Controller of the app
	 */

	var ApiDocsCtrl = function (ApiDocsModel) {

		var vm = this;

		vm.restServices = getRestServices();


	/**
	 * This function returns the list of public API, with req, type, desc attributes
	 * TODO (test): should attribute restServices must be not empty and has a determinate format
	 * @returns {*}
	 */
		function getRestServices(){
				return ApiDocsModel;
		}


	};

	ApiDocsCtrl.$inject = ['ApiDocsModel'];

	angular.module('app').controller('ApiDocsCtrl', ApiDocsCtrl);

})();
