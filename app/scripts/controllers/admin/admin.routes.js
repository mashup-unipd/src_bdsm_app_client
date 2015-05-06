(function(){
    'use strict';

    /**
     * Name: admin.routes.js
     * Author: Tesser Paolo
     * Mail: p.tesser921@gmail.com
     * Desc: modulo che gestisce il routing più esterno dell'applicazione, differenzia tra utente autenticato e non,
     *       inglobando i moduli per gestire tutte le viste degli Utente autenticati e degli amministratori
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-04  Tesser Paolo    codifica modulo
     * -----------------------------------------------------------
     *
     */

    /**
     *
     * @param $stateProvider
     */
    var AdminConfigRoutes = function($stateProvider) {

    };


    angular
        .module('app.admin.routes', [
            'ui.router',
            'app.insert-recipe.routes' /* modulo che gestisce */
        ])

        .config(['$stateProvider', AdminConfigRoutes]);

})();
