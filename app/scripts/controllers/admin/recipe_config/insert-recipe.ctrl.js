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
     * 0.0.1    2015-03-24  Tesser Paolo    code module
     * -----------------------------------------------------------
     * 0.0.2    2015-04-18  Tesser Paolo    refactor code, more encapsulate
     * -----------------------------------------------------------
     * 0.0.3	2015-05-13	Tesser Paolo	add MetricModel and use it to add metrics to a Recipe
	 * -----------------------------------------------------------
     */


    /**
     * @ngdoc function
     * @name app.controller:InsertRecipeCtrl
     * @description
     * # InsertRecipeCtrl
     * Controller of the app
     */

	// TODO: need a service for retrie id of the logged User/Admin
    var InsertRecipeCtrl = function( recipeService, recipeAdminService, RecipeInsertModel, MetricModel){

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

		///////////////////


		/**
		 * This function create a new Recipe and insert it in the back-end
		 */
        function insertRecipe(){

			// function map on tempMetrics array that use a function for convert object in MetricModel object
			// TODO (p.tesser921@gmail.com): refactor code
			vm.metrics = vm.tempMetrics.map(function(obj){
				var metric;
				var tempMetricVal = [];

				// pass every value in the object and save them in a temporary array
				Object.keys(obj).forEach(function(key){
					tempMetricVal.push(obj[key]);
				});

				// this it's possible because we know the structure of the object
				metric = new MetricModel(tempMetricVal[0], tempMetricVal[1], tempMetricVal[2]);

				return metric;

			});

			// if the Admin had insert almost two metrics, he can inserts a new Recipe
			if (checkMetricsQuantity()){
				// TODO: use AdminModel or authService to retrieve necessary data, maybe it's possible do this thing with the token stored in local
				var recipe = new RecipeInsertModel('12355458654');

				recipe.setTitleRecipe(vm.titleRecipe);
				recipe.setDescRecipe(vm.descRecipe);
				recipe.setMetrics(vm.metrics);

				console.log(recipe);

				var value = {
					'id': '125354634643777534',
					'title': 'TestRecipe',
					'desc': 'Questa è la descrizione della recipe di prova',
					'metrics': [
						{
							'category': 'facebook',
							'typeCategory': 'page',
							'value': 'TestPageOfficial'
						},
						{
							'category': 'facebook',
							'typeCategory': 'event',
							'value': 'TestEventiSpringParty'
						}
					],
					'idAdmin': '352324643657457'

				};

				recipeAdminService.createRecipe(value);

				// reset values of form's fields after a success insert
				vm.titleRecipe = '';
				vm.descRecipe = '';
				vm.tempMetrics = [];
				vm.metrics = [];

				vm.insertSuccess = true;
				vm.metricError = false;

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
				// TODO: code with some error
				console.log('Valori mancanti per inserire la metrica');
			} else {
				// all fields are not empty, so it's possible insert the metric
				var metric = {
					category: cat,
					typeCategory: typeCat,
					value: val
				};

				vm.tempMetrics.push(metric);

				// reset values of metric's fields after a success insert
				vm.categories = recipeService.getMetricType();
				vm.types = [];
				vm.valueMetric = undefined;
				vm.metricQuantityError = false;
			}



		}

		/**
		 * This function update the option field for type of metric in the insert recipe form,
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

    };


    InsertRecipeCtrl.$inject = ['recipeService', 'recipeAdminService', 'RecipeInsertModel', 'MetricModel'];

    angular
        .module('app')
        .controller('InsertRecipeCtrl', InsertRecipeCtrl);

})();
