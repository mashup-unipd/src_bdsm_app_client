(function() {

	'use strict';

	/**
	 * Name: app/scripts/model/services/recipe/recipe.admin.service.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-14  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 * 0.0.2	2015-05-15	Tesser Paolo	insert function to create and modify data from back-end
	 * -----------------------------------------------------------
	 *
	 *
	 */

	/**
	 * @ngdoc service
	 * @name app.user.services.module.userService
	 * @description
	 * # recipeAdminService
	 * Factory in the app.recipe.services.module
	 */


	function recipeAdminService(){

		var factory = {
			getRecipesListAll: getRecipesListAll,
			createRecipe: createRecipe,
			setRecipeRating: setRecipeRating
		};

		return factory;

		///////////////

		/**
		 * This function retries all recipes from back-end
		 * TODO (test):
		 * @returns {*} : list of all recipes
		 */
		function getRecipesListAll(){

			var recipesList = [
				{
					idRecipe: '10',
					titleRecipe: 'SportNike',
					descRecipe: 'Questa recipe contiene i trend relativi alla Nike',
					ratings: 4.43
				},
				{
					idRecipe: '11',
					titleRecipe: 'StarWars',
					descRecipe: 'Questa recipe contiene i trend relativi a StarWars',
					ratings: 7.27
				},
				{
					idRecipe: '12',
					titleRecipe: 'Boobies',
					descRecipe: 'Questa recipe contiene i trend relativi alle migliori tette',
					ratings: 15.55
				},
				{
					idRecipe: '13',
					titleRecipe: 'Bear',
					descRecipe: 'Questa recipe contiene i trend relativi alle migliori birre',
					ratings: 10.50
				}
			];

			// TODO: check managerDataService or call back-end API (GET)

			return recipesList;

		}

		/**
		 * This function inserts a new recipe created in the back-end
		 * TODO (test):
		 * @param recipe : recipe to insert
		 */
		function createRecipe( recipe ){
			// TODO: call back-end API (POST)
		}

		/**
		 * This function sets the rating's value gives from a User to a Recipe
		 * TODO (test):
		 * @param idRecipe
		 */
		function setRecipeRating( idRecipe ){
			// TODO: call back-end API (POST)
		}

	}


	recipeAdminService.$inject = [];

	angular
		.module('app.recipe.services.module')
		.factory('recipeAdminService', recipeAdminService);


})();