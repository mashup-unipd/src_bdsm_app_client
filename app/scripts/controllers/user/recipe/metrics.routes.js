(function(){
    'use strict';

    /**
     * Name: app/scripts/controllers/recipe/metrics.routes.js
     * Author: MashUp
     * Mail: info@mashup-unipd.it
     * Desc: modulo che gestisce il routing della pagina delle metriche di una Recipe
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-04  Tesser Paolo    code module
     * -----------------------------------------------------------
     * 0.0.2	2015-05-14	Tesser Paolo	add param title to url
	 * -----------------------------------------------------------
	 *
     */

    /**
     *
     * @param $stateProvider
     */
    var MetricsConfigRoutes = function($stateProvider) {

			$stateProvider
				.state('dashboard.metrics',{
					url: 'recipe/:title',
					templateUrl:'views/user/metrics.html',
					controller: 'MetricsCtrl',
					resolve: {
							loadMyFiles: function($ocLazyLoad) {
									return $ocLazyLoad.load({
											name:'app',
											files:[
													'scripts/controllers/user/recipe/metrics.ctrl.js'
											]
									});
							}
					}
				});
    };


    angular
        .module('app.user.metrics.routes', [
            'ui.router',
            'app.user.metrics.charts.routes'
        ])

        .config(['$stateProvider', MetricsConfigRoutes]);

})();
