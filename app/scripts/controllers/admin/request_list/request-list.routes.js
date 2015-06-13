(function(){
	'use strict';

	/**
	 * Name: app/scripts/controllers/admin/request_list/request-list.routes.js
	 * Author: MashUp
	 * Mail: info@mashup-unipd.it
	 * Desc: modulo che gestisce il routing per la pagina che visualizza l'elenco delle richieste di nuove Recipe
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
	var RequestListRoutes = function($stateProvider) {

		$stateProvider

			.state('dashboard.request-list',{
				templateUrl: '../../../../views/admin/recipe-request-list.html',
				url: '/request-list',
				resolve: {
					login: function(authService){
						authService.isNotLogged();
					},

					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name:'app',
							files:[
								'scripts/controllers/admin/request_list/request-list.ctrl.js'
							]
						});
					}
				}
			});
	};


	angular
		.module('app.admin.request-list.routes', [
			'ui.router'
		])

		.config(['$stateProvider', RequestListRoutes]);

})();
