(function(){
	'use strict';
	/**
	 * Name: app/scripts/controllers/admin/request_list/request-list.ctrl.js
	 * Author: MashUp
	 * Mail. info@mashup-unipd.it
	 *
	 * Modify
	 * Version  Date        Author          Desc
	 * ==========================================================
	 * 0.0.1    2015-05-10  Tesser Paolo    code module
	 * -----------------------------------------------------------
	 *
	 */


	/**
	 * @ngdoc function
	 * @name app.controller:RequestListCtrl
	 * @description
	 * # RequestListCtrl
	 * Controller of the app
	 */


	var RequestListCtrl = function(recipeAdminService){

		var vm = this;

		vm.requestList = [];
		getRequestList();
		vm.discardRequest = discardRequest;
		vm.approvedRequest = approveRequest;

		////////////////

		/**
		 * This function retries all requests of new recipe that users create
		 * TODO (test):
		 */
		function getRequestList(){
			var requestPromise = recipeAdminService.getListOfRecipesRequest();
			requestPromise
				.then(function(data){

					var arrayRequest = data.items;

					arrayRequest.forEach(function(element){
						console.log(element);
						vm.requestList.push(element);
					});
				});

		}


		/**
		 * This function removes a request from the local list and call service to delete it in the server
		 * @param idReqRecipe : identifiers of the recipe request to discard
		 */
		function discardRequest( idReqRecipe ){
			// recipeAdminService.discardRecipeRequest(idReqRecipe);
		}

		/**
		 * This function add a request from the local list and call service to add it in the server
		 * @param idReqRecipe
		 */
		function approveRequest( idReqRecipe ){
			// recipeAdminService.approveRecipeRequest(idReqRecipe);
		}

	};

	RequestListCtrl.$inject = ['recipeAdminService'];

	angular
		.module('app')
		.controller('RequestListCtrl', RequestListCtrl);

})();
