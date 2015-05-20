(function() {

	'use strict';

	/**
	 * Name: app/scripts/model/services/recipe/recipe.service.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-14  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc service
	 * @name app.recipe.services.module.userService
	 * @description
	 * # recipeService
	 * Factory in the app.recipe.services.module
	 */

	// TODO: insert managerDataService as param and maybe RecipeModel
	function recipeService(){

		var factory = {
			getRecipesList: getRecipesList,
			getMetricsList: getMetricsList,
			getMetricsListType: getMetricsListType,
			getMetricType: getMetricType,
			createRecipeRequest: createRecipeRequest
		};

		return factory;

		///////////////


		/**
		 * This function retries all recipes from back-end
		 * TODO (test):
		 * @returns {*} : list of all recipes
		 */
		function getRecipesList(){

			var recipesList = [
				{
					idRecipe: '10',
					titleRecipe: 'SportNike',
					descRecipe: 'Questa recipe contiene i trend relativi alla Nike'
				},
				{
					idRecipe: '11',
					titleRecipe: 'StarWars',
					descRecipe: 'Questa recipe contiene i trend relativi a StarWars'
				},
				{
					idRecipe: '12',
					titleRecipe: 'Boobies',
					descRecipe: 'Questa recipe contiene i trend relativi alle migliori tette'
				},
				{
					idRecipe: '13',
					titleRecipe: 'Bear',
					descRecipe: 'Questa recipe contiene i trend relativi alle migliori birre'
				}
			];

			// TODO: check managerDataService or call back-end API

			return recipesList;

		}

		/**
		 * This function retries all metrics contains in a determinate recipe
		 * TODO (test):
		 * @param idRecipe : id of the recipe that we want get all metrics
		 * @param typeCategory : type of the category that we want the metrics
		 * @returns {*} : list of metrics objects
		 */
		function getMetricsList( idRecipe, typeCategory ){

			var metricsList = [];

			// TODO: call back-end API, now we are using a stub
			switch(typeCategory){
				case 'facebook': metricsList = [
					{
						name: 'NikeOfficial',
						type: 'page'
					},
					{
						name: 'NikeStore',
						type: 'page'
					},
					{
						name: 'OpenStoreBarcelona',
						type: 'event'
					}
				]; break;
				case 'twitter': metricsList = [
					{
						name: '#gonike',
						type: 'hashtag'
					},
					{
						name: 'nike',
						type: 'page'
					}
				]; break;
				case 'instagram': metricsList = [
					{
						name: '#playnike',
						type: 'hashtag'
					},
					{
						name: 'nike_official',
						type: 'page'
					}
				]; break;

				default: metricsList = []; break;
			}

			return metricsList;
		}

		function getMetricsListType( idRecipe, typeCategory, typeMetric  ){

			var metricsList = [];

			// TODO: call back-end API, now we are using a stub
			switch(typeCategory){
				case 'facebook': if(typeMetric=="page"){metricsList = [
					{
						name: 'NikeOfficial',
						type: 'page'
					},
					{
						name: 'NikeStore',
						type: 'page'
					}];}else{metricsList = [
					{
						name: 'OpenStoreBarcelona',
						type: 'event'
					}
				];} break;
				case 'twitter': if(typeMetric=="hashtag"){metricsList = [
					{
						name: '#gonike',
						type: 'hashtag'
					}]}else{metricsList = [
					{
						name: 'nike',
						type: 'page'
					}
				];} break;
				case 'instagram': if(typeMetric=="hashtag"){metricsList = [
					{
						name: '#playnike',
						type: 'hashtag'
					}]}else{metricsList = [
					{
						name: 'nike_official',
						type: 'page'
					}
				]; }break;

				default: metricsList = []; break;
			}

			return metricsList;
		}

		/**
		 * This function retries all metrics type
		 * TODO (test):
		 * @returns {*} : list of type objects
		 */
		function getMetricType(){

			var type = [
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

			return type;
		}


		/**
		 * This function inserts a new recipe request created in the back-end
		 * TODO (test):
		 * @param recipeReq : recipe request to insert
		 */
		function createRecipeRequest( recipeReq ){
			// TODO
		}

	}


	recipeService.$inject = []; // TODO: inject managerDataService and maybe RecipeModel

	angular
		.module('app.recipe.services.module')
		.factory('recipeService', recipeService);


})();