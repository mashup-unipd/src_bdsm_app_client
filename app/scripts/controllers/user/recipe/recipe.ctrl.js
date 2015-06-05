(function () {
	'use strict';

	/**
	 * Name: app/scripts/controllers/user/recipe/recipe.ctrl.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1  2015-05-04  Tesser Paolo  code module
	 * -----------------------------------------------------------
	 * 0.0.2	2015-05-14	Tesser Paolo	insert service for recipe
 	 * -----------------------------------------------------------
 	 *
	 */

	/**
	 * @ngdoc function
	 * @name app.controller:RecipeCtrl
	 * @description
	 * # RecipeCtrl
	 * Controller of the app
	 */

	var RecipeCtrl = function (recipeService, authService) {

		var vm = this;

		vm.listRecipes = [];
		vm.getListOfRecipes = getListOfRecipes;
		vm.isAdmin = authService.isAdmin();
		// immediatly invoke to retry all Recipes from the database
		getListOfRecipes();


		////////////////

		/**
		 * This function retries recipes from service and return it
		 */
		function getListOfRecipes(){

			var listRecipes = recipeService.getRecipesList();

			listRecipes
				.then(function(data){
					var arrayUsers = data.items;
					arrayUsers.forEach(function(element){
						vm.listRecipes.push(element);
					});
				});

		}

	};

	RecipeCtrl.$inject = ['recipeService', 'authService'];

	angular
	.module('app')
	.controller('RecipeCtrl', RecipeCtrl);

})();
