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


	function RecipeInsertModel(RecipeModel){

		/**
		 *
		 * @param idAdmin
		 * @constructor
		 */
		 var RecipeInsertModel = function( idAdmin ){
			this.admin_id = idAdmin;
			RecipeModel.apply(this);
		 };


		  RecipeInsertModel.prototype = Object.create(RecipeModel.prototype);
		  RecipeInsertModel.prototype.constructor = RecipeInsertModel;

		 /**
		  *
		  * @returns {*} return the id of the Admin that created a new recipe
		  */
		  RecipeInsertModel.prototype.getIdAdmin = function(){
			  return this.admin_id;
		  };

   		  return RecipeInsertModel;

	}

	RecipeInsertModel.$inject = ['RecipeModel'];

	angular
		.module('app.recipe.data.module')
		.service('RecipeInsertModel', RecipeInsertModel);


})();
