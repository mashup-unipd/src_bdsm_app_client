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
		 * TODO
		 * TODO (test):
		 * @returns {*}
		 */
		function getRequestList(){
			var arrayRequest = recipeAdminService.getListOfRecipesRequest();
			arrayRequest.forEach(function(element){
				vm.requestList.push(element);
			});
		}


		/**
		 * TODO
		 * TODO (test):
		 * @param idReqRecipe
		 */
		function discardRequest( idReqRecipe ){
			recipeAdminService.discardRecipeRequest(idReqRecipe)
				.then(function(){
					// TODO
					console.log(idReqRecipe);
				});
		}

		/**
		 * TODO
		 * TODO (test):
		 * @param idReqRecipe
		 */
		function approveRequest( idReqRecipe ){
			recipeAdminService.approveRecipeRequest(idReqRecipe)
				.then(function(){
					// TODO
					console.log(idReqRecipe);
				});
		}

	};

	RequestListCtrl.$inject = ['recipeAdminService'];

	angular
		.module('app')
		.controller('RequestListCtrl', RequestListCtrl);

})();
