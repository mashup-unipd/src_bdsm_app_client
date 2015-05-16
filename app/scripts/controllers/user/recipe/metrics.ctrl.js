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

    var MetricsCtrl = function (recipeService) {

        var vm = this;

		vm.metricsType = getMetricTypes();
        vm.metricsFb = getMetricsList('facebook');
		vm.metricsTw = getMetricsList('twitter');
		vm.metricsIg = getMetricsList('instagram');


		////////////////

		/**
		 * TODO
		 * @returns {*}
		 */
		function getMetricTypes(){
			return recipeService.getMetricType();
		}

		/**
		 * TODO
		 * @param typeCategory
		 * @returns {*}
		 */
		function getMetricsList(typeCategory){
			return recipeService.getMetricsList(42, typeCategory)
		}

    };

    MetricsCtrl.$inject = ['recipeService'];

    angular.module('app').controller('MetricsCtrl', MetricsCtrl);

})();
