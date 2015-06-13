(function(){
	'use strict';

	/**
	 * Name: app/scripts/controllers/admin/ratings/ratings.routes.js
	 * Author: MashUp
	 * Mail: info@mashup-unipd.it
	 * Desc: modulo che gestisce il routing per la pagina che visualizza l'elenco delle recipe in ordine di preferenze degli utenti
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-10  Tesser Paolo    codifica modulo
	 * -----------------------------------------------------------
	 *
	 */

	/**
	 *
	 * @param $stateProvider
	 */
	var RatingsRoutes = function($stateProvider) {

		$stateProvider

			.state('dashboard.ratings',{
				templateUrl: 'views/admin/ratings.html',
				url: '/ratings',
				resolve: {
					login: function(authService){
						authService.isNotLogged();
					},

					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name:'app',
							files:[
								'scripts/controllers/admin/ratings/ratings.ctrl.js'
							]
						});
					}
				}
			});
	};


	angular
		.module('app.admin.ratings.routes', [
			'ui.router'
		])

		.config(['$stateProvider', RatingsRoutes]);

})();
