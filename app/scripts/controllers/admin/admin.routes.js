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
     * 0.0.2	2015-05-12	Tesser Paolo	aggiunti moduli che gestiscono il routing delle pagine dell'admin
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
            'app.admin.insert-recipe.routes', /* modulo che gestisce il routing dell'inserimento di nuove recipe */
			'app.admin.users-config.routes', /* modulo che gestisce il routing per la gestione degli utenti */
			'app.admin.ratings.routes', /* modulo che gestisce il routing per la lista delle recipe */
			'app.admin.request-list.routes' /* modulo che gestisce il routing per la lista delle richieste di recipe  */
        ])

        .config(['$stateProvider', AdminConfigRoutes]);

})();
