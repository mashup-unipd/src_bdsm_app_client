(function() {

	'use strict';

	/**
	 * Name: app/scripts/model/services/recipe/recipe.service.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          		Desc
	 * ==========================================================
	 * 0.0.1    2015-05-14  Tesser Paolo    		code module
	 * -----------------------------------------------------------
	 * 0.0.2	2015-05-16	Carnovalini Filippo		insert function getMetricsListType for compare ctrl
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


	function recipeService(dataManagerService){

		var factory = {
			getRecipesList: getRecipesList,
			getMetricsList: getMetricsList,
			getMetricsListType: getMetricsListType,
			getMetricType: getMetricType,
			createRecipeRequest: createRecipeRequest,
			getMetricTypeNode: getMetricTypeNode
		};

		return factory;

		///////////////


		/**
		 * This function retries all recipes from back-end
		 * TODO (test): should return a promise
		 * @returns {*} : list of all recipes
		 */
		function getRecipesList(){
			return dataManagerService.getRestCall('recipes');
		}

		/**
		 * This function retries all metrics contains in a determinate recipe
		 * TODO (test): should return a promise
		 * @param idRecipe : id of the recipe that we want get all metrics
		 * @returns {*} : list of metrics objects
		 */
		function getMetricsList( idRecipe ){

			var idRecipeStrip = String(idRecipe);
			// must replace white space with particular character of escaping
			idRecipeStrip.replace(/\s+/g, '%20');

			return dataManagerService.getRestCall('recipes/' + idRecipeStrip);

		}

		/**
		 * TODO
		 * @param idRecipe
		 * @param typeCategory
		 * @param typeMetric
		 * @returns {Array}
		 */
		function getMetricsListType( idRecipe, typeCategory, typeMetric  ){

			var metricsList = [];

			// TODO: call back-end API, now we are using a stub
			switch(typeCategory){
				case 'facebook': if(typeMetric=="page"){metricsList = [
					{
						name: 'NikeOfficial',
						type: 'page'
					},
					{
						name: 'NikeStore',
						type: 'page'
					}];}else{metricsList = [
					{
						name: 'OpenStoreBarcelona',
						type: 'event'
					}
				];} break;
				case 'twitter': if(typeMetric=="hashtag"){metricsList = [
					{
						name: '#gonike',
						type: 'hashtag'
					}]}else{metricsList = [
					{
						name: 'nike',
						type: 'page'
					}
				];} break;
				case 'instagram': if(typeMetric=="hashtag"){metricsList = [
					{
						name: '#playnike',
						type: 'hashtag'
					}]}else{metricsList = [
					{
						name: 'nike_official',
						type: 'page'
					}
				]; }break;

				default: metricsList = []; break;
			}

			return metricsList;
		}

		/**
		 * This function retries all metrics type
		 * TODO (test):
		 * @returns {*} : array of type objects
		 */
		function getMetricType(){

			return [
				{
					key: 'facebook',
					value: 'Facebook'
				},
				{
					key: 'twitter',
					value: 'Twitter'
				},
				{
					key: 'instagram',
					value: 'Instagram'
				}
			];

		}


		function getMetricTypeNode(typeMetric){
			var typeToReturn;

			// array of types of the possible node in a metric's category
			var typeFacebook = [
				{
					key: 'event',
					value: 'Event'
				},
				{
					key: 'page',
					value: 'Page'
				}
			];
			var typeTwitter = [
				{
					key: 'hashtag',
					value: 'Hashtag'
				},
				{
					key: 'page',
					value: 'Page'
				}
			];
			var typeInstagram = [
				{
					key: 'hashtag',
					value: 'Hashtag'
				},
				{
					key: 'page',
					value: 'Page'
				}
			];

			switch (typeMetric){
				case 'facebook': typeToReturn = typeFacebook; break;
				case 'twitter': typeToReturn =  typeTwitter; break;
				case 'instagram': typeToReturn = typeInstagram; break;
				default : typeToReturn = []
			}

			return typeToReturn;
		}

		/**
		 * This function inserts a new recipe request created in the back-end
		 * TODO (test):
		 * @param recipeReq : recipe request to insert
		 */
		function createRecipeRequest( recipeReq ){
			// TODO: call POST API to back-e
		}



	}


	recipeService.$inject = ['dataManagerService'];

	angular
		.module('app.recipe.services.module')
		.factory('recipeService', recipeService);


})();