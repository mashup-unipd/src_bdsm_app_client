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

			var configRequestHttp = {
				method: 'GET',
				responseType: 'json'
			};

			var deferred = $q.defer();

			var restData;
            var restTime = localStorage.getItem('time/' + restCall);
            var apiCall;
            var localCall;



            if (typeof restTime === 'undefined' || restTime < Date.now() - 10800000) {

            	// non è trovato o sono passate più di tre ore
                localStorage.setItem('time/' + restCall, Date.now());

				$http.get(url, configRequestHttp)
					.success(function(data){
						deferred.resolve(data);
					})
					.error(function(data, status) {
						deferred.reject(status);
					});

                apiCall = deferred.promise;

				apiCall
					.then(function(data){
						restData = data.items;
						localStorage.setItem('data/' + restCall, restData);
						return restData;
					}, function(error){
						return error;
					});

            } else {
                // i dati sono freschi
                localCall = localStorage.getItem('data/' + restCall);

				// per qualche ragione il record è andato perso anche se c'è la entry della data
                if (typeof localCall === 'undefined'){

					$http.get(url, configRequestHttp)
						.success(function(data){
							deferred.resolve(data);
						})
						.error(function(data, status) {
							console.error('Response error', status, data);
						});

					apiCall = deferred.promise;

					localStorage.setItem('data/' + restCall, apiCall);

					restData = apiCall;

                } else {
					// local data is valid and returns it
                    restData = localCall;
                }
            }

            return restData;

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
    }



    dataManagerService.$inject = ['$http', '$q'];

    angular
        .module('app.manager.data.services.module')
        .factory('dataManagerService', dataManagerService);


})();