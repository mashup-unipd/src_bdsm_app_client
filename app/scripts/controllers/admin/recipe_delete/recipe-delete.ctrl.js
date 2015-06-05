(function () {
	'use strict';

	/**
	 * Name: app/scripts/controllers/admin/recipe_delete/recipe-recipe.ctrl.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1  2015-06-03  Tesser Paolo  code module
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc function
	 * @name app.controller:RecipeDeleteCtrl
	 * @description
	 * # RecipeCtrl
	 * Controller of the app
	 */

	var RecipeDeleteCtrl = function (recipeAdminService) {

		var vm = this;

		vm.deleteRecipe = deleteRecipe;

		////////////////

		/**
		 * TODO
		 * @param idRecipe
		 */
		function deleteRecipe(idRecipe){
			// promise, and it's success deletes recipe in the local variables in parent ctrl and set variables to show success message
			// recipeAdminService.deleteRecipe(idRecipe);
			console.log('test ' + idRecipe );
		}


	};

	RecipeDeleteCtrl.$inject = ['recipeAdminService'];

	angular
		.module('app')
		.controller('RecipeDeleteCtrl', RecipeDeleteCtrl);

})();
