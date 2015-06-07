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

	function RecipeCtrl(recipeService, authService, $scope) {

		var vm = this;

		vm.listRecipes = [];
		vm.deleteRecipeSuccess = false;
		vm.isAdmin = authService.isAdmin();


		vm.getListOfRecipes = getListOfRecipes;

		// immediatly invoke to retry all Recipes from the database
		getListOfRecipes();

		////////////////


		// when an admin remove a recipe, we must remove the element in the listRecipes array
		$scope.$on('deleteRecipe', function(event, data){
			vm.listRecipes.splice(data,1);
			vm.deleteRecipeSuccess = true;
		});


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

	}

	RecipeCtrl.$inject = ['recipeService', 'authService', '$scope'];

	angular
	.module('app')
	.controller('RecipeCtrl', RecipeCtrl);

})();
