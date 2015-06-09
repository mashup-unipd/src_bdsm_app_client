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
	 * 0.0.1	2015-05-18  Carnovalini Filippo		added notes about the module implementation
	 * -----------------------------------------------------------
	 * 0.0.2	2015-05-18  Carnovalini Filippo   coded with stub calls
	 * -----------------------------------------------------------
	 * 0.0.3	2015-05-19  Carnovalini Filippo   corrected minor flaws
	 * -----------------------------------------------------------
	 * 0.0.4	2015-05-20	Tesser Paolo		   		implement real call with $http and $q service
	 * -----------------------------------------------------------
	 *
	 */


	function dataManagerService($http, $q, localStorageService, api){

		var factory = {
			getRestCall: getRestCall,
			postRestCall: postRestCall,
			postCredRestCall: postCredRestCall,
			putRestCall: putRestCall,
			deleteRestCall: deleteRestCall,
			deleteCredRestCall: deleteCredRestCall
		};

		return factory;

		///////////////

		/**
		 * This function calls an http get request to retry data from the server or from localStorage
		 * TODO (test):
		 * @param restCall : collection to add at the end of the base path for do a real call
		 * @returns {*} :
		 */
		function getRestCall( restCall ){

			var url = api.API_BASE + restCall; // url to use to call back-end API in $http

			// search and take entry if it's setted from localStorageService
			var restTime = getLocalItem('time/' + restCall);

			var apiCallPromise;

			var localCallData;

			// no entry is found or time is expired
			if (typeof restTime === 'undefined' || restTime < Date.now() - 10800000) {

				apiCallPromise = httpGetRequest(url);
				apiCallPromise
					.then(function(data){
						// create an object with 'items' property because in the controller we return a promise that use 'items' to read data
						var arrayData = {
							items: data
						};
						// set new entry in localStorage to save data returned from a http call
						setLocalItem('data/' + restCall, arrayData);
						setLocalItem('time/' + restCall, Date.now());

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
								items: data
							};
							// set new entry in localStorage to save data returned from a http call
							setLocalItem('data/' + restCall, arrayData);
							});


				} else {
					// local data is valid and returns it as a promise
					apiCallPromise = $q.when(localCallData.items);
				}
			}

			return apiCallPromise;

		}

		/**
		 * This function calls an http post request that it pass value receved from recipeAdminService and send them at the back-end
		 * TODO (test):
		 * @param restCall : collection to add at the end of the base path for do a real call
		 * @param value : data to send at the back-end
		 * @return {*} : promise that will be solve when request going to success or reject
		 */
		function postRestCall(restCall, value){

			var url = api.API_BASE + restCall; // url to use to call back-end API in $http
			var apiCallPromise;
			// here in then status of a promise, we must edit or delete the element from the datastore


			apiCallPromise = httpPostRequest(url, value);
			apiCallPromise
				.then(function(data){

						var key = 'data/' + restCall;
						// takes old local value without add and save it in a temporary array
						var tempVal = getLocalItem(key);
						// remove local old from localStorage
						removeLocalItem(key);
						// add new value to the temporary array
						tempVal.items.items.push(value);
						// storage new temporary array in the localStorage
						setLocalItem(key, tempVal);

				});

			return apiCallPromise;
		}

		/**
		 * This function calls an http post request that it pass value receved from recipeAdminService and send them at the back-end
		 * TODO (test):
		 * @param restCall : collection to add at the end of the base path for do a real call
		 */
		function postCredRestCall(restCall){
			var url = api.API_BASE + restCall; // url to use to call back-end API in $http
			var apiCallPromise;

			apiCallPromise = httpPostRequest(url, '');
			apiCallPromise
				.then(function(data){
					var key = 'cred';
					removeLocalItem(key);
					// storage new temporary array in the localStorage
					setLocalItem(key, data);

				});

			return apiCallPromise;
		}

		/**
		 * TODO: implement
		 * TODO (test):
		 * @param restCall
		 * @param value
		 */
		function putRestCall(restCall, value){
			var url = api.API_BASE + restCall; // url to use to call back-end API in $http
			console.log(url);
		}

		/**
		 * This function calls an http delete request
		 * TODO (test):
		 * @param restCall
		 * @param id : title of the element to delete
		 * @param indexElement : index of the element to delete present in the localStorage array
		 */
		function deleteRestCall(restCall, id, indexElement){
			var url = api.API_BASE + restCall + '/' + id; // url to use to call back-end API in $http
			var apiCallPromise;
			// here in then status of a promise, we must edit or delete the element from the datastore


			apiCallPromise = httpDeleteRequest(url);
			apiCallPromise
				.then(function(){
					var key = 'data/' + restCall;
					// takes old local value without add and save it in a temporary array
					var tempVal = getLocalItem(key);
					// remove local old from localStorage
					removeLocalItem(key);
					// remove element to the temporary array
					tempVal.items.items.splice(indexElement, 1);
					// storage new temporary array in the localStorage
					setLocalItem(key, tempVal);
				});

			return apiCallPromise;

		}

		/**
		 * TODO
		 * TODO (test):
		 * @param restCall
		 */
		function deleteCredRestCall(restCall){
			var url = api.API_BASE + restCall; // url to use to call back-end API in $http
			var apiCallPromise;

			apiCallPromise = httpDeleteRequest(url);
			apiCallPromise
				.then(function(data){
					var key = 'cred';
					removeLocalItem(key);
					// storage new temporary array in the localStorage
					setLocalItem(key, data);

				});

			return apiCallPromise;
		}



		/////////////// Private http functions

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
		 * This function TODO
		 * @param url
		 * @param value
		 * @returns {*}
		 */
		function httpPostRequest(url, value){
			var deferred = $q.defer();

			var configRequestHttp = {
				method: 'POST',
				responseType: 'json',
				timeout: 2000
			};

			$http.post(url, value, configRequestHttp)
				.success(function(data){
					deferred.resolve(data);
				})
				.error(function(data, status) {
					deferred.reject(status);
				});

			return deferred.promise;
		}

		/**
		 * This function TODO
		 * @param url
		 */
		function httpDeleteRequest(url){
			var deferred = $q.defer();

			var configRequestHttp = {
				method: 'DELETE',
				responseType: 'json',
				timeout: 2000
			};

			$http.delete(url, configRequestHttp)
				.success(function(data){
					deferred.resolve(data);
				})
				.error(function(data, status) {
					deferred.reject(status);
				});

			return deferred.promise;
		}



		/////////////// Private localStorage functions

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

		/**
		 *
		 * @param key
		 */
		function removeLocalItem(key){
			localStorageService.remove(key);
		}
	}



	dataManagerService.$inject = ['$http', '$q', 'localStorageService', 'api'];

	angular
			.module('app.manager.data.services.module')
			.factory('dataManagerService', dataManagerService);


})();