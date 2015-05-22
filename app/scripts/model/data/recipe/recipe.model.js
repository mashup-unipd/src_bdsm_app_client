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
	 * 0.0.1    2015-05-10  Tesser Paolo    code module
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

	function RecipeModel(MetricModel) {

			/**
			 *
			 * @constructor : TODO
			 */
			var RecipeModel = function(){
				// properties of the class
				this.title = '';
				this.desc = '';
				this.metrics = [];
			};

			/**
			 *
			 * @param title : TODO
			 */
			RecipeModel.prototype.setTitleRecipe = function(title){
				this.title = title;
			};

			/**
			 *
			 * @param desc : TODO
			 */
			RecipeModel.prototype.setDescRecipe = function(desc){
				this.desc = desc;
			};

			/**
		 	*
		 	* @param metrics
		 	*/
			RecipeModel.prototype.setMetrics = function(metrics){
				this.metrics = metrics;
			};

			return RecipeModel;

	}

	RecipeModel.$inject = ['MetricModel'];

	angular
		.module('app.recipe.data.module')
		.service('RecipeModel', RecipeModel);

})();