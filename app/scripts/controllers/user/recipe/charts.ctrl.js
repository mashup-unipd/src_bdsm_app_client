(function () {
	'use strict';

	/**
	 * Name: app/scripts/controllers/recipe/charts.ctrl.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-12  Tesser Paolo    codifica modulo
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 * @ngdoc function
	 * @name app.controller:ChartsCtrl
	 * @description
	 * # ChartsCtrl
	 * Controller of the app
	 */

	var ChartsCtrl = function () {

		var vm = this;
		vm.line = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			series: ['Series A', 'Series B'],
			data: [
				[65, 59, 80, 81, 56, 55, 40],
				[28, 48, 40, 19, 86, 27, 90]
			],
			onClick: function (points, evt) {
				console.log(points, evt);
			}
		};

		vm.bar = {
			labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
			series: ['Series A', 'Series B'],

			data: [
				[65, 59, 80, 81, 56, 55, 40],
				[28, 48, 40, 19, 86, 27, 90]
			]

		};

		vm.donut = {
			labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
			data: [300, 500, 100]
		};

		vm.radar = {
			labels:["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

			data:[
				[65, 59, 90, 81, 56, 55, 40],
				[28, 48, 40, 19, 96, 27, 100]
			]
		};

		vm.pie = {
			labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
			data : [300, 500, 100]
		};

		vm.polar = {
			labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
			data : [300, 500, 100, 40, 120]
		};

		vm.dynamic = {
			labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
			data : [300, 500, 100, 40, 120],
			type : 'PolarArea',

			toggle : function ()
			{
				this.type = this.type === 'PolarArea' ?
					'Pie' : 'PolarArea';
			}
		};
	};

	ChartsCtrl.$inject = [];

	angular.module('app').controller('ChartsCtrl', ChartsCtrl);

})();
