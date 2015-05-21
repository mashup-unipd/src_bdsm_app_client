(function(){
    'use strict';

    /**
     * Name: app.js
     * Author: Tesser Paolo
     * Mail: p.tesser921@gmail.com or tesser.paolo@mashup-unipd.it
     * Desc: modulo che gestisce il modulo principale dell'applicazione a cui vengono iniettati i diversi moduli utili
     *       per fare funzionare l'applicativo
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-03  Tesser Paolo    code module
     * -----------------------------------------------------------
     * 0.0.2    2015-05-08  Tesser Paolo    insert module ng-token-auth
     * -----------------------------------------------------------
     * 0.0.3	2015-05-14	Tesser Paolo	insert module for user and admin services
	 * -----------------------------------------------------------
	 *
     */

    /**
     * @ngdoc overview
     * @name app
     * @description
     * # app
     *
     * Main module of the application.
     */

    angular
        .module('app', [
            'oc.lazyLoad', // modulo che gestisce il caricamento su richiesta dei file js
            'ui.router', // modulo che gestisce il routing delle pagine e dei link dell'applicativo
            'ui.bootstrap', // modulo che gestisce le direttive di bootstrap in Angular
            'angular-loading-bar',
			'ngMessages',
			'LocalStorageModule',
            // 'ng-token-auth', // modulo che gestice i servizi di autenticazione

			'app.routes', // modulo che incapsula tutti i file di routing
			'app.recipe.data.module', // modulo che incapsula il modello dei dati per le recipe
            'app.type.view.data.module', // modulo che incapsula il modello dei dati per le recipe
            'app.auth.services.module', // modulo che incapsula i servizi di autenticazione
			'app.user.services.module', // modulo che incapsula i servizi disponibili all'utente e all'amministratore
			'app.recipe.services.module', // modulo che incapusula i servizi per gestire le recipe
            'app.manager.data.services.module', // modulo che incapusula i servizi per gestire i dati locali el e chiamate remote
            'app.chart.creator.services.module', // modulo che incapusula i servizi per gestire i dati locali el e chiamate remote

        ]);

})();