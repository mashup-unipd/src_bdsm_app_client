(function () {
	'use strict';

	/**
	 * Name: app/scripts/controllers/recipe/charts.ctrl.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-12  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc function
	 * @name app.controller:ChartsCtrl
	 * @description
	 * # ChartsCtrl
	 * Controller of the app
	 */

	var ChartsCtrl = function ($stateParams,lineChartCreatorService) {

		var vm = this;

		vm.metric = $stateParams.metric;
		vm.metric2 = $stateParams.metric2;
		vm.metric3 = $stateParams.metric3;
		vm.cat = $stateParams.cat;
		vm.type = $stateParams.type;

		vm.getGraph=[lineChartCreatorService.chartGeneration()];




	};

	ChartsCtrl.$inject = ['$stateParams','lineChartCreatorService'];

	angular.module('app').controller('ChartsCtrl', ChartsCtrl);

})();
