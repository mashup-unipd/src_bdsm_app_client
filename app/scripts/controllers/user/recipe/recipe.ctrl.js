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
     * 0.0.1    2015-05-04  Tesser Paolo    code module
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

    var RecipeCtrl = function (recipeService) {

        var vm = this;

		vm.listRecipes = [];
		getListOfRecipes();


		////////////////

		/**
		 * This function retries recipes from service and return it
		 * TODO (test): should add elements to listRecipes if call is going to success, else the array should be empty
		 */
		function getListOfRecipes(){

			var listRecipes = recipeService.getRecipesList();

			// it's a promise
			listRecipes
				.then(function(data){
					var arrayUsers = data.items;
					arrayUsers.forEach(function(element){
						vm.listRecipes.push(element);
					});
				});

		}

    };

    RecipeCtrl.$inject = ['recipeService'];

    angular
		.module('app')
		.controller('RecipeCtrl', RecipeCtrl);

})();
