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
	 * 0.0.1  2015-05-14  Tesser Paolo  code module
	 * -----------------------------------------------------------
	 * 0.0.2	2015-05-15	Tesser Paolo	insert function to create and modify data from back-end
	 * -----------------------------------------------------------
	 * 0.0.3	2015-06-05	Tesser Paolo	insert function to delete a recipe
	 * -----------------------------------------------------------
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
			deleteRecipe: deleteRecipe,
			discardRecipeRequest: discardRecipeRequest,
			approveRecipeRequest: approveRecipeRequest
		};

		return factory;

		///////////////

		/**
		 * This function retries all recipes from back-end and returns them in a promise
		 * TODO (test): should return a promise
		 * @returns {*[]} : list of all recipes
		 */
		function getRecipesListAll(){
			return dataManagerService.getRestCall('recipes');
		}

		/**
		 * This function retries all recipes request from back-end and returns them in a promise
		 * TODO (test): should return a promise
		 * @returns {*[]}
		 */
		function getListOfRecipesRequest(){
			return dataManagerService.getRestCall('requests');
		}

		/**
		 * This function inserts a new recipe created in the back-end
		 * @param recipe : recipe to insert
		 */
		function createRecipe( recipe ){
			return dataManagerService.postRestCall('recipes', recipe);
		}

		/**
		 * This function deletes a recipe in the back-end
		 * TODO (test): should return a promise
		 * @param idRecipe : recipe to delete
		 * @param indexElement : index of the element that we want delete
		 */
		function deleteRecipe(idRecipe, indexElement){
			return dataManagerService.deleteRestCall('recipes', idRecipe, indexElement);
		}


		/**
		 * TODO [opzionale]
		 * TODO (test):
		 * @param idRecipeRequest
		 */
		function discardRecipeRequest(idRecipeRequest){
			// TODO: call back-end API (DELETE)
		}

		/**
		 * TODO [opzionale]
		 * TODO (test):
		 * @param idRecipeRequest
		 */
		function approveRecipeRequest(idRecipeRequest){
			// TODO: call back-end API (POST)
		}

	}


	recipeAdminService.$inject = ['dataManagerService'];

	angular
		.module('app.recipe.services.module')
		.factory('recipeAdminService', recipeAdminService);


})();