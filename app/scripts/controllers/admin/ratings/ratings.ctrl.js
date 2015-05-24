(function(){
	'use strict';
	/**
	 * Name: app/scripts/controllers/admin/ratings/ratings.ctrl.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-10  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 *
	 */


	/**
	 * @ngdoc function
	 * @name app.controller:RatingsCtrl
	 * @description
	 * # RatingsCtrl
	 * Controller of the app
	 */

	var RatingsCtrl = function(recipeAdminService){

		var vm = this;

		vm.listRecipes = [];
		getListOfRecipes(); // active function for retry all recipe when ctrl is loaded

		///////////////

		/**
		 * TODO: data from a STUB
		 * TODO (test): should array listRecipes must be empty if there aren't recipes with a rating, else it must be length
		 * This function retries the list of Recipe with them rating
		 *
		 */
		function getListOfRecipes(){
			var arrayRecipes = recipeAdminService.getRecipesListAll();
			arrayRecipes.forEach(function(element){
				vm.listRecipes.push(element);
			});
		}


	};

	RatingsCtrl.$inject = ['recipeAdminService'];

	angular
		.module('app')
		.controller('RatingsCtrl', RatingsCtrl);

})();
