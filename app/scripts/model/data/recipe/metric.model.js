(function(){
	'use strict';

	/**
	 * Name: app/scripts/model/data/recipe/metric.model.js
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
	 * @name app.recipe.data.module.MetricModel
	 * @description
	 * # MetricModel
	 * Factory in the app.recipe.data.module
	 */

	function MetricModel() {

		/**
		 *
		 * @constructor : TODO
		 */
		var MetricModel = function(){
			// properties of the class
			// TODO
		};



		return MetricModel;

	}

	MetricModel.$inject = [];

	angular
		.module('app.recipe.data.module')
		.service('MetricModel', MetricModel);

})();