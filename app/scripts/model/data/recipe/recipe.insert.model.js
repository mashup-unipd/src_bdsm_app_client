(function () {
	'use strict';

	/**
	 * Name: app/scripts/model/data/recipe/recipe.insert.model.js
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
	 * @name app.recipe.data.module.RecipeInsertModel
	 * @description
	 * # RecipeInsertModel
	 * Factory in the app.recipe.data.module
	 */

	angular
		.module('app.recipe.data.module')
		.factory('RecipeInsertModel', RecipeInsertModel);

	RecipeInsertModel.$inject = ['RecipeModel'];

	function RecipeInsertModel(RecipeModel){

			var RecipeInsertModel = function( idAdmin ){
				this.idAdmin = idAdmin;
				RecipeModel.apply(this);
			};

			/* create inheritance */
			/* reuse the original object prototype */
			// RecipeInsertModel.prototype = new RecipeModel();

			/* OR */

			RecipeInsertModel.prototype = Object.create(RecipeModel.prototype);
			RecipeInsertModel.prototype.constructor = RecipeInsertModel;

			/**
			 *
			 * @returns {*}
			 */
			RecipeInsertModel.prototype.getIdAdmin = function(){
				return this.idAdmin;
			};

			return RecipeInsertModel;

	}

})();
