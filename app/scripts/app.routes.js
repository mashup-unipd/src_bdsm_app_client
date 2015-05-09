(function () {
    'use strict';

    /**
     * Name: app.routes.js
     * Author: Tesser Paolo
     * Mail. p.tesser921@gmail.com or tesser.paolo@mashup-unipd.it
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-03  Tesser Paolo    cofica modulo e aggiunto modulo app.public.routes
     * -----------------------------------------------------------
     *
     */

    angular
        .module('app.routes',[
            'app.public.routes', /* modulo che incapsula i moduli di routing dell'utente non autenticato */
            'app.user.routes', /* modulo che incapsula i moduli di routing dell'utente normale */
            'app.admin.routes' /* modulo che incapsula i moduli di routing dell'amministratore */
        ]);


})();
