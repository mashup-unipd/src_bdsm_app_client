(function(){
	'use strict';

	/**
	 * Name: app.localstorage.js
	 * Author: MashUp
	 * Mail: info@mashup-unipd.it
	 * Desc: modulo che gestisce il modulo principale dell'applicazione a cui vengono iniettati i diversi moduli utili
	 *       per fare funzionare l'applicativo
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-10  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 *
	 */

	angular
		.module('app')
		.config(function (localStorageServiceProvider) {
			localStorageServiceProvider
				.setPrefix('bdsm');
		})
		.config(function (localStorageServiceProvider) {
			localStorageServiceProvider
				.setStorageType('localStorage');
		});

})();