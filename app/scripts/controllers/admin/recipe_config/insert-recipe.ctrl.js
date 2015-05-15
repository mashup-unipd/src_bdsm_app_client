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
    var InsertRecipeCtrl = function( RecipeInsertModel, MetricModel ){

        var vm = this;

        vm.titleRecipe = '';
        vm.descRecipe = '';
        vm.type = ''; // type of the category choose in the combobox
        vm.insertSuccess = false;
        vm.insertError = false;
		vm.metricError = false;

        // array of the categories for a combobox field in the template view
        vm.categories = [
            {
                key: 'facebook',
                value: 'Facebook'
            },
            {
                key: 'twitter',
                value: 'Twitter'
            },
            {
                key: 'instagram',
                value: 'Instagram'
            }
        ];
		vm.types = [];
		vm.valueMetric = '';

		vm.tempMetrics = []; // array that contains a set of object that figure a metric
		vm.metrics = []; // array that contains a set of MetricModel object
        vm.insertRecipe = insertRecipe;
        vm.updateTypeMetric = updateTypeMetric;
		vm.addMetric = addMetric;

		///////////////////

		// array of types of the possible node in a metric's category
		var typeFacebook = [
			{
				key: 'evento',
				value: 'Evento'
			},
			{
				key: 'pagina',
				value: 'Pagina'
			}
		];

		var typeTwitter = [
			{
				key: 'hashtag',
				value: 'Hashtag'
			},
			{
				key: 'pagina',
				value: 'Pagina'
			}
		];
		var typeInstagram = [
			{
				key: 'hashtag',
				value: 'Hashtag'
			},
			{
				key: 'pagina',
				value: 'Pagina'
			}
		];

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

				// TODO: must call something like: recipe.save() that calls service to store send and store Recipe in the database

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

			var metric = {
				category: cat,
				typeCategory: typeCat,
				value: val
			};

			vm.tempMetrics.push(metric);

			// reset values of metric's fields after a success insert
			vm.types = [];
			vm.valueMetric = '';
			vm.metricError = false;
		}

		/**
		 * This function update the option field for type of metric in the insert recipe form,
		 * @param category : object that contains a key and a value, and we want the key for choose what array choose
		 */
        function updateTypeMetric( category ){

			vm.type = category.key.key;

            switch (vm.type){
                case 'facebook': vm.types = typeFacebook; break;
                case 'twitter': vm.types = typeTwitter; break;
                case 'instagram': vm.types = typeInstagram; break;
                default : vm.types = []
            }

        }

		/**
		 * This function checks if there are almost two metrics in the Recipe
		 * @returns {boolean} true if there are almost two else false
		 */
		function checkMetricsQuantity(){
			vm.metricError = true;
			return (vm.tempMetrics.length >= 2);
		}

    };


    InsertRecipeCtrl.$inject = ['RecipeInsertModel', 'MetricModel'];

    angular
        .module('app')
        .controller('InsertRecipeCtrl', InsertRecipeCtrl);

})();
