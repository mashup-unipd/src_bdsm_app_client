(function(){
	'use strict';

	/**
	 * Name: app/scripts/model/data/recipe/recipe.request.model.js
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
	 * @ngdoc service
	 * @name app.recipe.data.module.RecipeRequestModel
	 * @description
	 * # RecipeRequestModel
	 * Factory in the app.recipe.data.module
	 */

	angular
		.module('app.recipe.data.module')
		.factory('RecipeRequestModel', RecipeRequestModel);


	RecipeRequestModel.$inject = ['RecipeModel'];


	function RecipeRequestModel(RecipeModel){

		var RecipeRequestModel = function( idUser ){
			this.idUser = idUser;
			RecipeModel.apply(this);
		};

		/* create inheritance */
		/* reuse the original object prototype */
		// RecipeRequestModel.prototype = new RecipeModel();

		/* OR */

		RecipeRequestModel.prototype = Object.create(RecipeModel.prototype);
		RecipeRequestModel.prototype.constructor = RecipeRequestModel;

		/**
		 *
		 * @returns {*}
		 */
		RecipeRequestModel.prototype.getIdUser = function(){
			return this.idUser;
		};

		return RecipeRequestModel;

	}

})();
