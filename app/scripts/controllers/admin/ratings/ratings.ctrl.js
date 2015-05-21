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
	 * 0.0.1    2015-05-10  Tesser Paolo    codifica modulo
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
		 * This function retries the list of Recipe with them rating
		 * TODO: data from a STUB
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
