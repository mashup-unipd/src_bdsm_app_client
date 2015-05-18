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

		vm.listRecipes = getListOfRecipes();

		///////////////

		/**
		 * TODO
		 */
		function getListOfRecipes(){
			return recipeAdminService.getRecipesListAll();
		}


	};

	RatingsCtrl.$inject = ['recipeAdminService'];

	angular
		.module('app')
		.controller('RatingsCtrl', RatingsCtrl);

})();
