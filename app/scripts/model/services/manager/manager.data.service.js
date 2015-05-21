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
     * 0.0.3    2015-05-19  Carnovalini Filippo    corrected minor flaws
     * -----------------------------------------------------------
     *
     */


    function dataManagerService($http, $q){

        var factory = {
            getRestCall: getRestCall,
			postRestCall: postRestCall,
			putRestCall: putRestCall,
			deleteRestCall: deleteRestCall
        };

        return factory;

        ///////////////


		/**
		 * TODO
		 * @param restCall
		 * @returns {*}
		 */
        function getRestCall( restCall ){

			var basePath = 'https://bdsm-app-alpha.appspot.com/_ah/api/bdsmapp_api/1.0/';
			var url = basePath + restCall; // url to use to call back-end API in $http

			// search and take entry if it's setted from localStorage
            var restTime = localStorage.getItem('time/' + restCall);
            var apiCallPromise;
            var localCallPromise;


            if (typeof restTime === 'undefined' || restTime < Date.now() - 10800000) {

            	// no entry it's founded or time is expired
                localStorage.setItem('time/' + restCall, Date.now());

                apiCallPromise = httpRequest(url);

				// set new entry in localStorage to save promise returned from a http call
				localStorage.setItem('data/' + restCall, apiCallPromise);

            } else {
                // i dati sono freschi
                localCallPromise = localStorage.getItem('data/' + restCall);

				// per qualche ragione il record è andato perso anche se c'è la entry della data
                if (typeof localCallPromise === 'undefined'){

					apiCallPromise = httpRequest(url);

					localStorage.setItem('data/' + restCall, apiCallPromise);


                } else {
					// local data is valid and returns it
                    apiCallPromise = localCallPromise;
                }
            }

            return apiCallPromise;

        }

		/**
		 * TODO
		 * @param restCall
		 * @param value
		 */
		function postRestCall(restCall, value){
			var basePath = 'https://bdsm-app-alpha.appspot.com/_ah/api/bdsmapp_api/1.0/';
			var url = basePath + restCall; // url to use to call back-end API in $http

			console.log(url);
		}

		/**
		 * TODO
		 * @param restCall
		 * @param value
		 */
		function putRestCall(restCall, value){
			var basePath = 'https://bdsm-app-alpha.appspot.com/_ah/api/bdsmapp_api/1.0/';
			var url = basePath + restCall; // url to use to call back-end API in $http

			console.log(url);
		}

		/**
		 * TODO
		 * @param restCall
		 * @param value
		 */
		function deleteRestCall(restCall, value){
			var basePath = 'https://bdsm-app-alpha.appspot.com/_ah/api/bdsmapp_api/1.0/';
			var url = basePath + restCall; // url to use to call back-end API in $http

			console.log(url);
		}


		/**
		 * TODO
		 * @param url
		 * @returns {*}
		 */
		function httpRequest(url){

			var deferred = $q.defer();

			var configRequestHttp = {
				method: 'GET',
				responseType: 'json'
			};

			$http.get(url, configRequestHttp)
				.success(function(data){
					deferred.resolve(data);
				})
				.error(function(data, status) {
					deferred.reject(status);
				});

			return deferred.promise;
		}

    }



    dataManagerService.$inject = ['$http', '$q'];

    angular
        .module('app.manager.data.services.module')
        .factory('dataManagerService', dataManagerService);


})();