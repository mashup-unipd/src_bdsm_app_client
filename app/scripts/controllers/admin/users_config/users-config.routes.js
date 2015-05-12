(function(){
	'use strict';

	/**
	 * Name: app/scripts/controllers/admin/users_config/users-config.routes.js
	 * Author: MashUp
	 * Mail: info@mashup-unipd.it
	 * Desc: modulo che gestisce il routing per la pagina che visualizza l'elenco degli utenti e ne consente la modifica dei permessi
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
	var UsersConfigRoutes = function($stateProvider) {

		$stateProvider

			.state('dashboard.users-config',{
				templateUrl: 'views/admin/users-config.html',
				url: '/users-config',
				resolve: {
					loadMyFiles: function($ocLazyLoad) {
						return $ocLazyLoad.load({
							name:'app',
							files:[
								'scripts/controllers/admin/users_config/users-config.ctrl.js'
							]
						});
					}
				}
			});
	};


	angular
		.module('app.admin.users-config.routes', [
			'ui.router'
		])

		.config(['$stateProvider', UsersConfigRoutes]);

})();
