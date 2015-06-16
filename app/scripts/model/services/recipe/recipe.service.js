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

	function recipeService($q, dataManagerService, viewTypeModel,mapChartCreatorService, barChartCreatorService, lineChartCreatorService, radarChartCreatorService, pieChartCreatorService){

		var factory = {
			getRecipesList: getRecipesList,
			getMetricsList: getMetricsList,
			getMetricType: getMetricType,
			createRecipeRequest: createRecipeRequest,
			getMetricTypeNode: getMetricTypeNode,
			generateViews: generateViews,
			generateCompare: generateCompare
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
			var graphPromises=[];

			switch (metric.cat.toLowerCase()) {
				case 'facebook':
					if (metric.type == 'page') {
						main = dataManagerService.getRestCall("fb/pages/"+ encodeURIComponent(metric.value));
						media = dataManagerService.getRestCall("fb/pages/"+ encodeURIComponent(metric.value) +"/posts");
						trend = dataManagerService.getRestCall("fb/pages/"+ encodeURIComponent(metric.value) +"/trend");
					} else {
						main = dataManagerService.getRestCall("fb/events/"+ encodeURIComponent(metric.value));
						media = dataManagerService.getRestCall("fb/events/"+ encodeURIComponent(metric.value) +"/posts");
						trend = dataManagerService.getRestCall("fb/events/"+ encodeURIComponent(metric.value) +"/trend");
					}
					break;
				case 'twitter':
					if (metric.type == 'hashtag') {
						media = dataManagerService.getRestCall("tw/hashtags/"+ encodeURIComponent(metric.value) +"/tweets");
					} else {
						main = dataManagerService.getRestCall("tw/users/"+ encodeURIComponent(metric.value));
						media = dataManagerService.getRestCall("tw/users/"+ encodeURIComponent(metric.value) +"/tweets");
						trend = dataManagerService.getRestCall("tw/users/"+ encodeURIComponent(metric.value) +"/trend");
					}
					break;
				case 'instagram':
					if (metric.type == 'hashtag') {
						media = dataManagerService.getRestCall("ig/hashtags/"+ encodeURIComponent(metric.value) +"/media");
						trend = dataManagerService.getRestCall("ig/hashtags/"+ encodeURIComponent(metric.value) +"/trend");
					} else {
						main = dataManagerService.getRestCall("ig/users/"+ encodeURIComponent(metric.value));
						media = dataManagerService.getRestCall("ig/users/"+ encodeURIComponent(metric.value) +"/media");
						trend = dataManagerService.getRestCall("ig/users/"+ encodeURIComponent(metric.value) +"/trend");
					}
					break;

			}

			var info = viewTypeModel(false, metric.cat, metric.type, metric.value);

			angular.forEach(info,function(value){
				var parameters = value("outside");
				var call={trend: trend, media: media, main: main};

				switch (parameters.kind) {
					case 'pie': graphPromises.push(pieChartCreatorService.chartGeneration($q.all([call[parameters.source]]),value));
						break;
					case 'line': graphPromises.push(lineChartCreatorService.chartGeneration($q.all([call[parameters.source]]),value));
						break;
					case 'bar': graphPromises.push(barChartCreatorService.chartGeneration($q.all([call[parameters.source]]),value));
						break;
					case 'radar': graphPromises.push(radarChartCreatorService.chartGeneration($q.all([call[parameters.source]]),value));
						break;
				}
			});

			return $q.all(graphPromises);

		}

		function generateCompare(metrics){

			var main;
			var media;
			var trend;
			var graphPromises=[];

			var callList= function(call,metrics){
				var result=[];
				angular.forEach(metrics, function(metric){
					result.push(dataManagerService.getRestCall(call.replace("{metric}", encodeURIComponent(metric))));
				});
				return $q.all(result);
			};

			switch (metrics.cat.toLowerCase()) {
				case 'facebook':
					if (metrics.type == 'page') {
						main = callList("fb/pages/{metric}",metrics.value);
						media = callList("fb/pages/{metric}/posts",metrics.value);
						trend = callList("fb/pages/{metric}/trend",metrics.value);
					} else {
						main = callList("fb/events/{metric}",metrics.value);
						media = callList("fb/events/{metric}/posts",metrics.value);
						trend = callList("fb/events/{metric}/trend",metrics.value);
					}
					break;
				case 'twitter':
					if (metrics.type == 'hashtag') {
						media = callList("tw/hashtags/{metric}/tweets",metrics.value);
					} else {
						main = callList("tw/users/{metric}",metrics.value);
						media = callList("tw/users/{metric}/tweets",metrics.value);
						trend = callList("tw/users/{metric}/trend",metrics.value);
					}
					break;
				case 'instagram':
					if (metrics.type == 'hashtag') {
						media = callList("ig/hashtags/{metric}/media",metrics.value);
						trend = callList("ig/hashtags/{metric}/trend",metrics.value);
					} else {
						main = callList("ig/users/{metric}",metrics.value);
						media = callList("ig/users/{metric}/media",metrics.value);
						trend = callList("ig/users/{metric}/trend",metrics.value);
					}
					break;
			}


			var info = viewTypeModel(true, metrics.cat, metrics.type, metrics.value);

			angular.forEach(info,function(func){
				var parameters = func("outside");
				var call={trend: trend, media: media, main: main};

				switch (parameters.kind) {
					case 'pie': graphPromises.push(pieChartCreatorService.chartGeneration(call[parameters.source],func));
						break;
					case 'line': graphPromises.push(lineChartCreatorService.chartGeneration(call[parameters.source],func));
						break;
					case 'bar': graphPromises.push(barChartCreatorService.chartGeneration(call[parameters.source],func));
						break;
					case 'radar': graphPromises.push(radarChartCreatorService.chartGeneration(call[parameters.source],func));
						break;
				}
			});

			return $q.all(graphPromises);

		}

		/**
		 * This function inserts a new recipe request created in the back-end
		 *
		 * @param recipeReq : recipe request to insert
		 */
		function createRecipeRequest( recipeReq ){
			console.log(recipeReq);
			return dataManagerService.postRestCall('requests', recipeReq);
		}



	}


	recipeService.$inject = ['$q','dataManagerService','viewTypeModel','mapChartCreatorService','barChartCreatorService','lineChartCreatorService','radarChartCreatorService','pieChartCreatorService'];

	angular
		.module('app.recipe.services.module')
		.factory('recipeService', recipeService);


})();