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
			getMetricsList: getMetricsList
		};

		return factory;

		///////////////

		// TODO: implement private and public functions

		/**
		 * TODO
		 * @returns {*}
		 */
		function getRecipesList(){

			var recipesList = '';

			// TODO: check managerDataService or call back-end API

			return recipesList;

		}

		/**
		 * TODO
		 * @param idRecipe
		 * @returns {*}
		 */
		function getMetricsList( idRecipe ){
			var metricsList = '';

			return metricsList;
		}

	}


	recipeService.$inject = []; // TODO: inject managerDataService and maybe RecipeModel

	angular
		.module('app.recipe.services.module')
		.factory('userService', recipeService);


})();