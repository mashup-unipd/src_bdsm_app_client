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
			getMetricType: getMetricType
		};

		return factory;

		///////////////

		// TODO: implement private and public functions

		/**
		 * TODO
		 * @returns {*}
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
		 * TODO
		 * @param idRecipe
		 * @param typeCategory
		 * @returns {*}
		 */
		function getMetricsList( idRecipe, typeCategory ){

			var metricsList = '';

			// TODO: call back-end API, now we are using a stub
			switch(typeCategory){
				case 'facebook': metricsList = [
					{
						name: 'NikeOfficial',
						type: 'page',
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

		/**
		 * TODO
		 * @returns {*}
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

	}


	recipeService.$inject = []; // TODO: inject managerDataService and maybe RecipeModel

	angular
		.module('app.recipe.services.module')
		.factory('recipeService', recipeService);


})();