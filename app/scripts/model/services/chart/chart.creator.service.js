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

	function chartCreatorService($sce){


		var factory = {
				chartGeneration: chartGeneration,
				dataFormat: dataFormat

		};


		return factory;

		///////////////


		function chartGeneration(data, info){

			//to generate always different ids simply uses a timestamp (also adds a random part in the case two ids are generated in the same millisecond)
			var id = (Date.now().toString() + Math.ceil(Math.random()*1000));


			var result = '<canvas id="g'+id + 'Canvas" width="600" height="400"></canvas>';


			var format= dataFormat();
			result += format.replace(/IDPLACEHOLDER/g,id);

			return {
					desc: "Likes on the page over time (monthly)",
					data: $sce.trustAsHtml(result)
			};

		}

		function dataFormat(){

				return '\n<script>\n' +
				'var gIDPLACEHOLDERData = {' +
				'labels : ["January","February","March","April","May"],\n'+
				'datasets : ['+
				'{fillColor : "rgba(172,194,132,0.4)",\n' +
				'strokeColor : "rgba(172,194,132,1)",\n' +
				'pointColor : "rgba(172,194,132,1)",\n'+
				'data : [104023,106390,106448,107982,108219]}]};\n'+
				'var gIDPLACEHOLDERGraph = document.getElementById(\'gIDPLACEHOLDERCanvas\').getContext(\'2d\');\n'+
				'new Chart(gIDPLACEHOLDERGraph).Line(gIDPLACEHOLDERData);'+
				'</script>';

		}

	}

	chartCreatorService.$inject = ['$sce'];

	angular
			.module('app.chart.creator.services.module')
			.factory('chartCreatorService', chartCreatorService)


})();