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

	// TODO: need a service for retrie id of the logged User/Admin
	var InsertRecipeCtrl = function( recipeService, recipeAdminService){

		var vm = this;

		vm.titleRecipe = '';
		vm.descRecipe = '';
		vm.type = ''; // type of the category choose in the combobox
		vm.insertSuccess = false;
		vm.insertError = false;
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

		///////////////////


		/**
		 * This function create a new Recipe and insert it in the back-end
		 * TODO (test): should reset value after a successful insert
		 */
		function insertRecipe(){

			vm.metrics = vm.tempMetrics;

			// if the Admin had insert almost two metrics, he can inserts a new Recipe
			if (checkMetricsQuantity()){
				// TODO: use AdminModel or authService to retrieve necessary data, maybe it's possible do this thing with the token stored in local

				// create an object that represents a recipe request
				var value = {
					'title': vm.titleRecipe,
					'desc': vm.descRecipe,
					'admin_id': '352324643657457',
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
		 * TODO (test): should metrics array must be length +1 after a successful insert
		 * TODO (test): should metrics array must be length as previous after a fail insert
		 * @param cat : category of the metric
		 * @param typeCat : type of the category
		 * @param val : value of the category
		 */
		function addMetric(cat, typeCat, val){

			if (cat ===  undefined || typeCat === undefined || val === undefined){
				// TODO: code with some UI error
				console.log('Valori mancanti per inserire la metrica');
			} else {
				// all fields are not empty, so it's possible insert the metric
				var metric = {
					id: val,
					category: cat,
					category_type: typeCat
				};

				// insert metrics in a temporary array
				vm.tempMetrics.push(metric);

				// reset values of metric's fields after a success insert
				vm.categories = recipeService.getMetricType();
				vm.types = [];
				vm.valueMetric = undefined;
				vm.metricQuantityError = false;
			}


		}

		/**
		 * This function removes an added metric from the temporary array that contains all added metrics
		 * TODO (test):
		 * @param indexMetric
		 */
		function removeMetric(indexMetric){
			vm.tempMetrics.splice(indexMetric, 1);
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
		 * TODO (test): should return true if metrics array is length 2 or more, else false
		 * @returns {boolean} true if there are almost two else false
		 */
		function checkMetricsQuantity(){
			vm.metricQuantityError = true;
			return (vm.tempMetrics.length >= 2);
		}

	};


	InsertRecipeCtrl.$inject = ['recipeService', 'recipeAdminService', 'RecipeInsertModel', 'MetricModel'];

	angular
			.module('app')
			.controller('InsertRecipeCtrl', InsertRecipeCtrl);

})();
