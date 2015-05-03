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
     * 0.0.1    2015-05-03  Tesser Paolo    codifica modulo
     * -----------------------------------------------------------
     *
     */

    /**
     * @ngdoc overview
     * @name sbAdminApp
     * @description
     * # sbAdminApp
     *
     * Main module of the application.
     */

    angular
        .module('sbAdminApp', [
            'oc.lazyLoad', /* modulo che gestisce il caricamento su richiesta dei file js */
            'ui.router', /* modulo che gestisce il routing delle pagine e dei link dell'applicativo */
            'ui.bootstrap', /* modulo che gestisce le direttive di bootstrap in Angular */
            'angular-loading-bar',
            'app.routes' /* modulo che incapsula tutti i file di routing */
        ]);

})();