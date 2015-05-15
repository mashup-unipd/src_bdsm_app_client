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
    var InsertRecipeCtrl = function( RecipeInsertModel, MetricModel ){

        var vm = this;

        vm.titleRecipe = '';
        vm.descRecipe = '';
        vm.type = '';
        vm.insertSuccess = false;
        vm.insertError = false;

        // array of the category for a options field in the template view
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

			// TODO: use AdminModel to retrieve necessary data
            var recipe = new RecipeInsertModel('12355458654');

            recipe.setTitleRecipe(vm.titleRecipe);
            recipe.setDescRecipe(vm.descRecipe);

			// function map on tempMetrics array that use a function for convert object in MetricModel object
			vm.metrics = vm.tempMetrics.map(function(obj){
				return new MetricModel(obj[0], 'hashtag', 'test');
			});

			recipe.setMetrics(vm.metrics);


			console.log(recipe);

			// reset values of form's fields after a success insert
            vm.titleRecipe = '';
            vm.descRecipe = '';
			vm.tempMetrics = [];
			vm.metrics = [];
            vm.insertSuccess = true;
        }


		/**
		 * TODO
		 * @param cat
		 * @param typeCat
		 * @param val
		 */
		function addMetric(cat, typeCat, val){
			// TODO: insert metric in a local array var, reset the form field
			// var metric = new MetricModel(cat, typeCat, val);

			var metric = {
				category: cat,
				typeCategory: typeCat,
				value: val
			};

			vm.tempMetrics.push(metric);

			// reset values of metric's fields after a success insert
			vm.types = [];
			vm.valueMetric = '';

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

    };


    InsertRecipeCtrl.$inject = ['RecipeInsertModel', 'MetricModel'];

    angular
        .module('app')
        .controller('InsertRecipeCtrl', InsertRecipeCtrl);

})();
