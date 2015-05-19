(function(){

    'use strict';

    /**
     * Name: app/scripts/model/services/manager/manager.data.service.js
     * Author: Filippo Carnovalini
     * Mail. carnovalini.filippo@mashup-unipd.it
     *
     * Modify
     * Version  Date        Author          Desc
     * ==========================================================
     * 0.0.1    2015-05-18  Carnovalini Filippo    added notes about the module implementation
     * -----------------------------------------------------------
     * 0.0.2    2015-05-18  Carnovalini Filippo    coded with stub calls
     * -----------------------------------------------------------
     *
     */

/*
* Appunti riguardo al data manger:
* Ogni chiamata rest lo invoca.
* Lui cerca nel localstorage una entry chiamata time/{chiamataRest}.
* Se non la trova:
*   -Crea una entry chiamata time/{chiamataRest} contenente il tempo attuale
*   -Chiama gli endpoints
*   -Modifica/Aggiunge (in teoria aggiunge) una entry chiamata data/{chiamataRest} contenente il risultato della chiamata
*   -Restituisce il risultato della chiamata
* Se la trova:
*   -Controlla che la data salvata sia più recente di tot ore o no
*   Se non lo è:
*       -La aggiorna con il tempo attuale
*       -Chiama gli endpoints
*       -Modifica/aggiunge (in teoria modifica) una entry chiamata data/{chiamataRest} contenente il risultato della chiamata
*       -Restituisce il risultato della chiamata
*   Se lo è:
*       -Cerca una entry chiamata data/{chiamataRest}
*       Se non la trova:
*          -Chiama gli endpoints
*          -Aggiunge una entry chiamata data/{chiamataRest} contenente il risultato della chiamata
*          -Restituisce il risultato della chiamata
*       Se la trova:
*           -Restituisce il contenuto della entry
* */


    function dataManagerService(){

        var factory = {
            getRestCall: getRestCall
        };

        return factory;

        ///////////////

        function getRestCall(restCall){


            var restData;
            var restTime = localStorage.getItem('time/' + restCall);
            var apiCall;
            var localCall;

            if (typeof restTime === 'undefined') {
                localStorage.setItem('time/' + restCall, Date.now());
                apiCall = 'JSON foo data';        // TODO: call actual APIs
                localStorage.setItem('data/' + restCall, apiCall);
                restData=apiCall;
            } else {
				// sono passate più di tre ore (il momento della chiamata più tre ore è inferiore al (è prima del) momento attuale)
                if (restTime + 10800000 <= Date.now()) {
                    localStorage.setItem('time/'+restCall, Date.now());
                    apiCall = 'JSON foo data';	// TODO: call actual APIs
                    localStorage.setItem('data/' + restCall, apiCall);
                    restData=apiCall;	// casistica uguale a quella precedente, potenzialmente unibili
                } else {
					// i dati sono freschi
                    localCall = localStorage.getItem('data/' + restCall);

                    if (typeof restData === 'undefined'){
                        apiCall = 'JSON foo data';	// TODO: call actual APIs
                        localStorage.setItem('data/' + restCall, apiCall);
                        restData = apiCall;
                    } else {
                        restData = localCall;
                    }
                }
            }

            return restData;

        }


    }

    dataManagerService.$inject = [];

    angular
        .module('app.manager.data.services.module')
        .factory('dataManagerService', dataManagerService);


})();