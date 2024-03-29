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
				url:'recipe/:title/charts/:cat/:type/:metric/:metric2/:metric3',
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
						});
					}
				}
			});
	};


	angular
		.module('app.user.metrics.charts.routes', [
			'ui.router'
		])

		.config(['$stateProvider', ChartsRoutes])

		.run(['$rootScope', function($rootScope){
			/*
			$rootScope.$on('$stateChangeSuccess',
				function(event, toState, toParams, fromState, fromParams){
					// event.preventDefault();
					// transitionTo() promise will be rejected with
					// a 'transition prevented' error
					console.log('test');
					$state.href(fromState, fromParams);
				})
			*/
		}]);

})();
