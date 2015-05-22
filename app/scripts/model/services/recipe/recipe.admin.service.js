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


	function recipeAdminService(dataManagerService){

		var factory = {
			getRecipesListAll: getRecipesListAll,
			getListOfRecipesRequest: getListOfRecipesRequest,
			createRecipe: createRecipe,
			setRecipeRating: setRecipeRating
		};

		return factory;

		///////////////

		/**
		 * TODO: Stub
		 * This function retries all recipes from back-end and returns them in a promise
		 * TODO (test): should return a promise
		 * @returns {*[]} : list of all recipes
		 */
		function getRecipesListAll(){

			// TODO: check managerDataService or call back-end API (GET)
			return [
				{
					idRecipe: '10',
					titleRecipe: 'SportNike',
					descRecipe: 'Questa recipe contiene i trend relativi alla Nike',
					ratings: 2.11
				},
				{
					idRecipe: '11',
					titleRecipe: 'StarWars',
					descRecipe: 'Questa recipe contiene i trend relativi a StarWars',
					ratings: 4.80
				},
				{
					idRecipe: '12',
					titleRecipe: 'Boobies',
					descRecipe: 'Questa recipe contiene i trend relativi alle migliori tette',
					ratings: 5.00
				},
				{
					idRecipe: '13',
					titleRecipe: 'Bear',
					descRecipe: 'Questa recipe contiene i trend relativi alle migliori birre',
					ratings: 4.50
				}
			];


		}

		/**
		 * TODO: Stub
		 * This function retries all recipes request from back-end and returns them in a promise
		 * TODO (test): should return a promise
		 * @returns {*[]}
		 */
		function getListOfRecipesRequest(){

			return [
				{
					idRequestRecipe: 42,
					titleRecipe: 'AdidasSport',
					descRecipe: 'Recipe about Adidas trends',
					emailUser: 'p.tesser921@gmail.com'
				},
				{
					idRequestRecipe: 43,
					titleRecipe: 'AdidasSport',
					descRecipe: 'Recipe about Adidas trends',
					emailUser: 'dav.santucci@zing.com'
				}
			];

		}

		/**
		 * This function inserts a new recipe created in the back-end
		 * TODO (test): should return a promise
		 * @param recipe : recipe to insert
		 */
		function createRecipe( recipe ){
			return dataManagerService.postRestCall('recipes', recipe);
		}

		/**
		 *
		 * This function sets the rating's value gives from a User to a Recipe
		 * TODO (test): should return a promise
		 * @param idRecipe
		 */
		function setRecipeRating( idRecipe ){
			// TODO: call back-end API (POST)
		}

	}


	recipeAdminService.$inject = ['dataManagerService'];

	angular
		.module('app.recipe.services.module')
		.factory('recipeAdminService', recipeAdminService);


})();