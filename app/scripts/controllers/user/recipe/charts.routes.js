(function(){
	'use strict';

	/**
	 * Name: app/scripts/controllers/recipe/charts.routes.js
	 * Author: MashUp
	 * Mail: info@mashup-unipd.it
	 * Desc: modulo che gestisce il routing della pagina di visualizzazione dei grafici
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-12  Tesser Paolo    codifica modulo
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 *
	 * @param $stateProvider
	 */
	var ChartsRoutes = function($stateProvider) {

		$stateProvider

			.state('dashboard.charts',{
				templateUrl:'views/user/charts.html',
				url:'/charts/:cat/:type/:metric/:metric2/:metric3',
				params: {
					metric2: "",
					metric3: ""
				},
				resolve: {
					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name:'app',
							files:[
								'scripts/controllers/user/recipe/charts.ctrl.js'
							]
						}),
							$ocLazyLoad.load({
							name:'chart.js',
							files:[
								'bower_components/angular-chart.js/dist/angular-chart.min.js',
								'bower_components/angular-chart.js/dist/angular-chart.css'
							]
						});
					}
				}
			});
	};


	angular
		.module('app.user.metrics.charts.routes', [
			'ui.router'
		])

		.config(['$stateProvider', ChartsRoutes]);

})();
