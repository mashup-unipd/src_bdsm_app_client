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
	 * 0.0.1    2015-05-10  Tesser Paolo    code module
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

		/**
		 *
		 * @param idAdmin
		 * @constructor
		 */
		 var RecipeInsertModel = function( idAdmin ){
			this.idAdmin = idAdmin;
			RecipeModel.apply(this);
		 };


		  RecipeInsertModel.prototype = Object.create(RecipeModel.prototype);
		  RecipeInsertModel.prototype.constructor = RecipeInsertModel;

		 /**
		  *
		  * @returns {*} return the id of the Admin that created a new recipe
		  */
		  RecipeInsertModel.prototype.getIdAdmin = function(){
			  return this.idAdmin;
		  };

   		  return RecipeInsertModel;

	}

})();
