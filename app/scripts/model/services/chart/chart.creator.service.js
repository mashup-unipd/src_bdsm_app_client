(function(){

	'use strict';

	/**
	 * Name: app/scripts/model/services/chart/chart.creator.service.js
	 * Author: Filippo Carnovalini
	 * Mail. carnovalini.filippo@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author                  Desc
	 * ===========================================================
	 * 0.0.1    2015-05-20  Carnovalini Filippo     started coding
	 * -----------------------------------------------------------
	 *
	 */

	function chartCreatorService($sce,$q){


		var factory = {
				chartGeneration: chartGeneration,
				dataFormat: dataFormat
		};


		return factory;

		///////////////


		function chartGeneration(data, info){

			var sv= this;

			var graph = $q.defer();

			var callResults= [];
			data
				.then(function(list){
					var array = list.items;
					array.forEach(function(element){
						callResults.push(element);
					});

					//to generate always different ids simply uses a timestamp (also adds a random part in the case two ids are generated in the same millisecond)
					var id = (Date.now().toString() + Math.ceil(Math.random()*1000));


					var canvas = '<canvas id="g'+id + 'Canvas" width="600" height="400"></canvas>';


					var format= sv.dataFormat(callResults, info);
					canvas += format.replace(/IDPLACEHOLDER/g,id);

					var result= {
						desc: info,
						data: $sce.trustAsHtml(canvas)
					};
					graph.resolve(result);

				});

			return graph.promise;

		}
		function dataFormat(data, info){
				//To be implemented in child services
		}

	}

	chartCreatorService.$inject = ['$sce','$q'];

	angular
			.module('app.chart.creator.services.module')
			.factory('chartCreatorService', chartCreatorService)


})();