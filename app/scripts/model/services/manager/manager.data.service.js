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


    function dataManagerService($http, $q, localStorageService){

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

			// search and take entry if it's setted from localStorageService
            var restTime = getLocalItem('time/' + restCall);

			var apiCallPromise;

            var localCallData;

			// no entry it's founded entry or time is expired
            if (typeof restTime === 'undefined' || restTime < Date.now() - 10800000) {

                setLocalItem('time/' + restCall, Date.now());

                apiCallPromise = httpGetRequest(url);
				apiCallPromise
					.then(function(data){
						// create an object with 'items' property because in the controller we return a promise that use 'items' to read data
						var arrayData = {
							items: data.items
						};
						// set new entry in localStorage to save data returned from a http call
						setLocalItem('data/' + restCall, arrayData);
					});


            } else {
                // i dati sono freschi
                localCallData = getLocalItem('data/' + restCall);

				// if data record was loosed even if there is time record
                if (typeof localCallData === 'undefined'){

					apiCallPromise = httpGetRequest(url);
					apiCallPromise
						.then(function(data){
							// create an object with 'items' property because in the controller we return a promise that use 'items' to read data
							var arrayData = {
								items: data.items
							};
							// set new entry in localStorage to save data returned from a http call
							setLocalItem('data/' + restCall, arrayData);
						});


                } else {
					// local data is valid and returns it as a promise
                    apiCallPromise = $q.when(localCallData);
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

			// here in then status of a promise, we must edit or delete the element from the datastore

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




		/////////////// Private functions

		/**
		 * TODO
		 * @param url
		 * @returns {*}
		 */
		function httpGetRequest(url){

			var deferred = $q.defer();

			var configRequestHttp = {
				method: 'GET',
				responseType: 'json',
				timeout: 2000
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

		/**
		 * TODO
		 * @param key
		 * @returns {*}
		 */
		function getLocalItem(key){
			return localStorageService.get(key);
		}

		/**
		 * TODO
		 * @param key
		 * @param value
		 */
		function setLocalItem(key, value){
			localStorageService.set(key, value);
		}
    }



    dataManagerService.$inject = ['$http', '$q', 'localStorageService'];

    angular
        .module('app.manager.data.services.module')
        .factory('dataManagerService', dataManagerService);


})();