(function(){
	'use strict';
	/**
	 * Name: app/scripts/controllers/admin/recipe_config/insert-recipe.ctrl.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1  2015-03-24  Tesser Paolo  code module
	 * -----------------------------------------------------------
	 * 0.0.2  2015-04-18  Tesser Paolo  refactor code, more encapsulate
	 * -----------------------------------------------------------
	 * 0.0.3	2015-05-13	Tesser Paolo	add MetricModel and use it to add metrics to a Recipe
 	 * -----------------------------------------------------------
 	 * 0.0.4	2015-05-28	Tesser Paolo	add function to remove a metric in the array, before insert it
 	 * -----------------------------------------------------------
 	 *
	 */

	/**
	 * @ngdoc function
	 * @name app.controller:InsertRecipeCtrl
	 * @description
	 * # InsertRecipeCtrl
	 * Controller of the app
	 */

	var InsertRecipeCtrl = function( recipeService, recipeAdminService, authService){

		var vm = this;

		vm.titleRecipe = '';
		vm.descRecipe = '';
		vm.type = ''; // type of the category choose in the combobox
		// error/success variables
		vm.insertSuccess = false;
		vm.insertError = false;
		vm.insertMetricSuccess = false;
		vm.removeMetricSuccess = false;
		vm.insertMetricEmptyError = false;
		vm.insertMetricDuplicateError = false;
		vm.metricQuantityError = false;

		// array of the categories for a combobox field in the template view
		vm.categories = recipeService.getMetricType();
		vm.types = [];
		vm.valueMetric = '';

		vm.tempMetrics = []; // array that contains a set of object that figure a metric
		vm.metrics = []; // array that contains a set of MetricModel object


		vm.insertRecipe = insertRecipe;
		vm.updateTypeMetric = updateTypeMetric;
		vm.addMetric = addMetric;
		vm.removeMetric = removeMetric;
		vm.checkMetricsQuantity = checkMetricsQuantity;

		///////////////////


		/**
		 * This function create a new Recipe and insert it in the back-end
		 * TODO (test): should reset value after a successful insert
		 */
		function insertRecipe(){

			vm.metrics = vm.tempMetrics;

			// if the Admin had insert almost two metrics, he can inserts a new Recipe
			if (checkMetricsQuantity()){

				// create an object that represents a recipe request
				var value = {
					'title': vm.titleRecipe,
					'desc': vm.descRecipe,
					'admin_id': authService.getAccountInformation().oauth_token,
					'metrics': vm.metrics
				};

				recipeAdminService.createRecipe(value)
					.then(function(){
						// reset values of form's fields after a success insert
						vm.titleRecipe = '';
						vm.descRecipe = '';
						vm.tempMetrics = [];
						vm.metrics = [];

						vm.insertSuccess = true;
						vm.metricError = false;
					});


			} else {
				console.log("Devi inserire almeno due metriche");
			}

		}


		/**
		 * This function create a local object with the value of a metric
		 * and insert it in a temporary array that stores all locals metric object
		 * @param cat : category of the metric
		 * @param typeCat : type of the category
		 * @param val : value of the category
		 */
		function addMetric(cat, typeCat, val){

			if (cat ===  undefined || typeCat === undefined || val === undefined){
				vm.insertMetricEmptyError = true;

				vm.insertMetricSuccess = false;
				vm.insertMetricDuplicateError = false;
				vm.removeMetricSuccess = false;

			} else {
				// all fields are not empty, so it's possible insert the metric
				var metric = {
					id: val,
					category: cat,
					category_type: typeCat
				};

				if (!checkMetricDuplicate(metric)){
					// insert metrics in a temporary array
					vm.tempMetrics.push(metric);

					// reset values of metric's fields after a success insert
					vm.categories = recipeService.getMetricType();
					vm.types = [];
					vm.valueMetric = undefined;
					vm.insertMetricSuccess = true;

					vm.insertMetricEmptyError = false;
					vm.insertMetricDuplicateError = false;
					vm.metricQuantityError = false;
					vm.removeMetricSuccess = false;

				}

			}


		}

		/**
		 * This function removes an added metric from the temporary array that contains all added metrics
		 * @param indexMetric
		 */
		function removeMetric(indexMetric){
			vm.tempMetrics.splice(indexMetric, 1);

			vm.removeMetricSuccess = true;

			vm.insertMetricSuccess = false;
			vm.insertMetricDuplicateError = false;

		}

		/**
		 * This function update the option field for type of metric in the insert recipe form
		 * TODO (test): should types array must be length like the number of the array returned from service
		 * @param category : object that contains a key and a value, and we want the key for choose what array choose
		 */
		function updateTypeMetric( category ){
			vm.type = category.key.key;
			vm.types = recipeService.getMetricTypeNode(vm.type);
		}

		/**
		 * This function checks if there are at least two metrics in the Recipe
		 * @returns {boolean} true if there are almost two else false
		 */
		function checkMetricsQuantity(){
			vm.metricQuantityError = true;
			return (vm.tempMetrics.length >= 2);
		}

		/**
		 * This function checks if a metric is already insert in the global array for the metrics
		 * TODO (test):
		 * @param metric : metric that we want check
		 * @return {bool} : true if the metric is finded in array, else false
		 */
		function checkMetricDuplicate(metric){
			var findMetric = false;

			vm.tempMetrics.forEach(function(element){
				if (element.id === metric.id && element.category === metric.category && element.category_type === metric.category_type){
					findMetric = true;

					vm.insertMetricDuplicateError = true;

					vm.removeMetricSuccess = false;
					vm.insertMetricSuccess = false;
				}
			});

			return findMetric;
		}
	};


	InsertRecipeCtrl.$inject = ['recipeService', 'recipeAdminService', 'authService'];

	angular
			.module('app')
			.controller('InsertRecipeCtrl', InsertRecipeCtrl);

})();
