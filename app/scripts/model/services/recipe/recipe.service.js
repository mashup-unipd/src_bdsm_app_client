(function() {

	'use strict';

	/**
	 * Name: app/scripts/model/services/recipe/recipe.service.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-14  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc service
	 * @name app.recipe.services.module.userService
	 * @description
	 * # recipeService
	 * Factory in the app.recipe.services.module
	 */


	function recipeService(){

		var factory = {
			// TODO: insert public function
		};

		return factory;

		///////////////

		// TODO: implemente private and public functions
	}


	recipeService.$inject = [];

	angular
		.module('app.recipe.services.module')
		.factory('userService', recipeService);


})();