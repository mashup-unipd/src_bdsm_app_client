(function(){
	'use strict';

	/**
	 * Name: app/scripts/model/data/recipe/recipe.model.js
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
	 * @name app.recipe.data.module.RecipeModel
	 * @description
	 * # RecipeModel
	 * Factory in the app.recipe.data.module
	 */

	function model() {

			/**
			 *
			 * @constructor : TODO
			 */
			var RecipeModel = function(){
				// properties of the class
				this.titleRecipe = '';
				this.descRecipe = '';
			};

			/**
			 *
			 * @param title : TODO
			 */
			RecipeModel.prototype.setTitleRecipe = function(title){
				this.titleRecipe = title;
			};

			/**
			 *
			 * @param desc : TODO
			 */
			RecipeModel.prototype.setDescRecipe = function(desc){
				this.descRecipe = desc;
			};

			return RecipeModel;

	}

	model.$inject = [];

	angular
		.module('app.recipe.data.module')
		.service('RecipeModel', model);

})();