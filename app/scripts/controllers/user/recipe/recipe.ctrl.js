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
     *
     */

    /**
     * @ngdoc function
     * @name app.controller:NameCtrl
     * @description
     * # RecipeCtrl
     * Controller of the app
     */

	// TODO: insert recipeService as param
    var RecipeCtrl = function () {

        var vm = this;

		vm.listRecipes = getListOfRecipes();


		////////////////

		function getListOfRecipes(){

			var list = [
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



			return list;

		}

    };

    RecipeCtrl.$inject = []; // TODO: inject recipeService as param

    angular
		.module('app')
		.controller('RecipeCtrl', RecipeCtrl);

})();
