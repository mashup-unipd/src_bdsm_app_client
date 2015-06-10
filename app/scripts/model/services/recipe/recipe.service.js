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
	 * @name app.recipe.services.module
	 * @description
	 * # recipeService
	 * Factory in the app.recipe.services.module
	 */

	function recipeService($q, dataManagerService, viewTypeModel, barChartCreatorService, lineChartCreatorService, radarChartCreatorService, pieChartCreatorService){

		var factory = {
			getRecipesList: getRecipesList,
			getMetricsList: getMetricsList,
			getMetricType: getMetricType,
			createRecipeRequest: createRecipeRequest,
			getMetricTypeNode: getMetricTypeNode,
			generateViews: generateViews
		};

		return factory;

		///////////////


		/**
		 * This function retries all recipes from back-end
		 * @returns {*} : list of all recipes
		 */
		function getRecipesList(){
			return dataManagerService.getRestCall('recipes');
		}

		/**
		 * This function retries all metrics contains in a determinate recipe
		 * @param idRecipe : id of the recipe that we want get all metrics
		 * @returns {*} : list of metrics objects
		 */
		function getMetricsList( idRecipe ){

			var idRecipeStrip = String(idRecipe);

			if (idRecipeStrip !== ''){
				// must replace white space with particular character of escaping
				idRecipeStrip.replace(/\s+/g, '%20');

				return dataManagerService.getRestCall('recipes/' + idRecipeStrip);
			}

		}


		/**
		 * This function retries all metrics type
		 * @returns {{key: string, value: string}[]} : array of type objects
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

		/**
		 * This function return a different array of type metric nodes
		 * @param typeMetric : type of the metric that we want retry possible nodes
		 * @returns {*} : an array of type metric nodes
		 */
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
		 * This function generates the HTML code for the Graphs from  one ore more metrics
		 * @param metric : metrics for the generation
		 */
		function generateViews(metric){

			var main;
			var media;
			var trend;
			//var events;
			var graphPromises=[];

			switch (metric.cat) {
				case 'Facebook':
					if (metric.type == 'page') {
						main = dataManagerService.getRestCall("fb/pages/"+ metric.value);
						media = dataManagerService.getRestCall("fb/pages/"+ metric.value +"/posts");
						trend = dataManagerService.getRestCall("fb/pages/"+ metric.value +"/trend");
						//events = dataManagerService.getRestCall(  TODO  );
					} else {
						main = dataManagerService.getRestCall("fb/events/"+ metric.value);
						media = dataManagerService.getRestCall("fb/events/"+ metric.value +"/posts");
						trend = dataManagerService.getRestCall("fb/events/"+ metric.value +"/trend");
					}
					break;
				case 'Twitter':
					if (metric.type == 'hashtag') {
						media = dataManagerService.getRestCall("tw/users/"+ metric.value +"/tweets");
					} else {
						main = dataManagerService.getRestCall("tw/users/"+ metric.value);
						media = dataManagerService.getRestCall("tw/users/"+ metric.value +"/tweets");
						trend = dataManagerService.getRestCall("tw/users/"+ metric.value +"/trend");
					}
					break;
				case 'Instagram':
					if (metric.type == 'hashtag') {
						media = dataManagerService.getRestCall("ig/hashtags/"+ metric.value +"/media");
						trend = dataManagerService.getRestCall("ig/hashtags/"+ metric.value +"/trend");
					} else {
						main = dataManagerService.getRestCall("ig/users/"+ metric.value);
						media = dataManagerService.getRestCall("ig/users/"+ metric.value +"/media");
						trend = dataManagerService.getRestCall("ig/users/"+ metric.value +"/trend");
					}
					break;

			}

			var info = viewTypeModel(false, metric.cat, metric.type, metric.value);

			angular.forEach(info,function(value){
				var parameters = value("outside");
				var call={trend: trend, media: media, main: main};

				switch (parameters.kind) {
					case 'pie': graphPromises.push(pieChartCreatorService.chartGeneration(call[parameters.source],value));
						break;
					case 'line': graphPromises.push(lineChartCreatorService.chartGeneration(call[parameters.source],value));
						break;
					case 'bar': graphPromises.push(barChartCreatorService.chartGeneration(call[parameters.source],value));
						break;
					case 'radar': graphPromises.push(radarChartCreatorService.chartGeneration(call[parameters.source],value));
						break;
				}
			});

			return $q.all(graphPromises);

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


	recipeService.$inject = ['$q','dataManagerService','viewTypeModel','barChartCreatorService','lineChartCreatorService','radarChartCreatorService','pieChartCreatorService'];

	angular
		.module('app.recipe.services.module')
		.factory('recipeService', recipeService);


})();