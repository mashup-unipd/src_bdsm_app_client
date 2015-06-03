/**
 * Name: app/scripts/controllers/public/api_docs/api-docs.ctrl.spec.js
 * Author: MashUp
 * Mail: info@mashup-unipd.it
 * Desc: unit test to the controller that manage the api docs page
 *
 * Modify
 * Version  Date        Author          Desc
 * ==========================================================
 * 0.0.1    2015-05-09  Tesser Paolo    code test
 * -----------------------------------------------------------
 *
 */


describe('Controller: ApiDocsCtrl', function() {
	'use strict';

	var $rootScope = undefined;
	var $controller = undefined;
	var scope = undefined;
	var ApiDocsModel = undefined;

	beforeEach(function () {

		// angular.mock.module('app.api-docs.data.module');
		angular.mock.module('app');


		angular.mock.inject(function (_$rootScope_, _$controller_, _ApiDocsModel_) {

			// stub values returned from getRest method in ApiDocsModel
			var rest = [
				{
					req: "recipes",
					type: 'GET',
					desc: 'Get the list of the available recipes'
				},
				{
					req: "recipes/{recipe_id}/metrics",
					type: 'GET',
					desc: 'Get the list of a recipe\'s metrics'
				}
			];

			ApiDocsModel = _ApiDocsModel_;
			spyOn(ApiDocsModel, 'getRest').and.returnValue(rest);

			$rootScope = _$rootScope_;
			$controller = _$controller_;
			scope = $rootScope.$new();

		});
	});

	beforeEach(function(){
		$controller('ApiDocsCtrl as sc', {
			$scope: scope,
			ApiDocsModel: ApiDocsModel
		});
	});


	it('should have a ApiDocsCtrl controller', function () {
		expect($controller('ApiDocsCtrl')).toBeDefined();
	});

	it('should length of the public API\'s list is not empty', function(){
		var lenList = scope.sc.restServices.length;
		expect(lenList).toBe(2);

	});

	it('should objects in the list have a determinate format if return value it\'s correct', function(){
		var restListObj = scope.sc.restServices;

		restListObj.forEach(function(element){
			expect(element.req).toBeDefined();
			expect(element.type).toBeDefined();
			expect(element.desc).toBeDefined();
		});

	});

});