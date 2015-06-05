(function () {
	'use strict';

	/**
	 * Name: app/scripts/controllers/recipe/metrics.ctrl.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-04  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc function
	 * @name app.controller:MetricsCtrl
	 * @description
	 * # MetricsCtrl
	 * Controller of the app
	 */

	var MetricsCtrl = function (recipeService, $stateParams) {

		var vm = this;

		vm.titleRecipe = $stateParams.title;
		vm.metricsType = getMetricTypes();
		vm.metrics = [];

		vm.getMetricTypes = getMetricTypes;
		vm.getMetricsList = getMetricsList;

		// immediatly invoke to retry all Metrics for a determinate Recipe
		getMetricsList();


		////////////////

		/**
		 * This function retries the type of the metrics. It used to generate different panel
		 * @returns {*} : an array of objects with key and value properties
		 */
		function getMetricTypes(){
			return recipeService.getMetricType();
		}

		/**
		 * This function retries all metrics for a determinate recipe and set metrics array with those values
		 */
		function getMetricsList(){

			recipeService.getMetricsList($stateParams.title)
				.then(function(data){
					var arrayMetrics = data.metrics;
					arrayMetrics.forEach(function(element){
						vm.metrics.push(element);
					});
				});
		}


	};

	MetricsCtrl.$inject = ['recipeService', '$stateParams'];

	angular.module('app').controller('MetricsCtrl', MetricsCtrl);

})();
