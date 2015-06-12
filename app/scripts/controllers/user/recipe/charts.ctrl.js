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

	var ChartsCtrl = function ($stateParams,recipeService) {

		var vm = this;

		vm.metric = $stateParams.metric;
		vm.metric2 = $stateParams.metric2;
		vm.metric3 = $stateParams.metric3;
		vm.cat = $stateParams.cat;
		vm.type = $stateParams.type;
		vm.getGraph=[];
		var parameter;
		var graphPromise;

		if (vm.metric2 == "") {

			parameter = {
				cat: vm.cat,
				type: vm.type,
				value: vm.metric
			};

			graphPromise = recipeService.generateViews(parameter);
		}
		else{
			parameter = {
				cat: vm.cat,
				type: vm.type,
				value: vm.metric3 == "" ? [vm.metric,vm.metric2] : [vm.metric, vm.metric2, vm.metric3]
			};

			graphPromise = recipeService.generateCompare(parameter);
		}

		graphPromise
			.then(function(list){
					vm.getGraph=list;

			});


	};

	ChartsCtrl.$inject = ['$stateParams','recipeService'];

	angular.module('app').controller('ChartsCtrl', ChartsCtrl);

})();
