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

		// immediatly invoke to retry all Metrics for a determinate Recipe
		getMetricsList();


		////////////////

		/**
		 * TODO
		 * TODO (test): should
		 * @returns {*}
		 */
		function getMetricTypes(){
			return recipeService.getMetricType();
		}

		/**
		 * TODO
		 * TODO (test): should
		 * @returns {*}
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
