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

	/* TODO (p.tesser921@gmail.com): insert service for list of recipe with the rate as param */
	var RatingsCtrl = function(recipeAdminService){

		var vm = this;

		vm.listRecipes = getListOfRecipes();

		///////////////

		/**
		 * TODO
		 */
		function getListOfRecipes(){
			return recipeAdminService.getRecipesListAll();
		}


	};

	RatingsCtrl.$inject = ['recipeAdminService']; /* TODO (p.tesser921@gmail.com): inject service for list of recipe with the rate  */

	angular
		.module('app')
		.controller('RatingsCtrl', RatingsCtrl);

})();
